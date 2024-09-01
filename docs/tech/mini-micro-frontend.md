---
title: 手写类 Garfish 微前端框架
customTag: tech>Frontend Engineer
editLink: true
date: 2024.09.01
---

# 手写类 Garfish 微前端框架

## 前言

上文我们简单地介绍了微前端的概念，本文我们将借鉴 Garfish 来实现我们的一个微前端框架。

在实现之前，还是先讲讲 Garfish 吧，毕竟实现一个东西之前，我们先要了解他。

## Garfish

<aside> 💡 Garfish 的设计思路和技术细节在 [https://www.garfishjs.org/blog](https://www.garfishjs.org/blog) 中。

</aside>

我们先来看看 Garfish 如何使用。

根据官方文档，我们只需要在主应用中写下方的代码，我们就拥有了执行 Garfish 的能力。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240901160543.png)

但这段语句背后做了啥呢，官方的博客，也给了对应的运行流程图，我们大概看这个图，也是能稍微理解。

但一句话就是：主应用做好子应用的注册并调用 [Garfish.run](http://Garfish.run)，会监听路由变化，但路由变化能匹配新的子应用后，Garfish 会卸载旧子应用，然后加载新的子应用。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240901160606.png)


而如何实现这个流程，主要还是归功于下方 Garfish 的设计。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240901160624.png)

- **主应用基座**：指我们的容器应用，或者我们初始化 Garfish 的地方。
- **Loader**：应用加载器， Garfish 提供了 HTML， JS 等产物的加载方式。
- **Router**：监听路由变化和匹配。
- **Store**：建立通信桥梁，提供共享机制
- **沙箱隔离子应用**：JavaScript 沙箱， DOM 隔离。
- **生命周期**：Garfish 抽象了一套生命周期，方便开发者进行调用。

## 思路

上方我们了解到 Garfish 的核心思想是通过 JavaScript 沙箱和 DOM 隔离来实现微前端。

于是，我们也可以按照类似的思路去实现微前端，主要组件包括：

- **主应用（容器应用）**: 提供容器，并在特定时机加载子应用即可。
- **子应用：**需要子应用作点改造，暴露一个约定的配置，从而做渲染和加载**。**
- **Loader 应用加载器：**加载子应用资源的特有模块**。**
- **JavaScript 沙箱**：做主、子应用的隔离。
- **生命周期：**支持生命周期，方便后续的插件、配置修改等能力的扩展**。**

## 具体实现

### 主应用

<aside> 💡

提供容器，并在特定时机加载子应用即可。

</aside>

这里，我们的主应用只需要提供容器，以及调用微前端的执行时间就 ok 了，即如下代码。

```tsx
import miniMicroFrontend from "./mini-micro-frontend";

const App = () => {
  useEffect(() => {
	  miniMicroFrontend.run({
      domGetter: "#sub_app_container",
    });
    
    const app = await miniMicroFrontend.load({
      name: "app1",
			entry: "<http://localhost:8086/main.js>",
    });
    
    app.mount();
  });
  
  return (
    <div id="sub_app_container"></div>
  );
}
```

### 子应用

<aside> 💡

改成约定的格式，从而便于主应用加载时进行渲染。

</aside>

子应用，我们也按照 Garfish 给的规范来进行处理，这里我们得注意下三点

- 内部数据结果实现
- 入口文件暴露 `provider` 函数
- 使用 `umd` 格式进行打包

**内部数据结果实现**

```tsx
import Sandbox from "../sandbox";
import {
  MiniMicroFrontendAppConfig,
  MiniMicroFrontendRunOptions,
} from "../typings";

class MiniMicroFrontendApp {
  private appConfig: MiniMicroFrontendAppConfig;
  private config: MiniMicroFrontendRunOptions;
  private sourceCode: string;
  private providerRes: any;
  private sandbox: Sandbox = new Sandbox();

  constructor(
    appConfig: MiniMicroFrontendAppConfig,
    sourceCode: string,
    config: MiniMicroFrontendRunOptions
  ) {
    this.appConfig = appConfig;
    this.sourceCode = sourceCode;
    this.config = config;
  }

  mount() {
    const source = this.sourceCode;

    const { provider } = this.sandbox.run(source);
    this.providerRes = provider();
    this.providerRes?.render({
      dom: document.querySelector(this.config.domGetter!),
    });
  }

  unmount() {
    this.providerRes?.destroy({
      dom: document.querySelector(this.config.domGetter!),
    });
  }
}

export default MiniMicroFrontendApp;
```

**入口文件暴露 Provider 函数**

根据 Garfish 的规范，我们需要暴露一个 Provider 函数，最终放有 render 和 destroy 的对象。

```tsx
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

export const provider = () => ({
  render: ({ dom }) => {
    ReactDOM.createRoot(dom).render(<App />);
  },

  destroy: ({ dom }) => {
    ReactDOM.createRoot(dom).unmount();
  },
});
```

**使用 umd 格式打包产物**

本质上是希望能够拿到暴露出来的 Provider，所以使用 umd 来取。

这里比较依赖打包工具，这里用 rspack 举个例子。

```tsx
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  output: {
    libraryTarget: "umd",
    publicPath: "<http://localhost:8086/>",
  },
});

```

满足上方三个点之后，我们就有加载子应用过程中 `mount` 和 `unmount` 能力。

### Loader

<aside> 💡

资源加载器，做好资源代码的加载。

</aside>

Loader，你可以理解为资源加载器，主要是为了加载应用资源。

```tsx
import { MiniMicroFrontendAppConfig } from "../typings";
import { AppLoaderInfo } from "./typings";
export * from "./typings";

class Loader {
  appMap: WeakMap<MiniMicroFrontendAppConfig, AppLoaderInfo> = new WeakMap();

  async loadApp(app: MiniMicroFrontendAppConfig) {
    if (this.appMap.has(app)) {
      return this.appMap.get(app) as AppLoaderInfo;
    }

    const sourceCode = await (await fetch(app.entry)).text();
    const appLoaderInfo: AppLoaderInfo = {
      sourceCode,
    };
    this.appMap.set(app, appLoaderInfo);

    return appLoaderInfo;
  }
}

export default Loader;

```

上方是 Loader 的简单实现，主要是为了获取资源文件，方便提取 `Provider` 并且进行代码执行。

### 沙箱处理

<aside> 💡

沙箱处理可以说是微前端的重点，因为主、子应用可能对 window 都有不同的副作用，位了考虑安全性，沙箱处理是很重要的一个点。

</aside>

**目标**：实现一个 `JS` 沙箱，来尽量实现 JS 对全局变量的隔离，如 window, location, document 等对象。

本次我们使用 `Proxy` 来进行沙箱代理，也就是 `Garfish` 中的 [`vm`](https://www.garfishjs.org/guide/sandbox#vm-%E6%B2%99%E7%AE%B1) 沙箱。

基本思路如下。本质上是通过对全局变量的代理，从而去减少全局变量的改写，从而减少变量污染。

```jsx
class Sandbox {
  
  constructor() {
    this.proxyWindow = new Proxy(window, ...);
    this.proxyDocument = new Proxy(document, ...);
    this.proxyLocation = new Proxy(location, ...);
  }

  run(code: string): Record<string, any> | undefined {
    const exports: Record<string, any> = {};

    this.activate();

    let result: Record<string, any> | undefined = undefined;

    try {
      const executionFunction = new Function(
        "window",
        "document",
        "location",
        "exports",
        `
        with (window) {
          ${code};
          return exports;
        }
      `
      );

      result = executionFunction(
        this.proxyWindow,
        this.proxyDocument,
        this.proxyLocation,
        exports
      );
    } catch (err) {
      console.error(err);
    }

    return result;
  }
}
```

完整代码

```jsx
class Sandbox {
  private proxyWindow: Window | null = null;
  private proxyDocument: Document | null = null;
  private proxyLocation: Location | null = null;
  private modifiedProps: Map<object, Set<string | symbol>>;
  private active: boolean;
  private originalValues: Map<object, Map<string | symbol, any>>;
  private fakeWindow: Record<string | symbol, any> = {};
  private fakeDocument: Record<string | symbol, any> = {};
  private fakeLocation: Record<string | symbol, any> = {};

  constructor() {
    this.modifiedProps = new Map();
    this.active = false;
    this.originalValues = new Map();
    this.initialProxy();
  }

  private initialProxy() {
    this.proxyWindow = this.createProxy(window) as Window;
    this.proxyDocument = this.createProxy(document) as Document;
    this.proxyLocation = this.createProxy(location) as Location;
  }

  private createProxy(obj: object) {
    if (!this.modifiedProps.has(obj)) {
      this.modifiedProps.set(obj, new Set());
    }
    if (!this.originalValues.has(obj)) {
      this.originalValues.set(obj, new Map());
    }

    return new Proxy(obj, {
      get: (target, p) => {
        if (p === Symbol.unscopables) {
          return target;
        }
        const val = (target as any)[p as string | symbol];
        if (!this.active) {
          return val;
        }

        const modifiedPropsSet = this.modifiedProps.get(target)!;
        if (modifiedPropsSet.has(p)) {
          const fakeObject = this.getFakeObject(target);
          return fakeObject[p as string];
        }

        if (typeof val === "function") {
          return val.bind(target);
        }
      },
      set: (target: object, prop: string | symbol, value: any) => {
        if (!this.active) {
          (target as any)[prop] = value;
          return true;
        }

        const modifiedPropsSet = this.modifiedProps.get(target)!;
        const originalValuesMap = this.originalValues.get(target)!;
        if (!modifiedPropsSet.has(prop)) {
          originalValuesMap.set(prop, (target as any)[prop]);
          modifiedPropsSet.add(prop);
        }
        const fakeObject = this.getFakeObject(target);
        fakeObject[prop as string] = value;
        return true;
      },
      has: (target: object, prop: string | symbol) => {
        return prop in target || this.modifiedProps.get(target)!.has(prop);
      },
    });
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  run(code: string): Record<string, any> | undefined {
    const exports: Record<string, any> = {};

    this.activate();

    let result: Record<string, any> | undefined = undefined;

    try {
      const executionFunction = new Function(
        "window",
        "document",
        "location",
        "exports",
        `
        with (window) {
          ${code};
          return exports;
        }
      `
      );

      result = executionFunction(
        this.proxyWindow,
        this.proxyDocument,
        this.proxyLocation,
        exports
      );
    } catch (err) {
      console.error(err);
    }

    return result;
  }

  reset() {
    this.deactivate();
    for (const [target, modifiedPropsSet] of this.modifiedProps.entries()) {
      const originalValuesMap = this.originalValues.get(target)!;
      const fakeObject = this.getFakeObject(target);
      for (const prop of modifiedPropsSet) {
        if (originalValuesMap.has(prop)) {
          fakeObject[prop as string] = originalValuesMap.get(prop);
        } else {
          delete fakeObject[prop as string];
        }
      }
      modifiedPropsSet.clear();
      originalValuesMap.clear();
    }
  }

  private getFakeObject(target: object): { [key: string]: any } {
    if (target === window) return this.fakeWindow;
    if (target === document) return this.fakeDocument;
    if (target === location) return this.fakeLocation;
    throw new Error("Unknown target object");
  }
}

export default Sandbox;
```

`MiniMicroFrontendApp`

```jsx
import Sandbox from "../sandbox";
import {
  MiniMicroFrontendAppConfig,
  MiniMicroFrontendRunOptions,
} from "../typings";

class MiniMicroFrontendApp {
  mount() {
    const source = this.sourceCode;

    const { provider } = this.sandbox.run(source);
    this.providerRes = provider();
    this.providerRes?.render({
      dom: document.querySelector(this.config.domGetter!),
    });
  }
}

export default MiniMicroFrontendApp;

```

本质上是 `mount` 的时候去通过执行沙箱代码。

由于篇幅关系， `sandbox` 并没有讲的很深入，而且也只是简单实现了一遍，同时，由于是基于 `proxy` 实现的，所以还会面临兼容性问题，所以还有 `快照沙箱` 的概念。

如果读者对这一块感兴趣，后续笔者会专门写篇文章具体讲讲。

### 生命周期

<aside> 💡

支持生命周期，方便后续的插件、配置修改等能力的扩展

</aside>

插件、生命周期感觉应该是一个框架必不可少的部分的。同样的， `Garfish` 设计的比较巧妙，也提供了插件能力，具体而言沙箱，路由能力貌似都是以插件的形式进行支持的。

我们这里也稍微实现下吧，本质还是参考 `webpack` 和 `tapable` 的那一套。

```jsx
import { SyncHook } from "./syncHook";
import { LifeCycle, LifeCycleKey, MiniMicroFrontendPlugin } from "./typings";

class PluginSystem {
  public lifeCycle: LifeCycle = {
    bootstrap: new SyncHook("bootstrap"),
    beforeLoad: new SyncHook("beforeLoad"),
    afterLoad: new SyncHook("afterLoad"),
    beforeMount: new SyncHook("beforeMount"),
    afterMount: new SyncHook("afterMount"),
    beforeUnmount: new SyncHook("beforeUnmount"),
    afterUnmount: new SyncHook("afterUnmount"),
  };

  private plugins: MiniMicroFrontendPlugin[] = [];

  usePlugin(plugin: MiniMicroFrontendPlugin) {
    if (this.plugins.includes(plugin)) {
      throw new Error(`plugin ${plugin.name} has been used`);
    }
    this.plugins.push(plugin);
    for (let key in this.lifeCycle) {
      const callback = plugin[key as LifeCycleKey];
      if (callback) {
        this.lifeCycle[key as LifeCycleKey].on(callback);
      }
    }
  }
}

export default PluginSystem;

```

并且挂在 MiniMicroFrontend 上

```jsx
class MiniMicroFrontend {
  hooks: PluginSystem = new PluginSystem();

  run(userOptions?: MiniMicroFrontendRunOptions & LifeCyclePluginOptions) {
    this.options = userOptions || {};
    this.hooks.usePlugin(getLifeCyclePlugin(userOptions || {}));
    this.status = "started";
    this.hooks.lifeCycle.bootstrap.emit(this.options);
  }

  async load(app: MiniMicroFrontendAppConfig) {
    this.hooks.lifeCycle.beforeLoad.emit(app);
    const { sourceCode } = await this.loader.loadApp(app);
    const appInstance = new MiniMicroFrontendApp(app, sourceCode, this.options);
    this.hooks.lifeCycle.afterLoad.emit(app);
    return appInstance;
  }
}

const miniMicroFrontend = new MiniMicroFrontend();

export default miniMicroFrontend;
```

后续我们就可以这么调用

```jsx
miniMicroFrontend.hooks.lifeCycle.bootstrap.on((...args) => {
	console.log(
	  'miniMicroFrontend', ...args
	);
})
```

### 整体框架

我们先整体将流程串起来

```tsx
import MiniMicroFrontendApp from "./app";
import { LifeCyclePluginOptions, getLifeCyclePlugin } from "./built-in";
import PluginSystem from "./hooks/pluginSystem";
import Loader from "./loader";
import {
  MiniMicroFrontendAppConfig,
  MiniMicroFrontendRunOptions,
} from "./typings";

class MiniMicroFrontend {
  status: "started" | "stopped" = "stopped";
  loader: Loader = new Loader();
  options: MiniMicroFrontendRunOptions = {};
  activeApp: MiniMicroFrontendApp | null = null;
  hooks: PluginSystem = new PluginSystem();

  run(userOptions?: MiniMicroFrontendRunOptions & LifeCyclePluginOptions) {
    this.options = userOptions || {};
    this.hooks.usePlugin(getLifeCyclePlugin(userOptions || {}));
    this.status = "started";
    this.hooks.lifeCycle.bootstrap.emit(this.options);
  }

  async load(app: MiniMicroFrontendAppConfig) {
    this.hooks.lifeCycle.beforeLoad.emit(app);
    const { sourceCode } = await this.loader.loadApp(app);
    const appInstance = new MiniMicroFrontendApp(app, sourceCode, this.options);
    this.hooks.lifeCycle.afterLoad.emit(app);
    return appInstance;
  }
}

const miniMicroFrontend = new MiniMicroFrontend();

export default miniMicroFrontend;

```

下面，就是整体流程的串起来了，以及试一下 Demo

**代码**

`useInitMiniMicro`

```jsx
import React, { useEffect } from "react";
import miniMicroFrontend from "./mini-micro-frontend";
import { MiniMicroFrontendAppConfig } from "./mini-micro-frontend/typings";
import MiniMicroFrontendApp from "./mini-micro-frontend/app";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const app1: MiniMicroFrontendAppConfig = {
  name: "app1",
  entry: "<http://localhost:8086/main.js>",
};

const app2: MiniMicroFrontendAppConfig = {
  name: "app2",
  entry: "<http://localhost:8084/main.js>",
};

export const useInitMiniMicro = () => {
  const app1Ref = React.useRef<MiniMicroFrontendApp>();
  const app2Ref = React.useRef<MiniMicroFrontendApp>();

  useEffect(() => {
    miniMicroFrontend.run({
      domGetter: "#sub_app_container",
      bootstrap(options) {
        console.log("bootstrap", options);
      },
      beforeLoad(app) {
        console.log("beforeLoad", app);
      },
      afterLoad(app) {
        console.log("afterLoad", app);
      },
    });
  }, []);

  const loadApp = async (app: MiniMicroFrontendAppConfig) => {
    return await miniMicroFrontend.load(app);
  };

  const loadApp1 = async () => {
    if (app2Ref.current) {
      app2Ref.current.unmount();
    }
    await sleep(50);
    const app = await loadApp(app1);
    app1Ref.current = app;
    app.mount();
  };

  const loadApp2 = async () => {
    if (app1Ref.current) {
      app1Ref.current.unmount();
    }
    await sleep(50);
    const app = await loadApp(app2);
    app2Ref.current = app;
    app.mount();
  };

  return {
    loadApp1,
    loadApp2,
  };
};

export default useInitMiniMicro;

```

`App.tsx`

```jsx
import "./App.css";
import useInitMiniMicro from "./use-init-mini-micro";
import { useEffect } from "react";

function App() {
  const { loadApp1, loadApp2 } = useInitMiniMicro();

  useEffect(() => {
    loadApp1();
  }, []);

  return (
    <div className="App">
      <h1>Mini Micro FrontEnd</h1>
      <div style={{ display: "flex", gap: 16 }}>
        <button onClick={() => loadApp1()}>react app</button>
        <button onClick={() => loadApp2()}>vue app</button>
      </div>
      <div id="sub_app_container" style={{ height: 500, width: 800 }}></div>
    </div>
  );
}

export default App;

```

整体效果
![20240901160706_rec_.gif](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240901160706_rec_.gif)

## 总结

这篇文章简单的讲了微前端框架 Garfish 的设计的思路，以及几个重要的组件和概念，如主应用、Loader、沙箱，生命周期等。同时，最终我们如何基于 Garfish 设计自己的微前端框架。具体实现上和 Garfish 的差别好有点大，但是思路方向是差不多的。

希望通过这个文章，能够让你对微前端有更多的理解吧。同时，由于篇幅问题，这里很多点没有办法讲细讲，**如 Garfish 设计的详细分析、沙箱隔离的处理**，**以及 `Router` 和 `Store` 的处理**，这些更适合单点单点去讲吧。

如果读者有需要，笔者后续可能也会去专门去写关于某个单点的文章。
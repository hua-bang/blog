---
title: mini bundler 插件系统
customTag: tech>Frontend Engineer
editLink: true
---

# mini bundler 插件系统

## 前言

在上篇文章[mini-bundler 的简易实现](https://juejin.cn/post/7317870445323223076)中，我们实现了 `mini-bundler` 的`模块解析`，`依赖图构建`、`代码转换`，实际上已经是一个能执行的 `bundler` 了。

但目前没有任何的扩展性，没有开发能力。熟悉 `webpack`、`rollup`、`vite` 的小伙伴大多都知道，大多数的 `bundler` 都会留个口子，支持外部扩展，从而丰富打包的效果和生态。

这个口子，就是 `plugin`, 插件系统。

## 如何理解 plugin

在具体设计和编码之前，我想先思考一下 `plugin` 这个概念。

`plugin` 中文为插件。插件是一种软件组件，用于扩展或增强主程序的功能。个人理解是指：**插件是指内部系统的向外部系统提供了一些对内操作的能力，以方便外部可以在特定的时机，对系统继续操作的机制**。

正如，`webpack` 的插件系统提供了一系列的生命周期钩子，同时，提供了一些内部的 api，以及打包过程中的上下文信息，从而可以方便其他插件做 `css 分离`, `代码转译`，`自定义语法解析`等强大功能。


## `mini-bundler` 插件系统设计

` mini-bundler ` 的插件系统设计着眼于提供一个简单、直观且功能完备的开发环境。它允许开发者通过插件接口介入打包器的核心功能，添加或修改功能，满足各种复杂场景的需求。其设计原则包括：

-   **易于集成**：插件开发者可以轻松地将新功能整合进 `mini-bundler`。
-   **可配置性**：插件支持配置选项，以适应不同项目的需求。
-   **扩展性**：设计考虑到未来可能的功能扩展，保证系统的灵活性。


## `mini-bundler` 的核心组件

-   **Compiler 类**：作为打包过程的指挥官，`Compiler` 类负责协调整个编译过程。它管理资源、模块解析和文件输出等关键环节。

-   **钩子（Hooks）** ：钩子是插件系统的基石。通过在关键的编译阶段提供钩子，`mini-bundler` 允许插件在如模块解析前、资产生成后等关键时刻介入。

-   **插件接口**：这是插件需要遵循的规范。一个标准的插件是一个包含 `apply` 方法的类，此方法接收 `Compiler` 实例，允许插件通过钩子与编译过程交互。

## 具体实现

### `Compiler 类` 管理

之前我们已经实现了 `bundle`, 我们只需要将 `bundle` 这个过程集成到 `Compiler` 类中就可以了。

代码如下，我们先使用一个 `Compiler` 类，后续，这里面还会处理`插件`和`hook`

```ts
import * as fs from "fs";
import { DependencyGraph } from './typings';
import { bundle } from './bundle';
import { createDependencyGraph } from './create-dependency-graph';

export class Compiler {

  private options: CompilerOptions;
  private dependencyGraph: DependencyGraph;

  constructor(options: CompilerOptions) {
    this.options = options;
  }

  bundle() {
    const { entry } = this.options;
    this.dependencyGraph = createDependencyGraph(entry);
    const result = bundle(this.dependencyGraph);
    fs.writeFileSync(this.options.output, result);
  }

  run() {
    this.bundle();
  }
}

export interface CompilerOptions {
  entry: string;
  output: string;
};
```

###  Hook 钩子机制

一个复杂的 `bundler` 的流程可能很长，于是会去抽象一些生命周期，如 `webpack` 中就有 （`emit`, `build`, `afterEmit` 等）。这些生命周期，我们都可以称为 `hook`。
`hook` 不仅要用于通知生命周期的触发，同时也会去对不同的生命周期的事件进行管理。

所以这里，我们将 `hook`设计了如下的功能。
- `管理回调函数`：支持第三方插件注册事件。
- `触发事件`: 当生命周期执行的时候，调用注册的事件。


于是，`hook` 的类型我们可以做如下定义。
- `tap`：事件注册的函数，提供给第三方使用。
- `call`: 事件触发的函数，当对应的流程/时机到的时候，直接执行。

```ts
class Hook {
  private callbacks: Array<() => void> = [];

  tap(pluginName: string, callback: () => void) {
    this.callbacks.push(callback);
  }

  call() {
    this.callbacks.forEach(callback => callback());
  }
};

export default Hook;
```

接着，我们将 `hook` 集成到 `Compiler` 中，这里我们仅实现 `beforeRun` 和 `afterRun` 两个生命周期。

```ts
import * as fs from "fs";
import { DependencyGraph } from './typings';
import { bundle } from './bundle';
import { createDependencyGraph } from './create-dependency-graph';
import Hook from "./hook";

export class Compiler {

  hooks = {
    beforeRun: new Hook(),
    afterRun: new Hook(),
  };

  private options: CompilerOptions;
  private dependencyGraph: DependencyGraph;

  constructor(options: CompilerOptions) {
    this.options = options;

    const { entry } = this.options;

    this.dependencyGraph = createDependencyGraph(entry);
  }

  bundle() {
    const result = bundle(this.dependencyGraph);
    fs.writeFileSync(this.options.output, result);
  }

  run() {
    this.hooks.beforeRun.call();
    this.bundle();
    this.hooks.afterRun.call();
  }
}

export interface CompilerOptions {
  entry: string;
  output: string;
};
```

上方实现了两个生命周期，但我们也可以提供自己自定义的 hook，不过需要把控好执行的时机。这里由于篇幅关系，就不展开了。

`hook` 设计完之后,我们来实现 plugin 的设计。

### plugin 插件

`plugin` 直接交互的应该是 `Compiler`，而 `Compiler` 也可以挂一些属性和方法, 让 `plugin` 能和 `hook`, `编译上下文` 交互。

于是，我们参考 `webpack` 中 `plugin` 的实现。

每一个 `plugin`,有个 `apply` 方法,可以获取到 `Compiler`.

```ts
import { Compiler } from "./compiler";

interface Plugin {
  apply(compiler: Compiler): void;
}

export default Plugin;
```

接着，我们就看如何将 `plugins` 集成到 `Compiler` 中。由于`plugin` 应该是作用于全流程的，所以我们理论上在 `Compiler` 初始化的时候就应该传进去。

```ts
class Compiler {
  private plugins: Plugin[];

  constructor(options: CompilerOptions) {
    this.plugins = options.plugins || [];
    this.plugins.forEach(plugin => plugin.apply(this));

    this.options = options;

    const { entry } = this.options;

    this.dependencyGraph = createDependencyGraph(entry);
  }
}
```

集成进去之后，我们可以拿到 `Compiler` 对象，但目前貌似只能和 `hook` 交互，并没有一些交互的上下文。

这个时候，同样参考了 `webpack`, `webpack` 会用一个变量，叫 `Stats` 专门存放，编译过程中上下文。

这里为了简化，我们就仅仅保存打包后的产物信息吧。

```ts
export class Stats {
  output: string | undefined;

  setOutput(output: string) {
    this.output = output;
  }
}

class Compiler {
  stats: Stats = new Stats();
  
  bundle() {
    const result = bundle(this.dependencyGraph);
    this.stats.setOutput(result);
    fs.writeFileSync(this.options.output, result);
  }
}
```

最后，我们将 `plugin` 和 `stats` 都集成到 `Compiler` 中。

```ts
import * as fs from "fs";
import { DependencyGraph } from './typings';
import { bundle } from './bundle';
import { createDependencyGraph } from './create-dependency-graph';
import Hook from "./hook";
import Plugin from "./plugin";
import { Stats } from "./stats";

export class Compiler {

  hooks = {
    beforeRun: new Hook(),
    afterRun: new Hook(),
  };

  private options: CompilerOptions;
  private dependencyGraph: DependencyGraph;
  private plugins: Plugin[];

  public stats: Stats = new Stats();

  constructor(options: CompilerOptions) {
    this.plugins = options.plugins || [];
    this.plugins.forEach(plugin => plugin.apply(this));

    this.options = options;

    const { entry } = this.options;

    this.dependencyGraph = createDependencyGraph(entry);
  }

  bundle() {
    const result = bundle(this.dependencyGraph);
    this.stats.setOutput(result);
    fs.writeFileSync(this.options.output, result);
  }

  run() {
    this.hooks.beforeRun.call();
    this.bundle();
    this.hooks.afterRun.call();
  }
}

export interface CompilerOptions {
  entry: string;
  output: string;
  plugins?: Plugin[];
};
```

这样子，我们的就可以去自定义插件了，效果大概为如下。
```ts
class MyPlugin implements Plugin {
  apply(compiler: Compiler) {
    compiler.hooks.afterRun.tap('pluginName', () => {
      console.log(compiler.stats);
    })
  }
}

new Compiler({
  entry: filePath,
  output: outputPath,
  plugins: [new MyPlugin()]
})

```

## 自定义插件示范

上方讲了设计和实现，这里，我们直接写个自定义插件收收尾。

实现一个 `copy` 最后 `bundle` 资源的插件。

```ts
import * as fs from 'fs';
import { Compiler } from "../../src/compiler";
import Plugin from "../../src/plugin";

interface CopyPluginOptions {
  output: string;
}

class CopyPlugin implements Plugin {

  options: CopyPluginOptions;

  constructor(options: CopyPluginOptions) {
    this.options = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.afterRun.tap('LoggerPlugin', () => {
      const { output } = this.options;
      if (compiler.stats.output) {
        console.log(`copy file begin: output path is ${output}`);
        fs.writeFileSync(this.options.output, compiler.stats.output);
        console.log(`copy file finished.`);
      } 
    });
  }
}

export default CopyPlugin;

new Compiler({
  entry: filePath,
  output: outputPath,
  plugins: [new CopyPlugin({ output: path.resolve(__dirname, "./output/copy.js") })]
})
```

最终效果

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/9a0c6212cb13431fbcf3308a6f9b29f8%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

打包产物：

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/95ea7c225e884570a031a77268d7d416%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

代码执行：

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/b63819b8717b43f88268aca2dca2ee68%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

同样的，当后续暴露给外部的 api 更多，更强大的时候，可以有更多的扩展能力。

## 总结

通过引入插件系统，`mini-bundler` 不仅为前端工程师提供了一个强大的工具，还极大地提高了其适应不同项目需求的能力。无论是添加新功能、优化构建过程，还是定制化输出，插件系统可以使 `mini-bundler` 变得更加强大和灵活。

## 参考

- [代码实现](https://github.com/hua-bang/wheel-awesome/blob/master/mini-bundler/src/compiler.ts)

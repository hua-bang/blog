---
title: webpack 中的 HMR
customTag: tech>Frontend Engineer
editLink: true
---

# Webpack 中的 HMR

[[toc]]

## 一、背景

> [Webpack HMR](https://webpack.js.org/concepts/hot-module-replacement)

`Hot Module Replacement`，也称为 `HMR`，是一种在应用程序运行时替换、添加或删除模块的技术，无需完全刷新页面就能更新这些模块。

- 修改 `JS` 文件，无需刷新页面，而能够直接在页面进行代码更新。
- 修改 `CSS` 文件，无需刷新页面，改动的样式能直接呈现。

这极大的提高了，前端开发者的开发效率。

目前，我们可能对 `HMR` 没有太多的体感，毕竟前端工具链层面已经做了 `HMR` 集成了，开发者无需感知里面的 `HMR` 流程和细节，只用享受 `HMR` 带来的便利。故 `HMR` 对大部分开发者来说，是比较黑盒的。

本文旨在了解 `HMR` 的流程，以及用一个具体的场景（ `webpack` ）来看 `HMR` 是如何具体使用的。

## 二、流程图解

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223223.png)

### **初始化阶段**

项目启动后，本地会开启一个服务（ `Dev Server` ），同时 `Browser` 侧会注入 `HMR Runtime` 的一些代码，使得两方都可以在后续流程用到 `HMR` 的能力。并且在初始化过程中，他们会建立一个 `WebSocket` 的链接，支持后续的双向通信。

- **`Dev Server` 侧**： `Dev Server` 中可以调用 `HMR`，提供的能力，我们称它为 HMR Server。
- **`Browser` 侧**: 注意，这里的 `browser` 侧的话，不仅仅只有 `bundler` 编译过后我们原来的代码， `HMR` 工具需要注入一些代码到 `browser` 和我们具体的代码之中，才能保证 `HMR` 热更新生效。

### 文件更新时

当项目文件更新的时候， `bundler` 会进行一次重新打包。这个时候 `HMR Server` 会计算出修改的文件，并封装成约定好的数据结构，通过 `WebSocket`，给到 `HMR Runtime`， 而这个时候 `HMR Runtime` 会通知需要修改的模块来进行更新。

### **热更新应用时**

- 在浏览器端， `HMR Runtime` 负责具体的更新流程，这包括请求新模块代码，以及在其载入后，更新模块实例或状态。
- 如果模块可以被热更新，这个过程就会发生，否则可能需要回退到完整的页面刷新。

上方仅仅是一种 `HMR` 能力实现的思路，但还是不够有体感，接着我们具体用 `Webpack` 的例子来做解释，希望能够带来更多的体感从而加深理解。

## 三、 `Webpack` 项目中的 `HMR`

下面，我们从一个简单的例子，来看 `Webpack` 项目中的热更新流程。

### 3.1 初始化项目

首先，我们来进行一个简单的 `Webpack` 项目的搭建。

`hello.js`

```jsx
const getHello = () => {
  document.body.innerHTML = "<div>hello, HMR</div>";
};

export default getHello;
```

`index.js`

```jsx
import getHello from "./hello";

getHello();
```

`webpack.config.js` 配置

```jsx
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin()],
};
```

```jsx
{
  "name": "hmr",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "dev": "webpack serve",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "webpack": "^5.90.3"
  },
  "devDependencies": {
    "html-webpack-plugin": "^5.6.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.3"
  }
}
```

当我们使用 `npm run dev` 的时候，我们看到了效果。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223305.png)

### 3.2 热更新能力的开启

我们根据 [HMR 配置](https://webpack.js.org/guides/hot-module-replacement#enabling-hmr), 进行了下方的配置。

```jsx
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    hot: true,
  },
};
```

这个时候我们对 `hello.js` 进行如下修改，理论上，不出意外的话，页面会进行局部的更新。

```jsx
const getHello = () => {
  document.body.innerHTML = "<div>hello, HMR!!!</div>";
};

export default getHello;
```

但还是出现了预期之外的事。

**表现**：页面确实是更新了，但这是因为网页进行了更新。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223330.png)

这可能会和我们的直觉不太一样，毕竟我们日常在项目中使用热更新的话，理论上是局部刷新。

实际上， `webpack` 中配置了 `devServer.hot=true` 的时候，只是给我们提供了 `HMR` 的 `API` 能力，但具体如何调用 `HMR` 做模块的替换，这个需要外部自己实现。

而日常的时候，是因为有其他插件帮我们做了这件事，如 `vue-loader` 、 `react-hot-loader` , 所以我们没有感知。

这个时候我们根据 [HMR 配置](https://webpack.js.org/guides/hot-module-replacement#enabling-hmr) 也写一个例子吧。

修改 `index.js` 代码

```jsx
import getHello from "./hello";

getHello();

if (module.hot) {
  console.log(module.hot);

  module.hot.accept(["./hello"], () => {
    console.log("hmr");
    getHello();
  });
}
```

**表现**：这时候可以看到热更新的效果已经出来了，

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223410.png)

同时，还能看到在浏览器侧，注入了一个 [module.hot](http://module.hot) 的变量。并且，我们的代码中还是用到了 module.hot 的 api 来实现热更新。

于是，引出了下方几个问题。

1. [module.hot](http://module.hot) 什么时候被注入的，为什么需要进行注入。
2. 如果需要 [module.hot](http://module.hot) 的 api，我们需要去在代码文件中，写入 `module.hot` ,这个成本是十分高的，我们如何去除这个成本。

### 3.3 具体看源码

我们根据 `package.json` 中的 `dev` 命令具体看看流程。

注意：由于文章篇幅和重点内容在于 `HMR`，只会专门描述 `HMR` 相关的知识点。其他的会进行一定的省略。

1. webpack `server` 命令。

> [webnpackCli.run](https://github.com/webpack/webpack-cli/blob/e07f0e58df103011435524d757102534b75a6796/packages/webpack-cli/src/webpack-cli.ts#L1282)

根据执行了 `server` 命令，则会有如下的调用顺序。

`webpackCli.run()` → `@webpack-cli/server 的 server 实例` → `WepackDevServer 中 DevServer.start()`

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223438.png)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223457.png)

从上方来看， `webpack server` 最终会执行到 `WebpackDevServer` 中的 `start` 函数。

我们具体看看 `start` 函数做了啥。

2. `WebpackDevServer` 中的 `start` 函数流程。

我们可以看到， `start` 函数中做了配置的适配，和初始化，同时还开启了一个 `websocket` 的链接（以方便 Server 和 Client 作为通信）。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223555.png)

同时，初始化过程修改入口文件，进行一些 `HMR` 的代码注入（entry 加入了 `webpack-dev-server/client` 和 `webpack/hot/dev-server.js`）。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223628.png)

同时，还自动注入了 `webpack.HotModuleReplacementPlugin` 的插件。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223647.png)

同时，这里还注册了 `Webpack` 的插件，利用了 `done` 这个 `hook` 来监听文件的变化。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223709.png)

这里我们初步可以看到 `start` 做了几件事。

- 开启 `ws` ，支持后续和 `browser` 的通信。
- 跟 `browser` 注入代码，如 entry 加入 `webpack-dev-server/client` 和 `webpack/hot/dev-server.js`, 而 `plugin` 加入 `webpack.HotModuleReplacementPlugin` 插件, 这些都会在 `browser` 注入代码以支持热更新的能力。
- 注册 `webpack` 插件：实现文件变化的监听，文件变化后会触发的。

3.  网页加载产物后的操作。

> 注意， `Browser` 的生命周期和 `Dev Server` 有所不同， `Dev Server` 进行初始化的时候，只会有一次，即我们在命令行启动项目的时候。而 `Browser` 的生命周期是你打开网页的时候。

- **建立 `WebSocket` 链接**

由于 `browser` 注入了 `webpack-dev-server` 的代码，所以会进行 `WebSocket` 的链接。便于后续 `Dev Server` 和 `Browser` 的通信。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223750.png)

- **注入了 `[module.hot](<http://module.hot>)` 对象，提供热更新接口**

我们可以看到，我们是能够通过打印 `[module.hot](<http://module.hot>)` 的变量的，这也是 `Webpack` 暴露给我们的 `[api](<https://webpack.js.org/api/hot-module-replacement>)`

有了这些 `api`, 便于后续我们检查文件变化，并且注册回调，做热更新。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223805.png)

但这些 `module.hot` 是如何来的，具体来说，这块是 `HotModuleReplacementPlugin` 注入的， [传送门](https://github.com/webpack/webpack/blob/651b3d66d10d54da31d4cb7123ea74d10f1f5456/lib/HotModuleReplacementPlugin.js#L196C9-L196C23)。

具体注入的细节，这里就不细过了。我们只需要知道，目前客户端初始化做了两件事。

- 建立 `WebSocket` 链接，便于后续与 `Dev Serve` 的通信。
- 提供 `HMR` 的 API。

4. 文件更新的过程。

上文提到，文件更新调用 `sendStats` ，我们仔细来看，文件热更新的话 && 文件编译没出错的情况，则会调用 `this.sendMessage(clients, "ok");`

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223848.png)

同样的，在 `client` 处，会有一个接受处理 `WS` 的处理，其中处理 `ok` 的触发的函数。

可以看到里面触发了 `reloadApp` 这个函数。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223906.png)

直接看里面的热更新的逻辑，会看到里面通过事件订阅 发送 `webpackHotUpdate` 。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223918.png)

而 `webpackHotUpdate` 事件，会触发到 `[module.hot](<http://module.hot>)` 的 `check` 函数，即图中的 `hotCheck`

里面这个时候有 \*\*webpack_require\*\*.hmrM 是用于获取 hot-update.json 的。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240318223942.png)

## 参考资料

- [https://zhuanlan.zhihu.com/p/30669007](https://zhuanlan.zhihu.com/p/30669007)
- [https://webpack.js.org/concepts/hot-module-replacement](https://webpack.js.org/concepts/hot-module-replacement)
- [https://blog.jakoblind.no/webpack-hmr/](https://blog.jakoblind.no/webpack-hmr/)
- [https://juejin.cn/book/7115598540721618944/section/7119036095211241472](https://juejin.cn/book/7115598540721618944/section/7119036095211241472)

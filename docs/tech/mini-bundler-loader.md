---
title: mini-bundler 实现：loader
customTag: tech>Frontend Engineer
editLink: true
date: 2024.01.02
---

# mini-bundler 实现：loader

## 前言

在上篇文章 [mini-bundler 的简易实现](https://juejin.cn/post/7317870445323223076)中，我们实现了 `mini-bundler` 的`模块解析`，`依赖图构建`、`代码转换`，实际上已经是一个能执行的 `bundler` 了。

但目前我们的 `mini-bundler` 仅仅只能解析 `js` 文件，这其实是很局限的，毕竟项目中会有各式各样的文件，如 `ts`、`jsx`、静态资源等文件。

一般来说，我们需要一个文件模块解析器，将不同的文件能够解析成 `js` 代码，从而能够支持 `mini-bundler` 流程。

在 `webpack` 中，`loader` 承接了这些操作。所以，本文我们继续参考了 `webpack`中 `loader` 的概念来进行实现。

在实现之前，我们先来介绍 `loader`。

## 如何理解 `loader`

> Out of the box, webpack only understands JavaScript and JSON files. **Loaders** allow webpack to process other types of files and convert them into valid [modules](https://webpack.js.org/concepts/modules) that can be consumed by your application and added to the dependency graph. - [webpack-concets](https://webpack.js.org/concepts/#loaders)

### 定义

从 `webpack` 的定义中，我们可以发现它是一个转换器，负责将源文件（如 `.js`, `.css`, `.html`）转换成 Webpack 能够处理的模块。

### 作用

- **代码转换**：Loader 允许开发者将文件从一种语言或格式（例如 TypeScript、Sass）转换成标准的 JavaScript 和 CSS，这些转换后的文件可以被浏览器解析。

- **自定义处理流程**：开发者可以通过配置一个或多个 Loader 来定义一个处理流程，例如，可以使用 `babel-loader` 将 ES6 代码转换为兼容的 JavaScript，使用 `style-loader` 和 `css-loader` 处理样式文件。

- **链式传递**：Loader 可以链式调用，每个 Loader 只需专注于完成一种特定的任务。例如，一组 Loader 可以先将 SASS 转为 CSS，再将 CSS 转为 JavaScript 模块。

所以我们可以简单地将 `loader` 看成一个转化代码的函数。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/5ded04a15f4e4171a878d421e8f23277%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

举个例子，比如 `tsx/jsx` -> `js`

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/7a8ffea839d3431ab4778f439c7d3f36%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

于是，我们的方向即为**在提取文件源代码的同时，加入一个机制，对文件进行转译**。

## 思路

上面已经确定了方向，**在提取文件源代码的同时，加入一个机制，对文件进行转译**，这里我们需要关注的主要两个点，即**时机**和**转译机制**。

### 时机

提取文件源代码的时机，我们放在创建依赖图的时候。

在构建依赖图时执行，主要是因为：

- 转换代码：`Loader` 将非标准 `JavaScript` 代码（如 `TypeScript`或 `Sass`）转换为标准 `JavaScript`，这对构建正确的依赖图是必要的。

- 解析依赖：在依赖图构建期间，`bundler` 需要理解和解析文件之间的依赖关系，`loader` 帮助它处理非 `JavaScript` 资源，确保这些依赖被正确识别。

### 转译机制：

由于一个文件可能会有多个 `loader` 来执行，所以我们可以抽一个 `Record<string, Array<Loader>>` 来处理。

其实在 `webpack` 中应该还有一套优先级的处理方式，但在这里就先不列出来了。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/a54fdafa1c7142dba70525a040c5bdd6%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

## 具体实现

思路大概定了，那么我们就具体看看实现

### loaders 数据结构

上文也讲到了，我们直接用 `Record<string, Array<Loader>>` 来做简易的实现。

而 `Loader` 本质上 是一个文件内容转文件内容，即 string -> string。

所以我们的类型定义为

```ts
export type Loader = (content: string, filePath: string) => string;

type LoaderMap = Record<string, Loader[]>;
```

### 时机触发

上文说到，我们从提取文件代码的时候处理即可。之前我们其实已经提供了 `createModule` 函数，所以我们直接在这个函数做一下改造即可，即我们加入一个 `applyLoaders` 方法来专门走文件模块解析。

#### `applyLoaders`

```ts
import * as path from "path";
export type Loader = (content: string, filePath: string) => string;

export const applyLoaders = (
  content: string,
  filePath: string,
  loaderMap: Record<string, Loader[]>
): string => {
  const extension = path.extname(filePath);
  const loaders = loaderMap[extension] || [];
  return loaders.reduce(
    (content, loader) => loader(content, filePath),
    content
  );
};
```

#### `createModule`

我们只需要在创建模块的时候，加入 `applyLoaders` 即可

```ts
export function createModule(
  filePath: string,
  loaderMap?: Record<string, Loader[]>
): Module {
  const realFilePath = resolveModule(filePath);

  const fileExtension = path.extname(realFilePath);
  let content = fs.readFileSync(realFilePath, "utf-8") || "";

  const dependencies: string[] = [];

  const mapping: Record<string, string> = {};

  if (loaderMap?.[fileExtension]) {
    content = applyLoaders(content, realFilePath, loaderMap);
  }

  const ast = parser.parse(content, {
    sourceType: "module",
  });

  const { code } =
    transformFromAstSync(ast, content, {
      presets: ["@babel/preset-env"],
    }) || {};

  content = code || content;

  traverse(ast, {
    ImportDeclaration({ node }) {
      dependencies.push(node.source.value);
    },
    CallExpression({ node }) {
      if (node.callee.type === "Identifier" && node.callee.name === "require") {
        if (BabelType.isStringLiteral(node.arguments[0])) {
          dependencies.push(node.arguments[0].value);
        }
      }
    },
  });

  dependencies.forEach((dependency) => {
    const dependencyPath = isRelativeOrAbsolutePath(dependency)
      ? path.resolve(filePath, "..", dependency)
      : dependency;

    const absoluteDependencyPath = resolveModule(dependencyPath);
    mapping[dependency] = absoluteDependencyPath;
  });

  return {
    id: path.resolve(realFilePath),
    filePath,
    content,
    dependencies,
    mapping,
  };
}
```

上方就基本实现了 `loader` 的解析机制了。下面，我们具体来实战下。

## 自定义 `loader` 示范

为了降低理解成本，所以这里我们只实现对 `css`、`ts` 支持。

所以我们写一个 `css`、`ts` 的 loader 吧。

注意：由于本次我们的核心在于 `loader` 机制，而并不关心 `loader` 的具体实现，所以这么不会描述具体 `loader` 的实现细节。

### **ts-loader**

```ts
import * as ts from "typescript";
import * as babel from "@babel/core";
import { Loader } from "../../../loader";

export const tsLoader: Loader = (content, filePath) => {
  // 使用 TypeScript 编译器 API 编译代码
  const transpiled = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.ES2015,
      target: ts.ScriptTarget.ES5,
    },
  });
  return transpiled.outputText;
};

export const tsLoaderUserBabel: Loader = (content, filePath) => {
  const res = babel.transformSync(content, {
    // Babel 配置，您可以在这里指定预设、插件等
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
    filename: filePath,
  });

  return res?.code || "";
};

export const getTSLoader = (options: TsLoaderOptions) => {
  return options.useBabel ? tsLoaderUserBabel : tsLoader;
};

interface TsLoaderOptions {
  useBabel?: boolean;
}
```

### **css-loader**

```ts
import { Loader } from "../../../loader";

export const cssLoader: Loader = (content, filePath) => {
  const escaped = content.replace(/\n/g, "").replace(/"/g, '\\"');
  return `const style = document.createElement('style');
          style.innerText = "${escaped}";
          document.head.appendChild(style);`;
};
```

### 接入

**入口文件**

```ts
import { add } from "./add";
import { sub } from "./sub";
import "./index.css";

const value = add(1, 4) + sub(3, 2);

document.body.innerHTML = `<div id="app">with ts loader and css loader: ${value}</div>`;
```

**配置**

```ts
import { run } from "../../src/index";
import * as path from "path";
import HtmlPlugin from "../../src/tool-kit/plugins/html-plugin";
import { getTSLoader } from "../../src/tool-kit/loaders/ts-loader";
import { cssLoader } from "../../src/tool-kit/loaders/css-loader";

const tsLoader = getTSLoader({ useBabel: true });

const filePath = path.resolve(__dirname, "./code/index.ts");

const outputPath = path.resolve(__dirname, "./dist/bundle.js");

run({
  rootPath: path.resolve(__dirname, "./code"),
  entry: filePath,
  output: outputPath,
  loaders: {
    ".css": [cssLoader],
    ".ts": [tsLoader],
  },
  plugins: [new HtmlPlugin()],
  devServer: {
    rootPath: path.resolve(__dirname),
    hot: true,
  },
  watch: true,
});
```

### 效果

从效果来看确实正确解析了 `ts` 和 `css` 文件

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/e1c0f6241610466e8358c162be085c1f%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

## 总结

通过 `loader` 能力，我们可以去解析 `tsx`，`image` 和 `css` 等文件。本质上是做**模块转化**。

由于技术细节的实现差异，以及 `mini-bundler` 的定位，所以是不支持 `webpack` 生态已有的插件。
这里的定位，更多是为了让读者能够了解这个流程。

最后，你也可以实现自己的 `loader` 机制。

## 参考

- [代码实现](https://github.com/hua-bang/mini-bundler/blob/master/src/core/create-dependency-graph.ts)

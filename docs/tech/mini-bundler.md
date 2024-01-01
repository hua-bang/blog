---
title: mini bundler 的实现
customTag: tech>Frontend Engineer
editLink: true
---

# mini bundler 的实现

## 前言

上篇[初识前端 bundler](https://juejin.cn/post/7312844725181218857)，我们简单介绍了 `bundler` 的概念，特点以及常用的工具，那么本文我们就来进行 bundler 的设计。

## 1. bundler 具备的能力

在设计之前，我们先来看看一个 bundler 本身需要具备哪些功能/能力。

![bundler.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/1937f302c6bd454dbb3dc9d96b98ac76%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

**`模块解析`**
-   **解析机制**：详细说明如何解析一个模块，包括读取文件、处理不同类型的模块（如JS, CSS, 图片等）。
-   **依赖提取**：讨论如何从模块代码中提取依赖关系，例如使用正则表达式或AST（抽象语法树）分析。
-   **路径解析**：解释如何处理模块路径，包括相对路径和绝对路径的转换。

**`依赖图构建`**
-   **图的数据结构**：介绍用于表示依赖关系的数据结构（如对象、数组、图等）。
-   **构建过程**：详细描述构建依赖图的过程，包括如何处理循环依赖、缺失模块等问题。
-   **优化策略**：如果有，讨论为提高性能而采取的优化策略，如延迟解析、缓存等。

**`代码转换`**
-   **转换工具**：介绍用于代码转换的工具或库，例如Babel（用于ES6转换）。
-   **处理流程**：详细说明代码转换的步骤，包括语法树转换、特性降级等。

**`打包和输出`**
-   **打包算法**：描述如何将依赖图转换为浏览器可运行的代码包。
-   **输出格式**：讨论支持的输出格式（如UMD, CommonJS, ES Module等）。
-   **代码分割和懒加载**：如果支持，详细说明如何实现代码分割和懒加载功能。

**`性能优化`**
-   **打包速度**：探讨如何优化打包过程的速度，例如通过并行处理或利用缓存。
-   **输出优化**：介绍如何优化输出文件的大小，例如通过压缩、Tree Shaking等技术。

**`错误处理和调试`**
-   **错误检测**：说明如何检测和处理在打包过程中出现的错误。
-   **调试支持**：讨论如何支持开发者调试打包后的代码，如Source Map的生成和使用。

由于本次我们希望能实现一个简易版本的 bundler, 所以这块我们一开始不会设计的过于复杂，而是一步一步从最基本的开始。

## 2. bundler 的设计

![mini bundler.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/6f0cd10cabbc496fa943b5b58e519cfc%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

我们提取出 bundler 比较核心的点，然后我们来进行 mini-bundler 的编写。即实现模块解析、依赖图构建、代码转化、插件系统的功能。

**`模块解析`**
-   **文件读取**：实现对文件系统的读取，用于获取模块内容。
-   **模块类型处理**：处理不同类型的模块，例如JavaScript和JSON。
-   **依赖检测**：解析模块中的`import`或`require`语句，以识别依赖关系。

**`依赖图构建`**
-   **数据结构**：定义一个简单的数据结构来表示模块及其依赖关系。
-   **递归解析**：从入口文件开始，递归地解析每个模块的依赖。

**`代码转换`**
-   **字符串处理**：将模块内容转换成可执行的代码字符串，可能包括对特定语法的转换。
-   **Bundling**：合并所有模块的代码字符串为一个单独的bundle文件。

**`插件系统`**
-   **简单的插件接口**：设计一个基本的插件接口，允许插件在特定的生命周期点介入。
-   **插件的应用**：在bundler的处理流程中，如模块解析或代码转换阶段，应用插件的逻辑。


## 3. mini-bundler 具体实现
我们来开始对每个模块进行设计。
### 模块解析
在设计前，首先我们先明白为什么需要模块解析：`代码组织和维护性`、`依赖管理`、`性能优化`。

所以，模块这一个概念在 bundler 中是十分重要的。在这里，我们最好去对模块进行数据结构的抽象。这个模块对象用于存储解析模块过程中获得的数据，包括模块的`路径`、`内容`、`依赖`等信息。

```ts
interface Moudule {
  id: string; // 唯一标识符，例如模块的绝对路径
  filePath: string; // 模块文件的路径 
  content: string; // 模块的原始内容 
  dependencies: string[]; // 依赖数组，存储依赖模块的路径
  mapping?: Record<string, string>; // 依赖的相对路径和绝对路径的映射关系
}
```

-   **`id`**：提供一个模块的唯一标识符。在大多数情况下，可以使用模块的文件路径作为其ID。
-   **`filePath`**：存储模块文件的路径。这对于模块解析和后续的打包过程非常关键。
-   **`content`**：包含模块的原始文本内容。这对于后续的代码转换和打包过程是必需的。
-   **`dependencies`**：一个字符串数组，包含该模块依赖的其他模块的路径。这对于构建依赖图和管理模块间的关系至关重要。
-   **`mapping`**：map 对象，保存依赖的相对路径和绝对路径的映射关系。

设计好模块对象类型后，我们接着就是提取文件的信息，生成一个个模块类型实例子。

从上方定义的字段来看，我们过程会使用到`读取文件`、`路径计算`、`ast 依赖提取`。

```ts
function createModule(filePath: string): Module {
  const fileExtension = path.extname(filePath);
  let content = "";

  const dependencies: string[] = [];

  const mapping: Record<string, string> = {};

  if (fileExtension === ".js") {
    content = fs.readFileSync(filePath, "utf-8");
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
        if (
          node.callee.type === "Identifier" &&
          node.callee.name === "require"
        ) {
          if (BabelType.isStringLiteral(node.arguments[0])) {
            dependencies.push(node.arguments[0].value);
          }
        }
      },
    });

    dependencies.forEach((dependency) => {
      const absoluteDependencyPath = path.resolve(filePath, "..", dependency);
      mapping[dependency] = absoluteDependencyPath;
    });
  } else if (fileExtension === ".json") {
    // 直接读取JSON文件并转换为JavaScript对象
    const jsonContent = fs.readFileSync(filePath, "utf-8");
    content = `module.exports = ${jsonContent}`;
  }

  return {
    id: path.resolve(filePath),
    filePath,
    content,
    dependencies,
    mapping,
  };
}

```
我们尝试解析一个文件。
```ts
console.log('hello, world')'
```
输入的结果如下：能看到在下方，我们已经进行了文件内容的提取。


![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/1bfe1f66105a409d9c1c61715815e3f4%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

上方，我们已经实现了`模块解析`中`文件读取`，`模块类型处理`，`依赖检测`的三个功能。

接着，我们来实现依赖图构建。

### 依赖图构建

依赖图构建是模块打包器的关键环节，主要用图的数据结构管理和优化模块间的依赖关系。
- `依赖关系`：依赖图为应用的模块结构提供了一个清晰的视图，展示了不同模块之间的依赖关系。
- `优化操作`：通过分析依赖图，打包器可以确定哪些模块是必需的，哪些不是，从而仅包含必要的模块，减少最终包的大小。
- `依赖错误/冲突`：在构建依赖图时，可以检测到版本冲突或不兼容的依赖，从而提前处理这些问题。依赖图帮助识别循环依赖问题，这是一种常见的错误情况。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/6fdf9c06660844e987dabb7dafbcb411%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

从上图来看，依赖图的构建，本质上从`入口文件`开始，去对文件进行递归遍历，生成每个文件的模块信息，并且关联起来。

```ts
/**
 * 创建依赖关系图。
 * 此函数根据入口文件路径构建项目的依赖关系图。它递归地遍历每个模块的依赖项，
 * 并将它们添加到依赖关系图中，这个图是一个映射，键为模块ID，值为模块对象。
 *
 * @param {string} entry - 入口文件的路径。
 * @returns {DependencyGraph} - 表示依赖关系的图，这是一个映射，其中键是模块ID，值是模块对象。
 */
const createDependencyGraph = (entry: string): DependencyGraph => { 
  // 入口文件模块
  const entryModule = createModule(entry);

  // 构建依赖图
  const graph: DependencyGraph = new Map<string, Module>();

  const explore = (module: Module) => {
    // 有过了，就不再处理了。
    if (graph.has(module.id)) {
      return;
    }
    
    // 没有的话，则加入依赖图中
    graph.set(module.id, module);

    // 遍历模块的其他依赖
    module.dependencies.forEach((dependencyPath) => {
      const absoluteDependencyPath = path.resolve(
        module.filePath,
        "..",
        dependencyPath
      );
      const dependencyModule = createModule(absoluteDependencyPath);
      explore(dependencyModule);
    });
  };

  explore(entryModule);
  return graph;
};
```

### 代码转换

上方已经将依赖图进行了构建，最后，我们只要将依赖图转换为可执行代码，理论上我们最小的 bundler 就可以完成了。

但这里有几个问题
1. **`依赖映射模块关系`**：模块中的依赖如何找到自己的模块信息，需要有一个映射关系。
2.  **`浏览器代码无法执行模块化语法`**：即使我们在构建 `module` 的时候，会将语法进行兼容，但也还是会有 `require`，`export` 在浏览器无法运行问题。

关于这两个问题，都有解法。即生成模块信息以及自定义模块化导入，导出语法。

1. **`依赖映射模块关系`**：可以通过依赖的相对路径和绝对路径来处理。

- 我们有依赖图，且依赖图是根据`绝对路径`为键，模块信息为值。
- 模块项都有自己依赖的`相对路径`和`绝对路径`的映射关系。
- 我们可以自定义 `require`。

所以，我们可以自定义 `require`，`module`, `module.exports`, 将 `require(相对路径)` --> 找到模块中绝对路径的模块信息

核心代码

```ts
`
  (function(modules) {
    function require(id) {
      const [fn, dependencies] = modules[id];

      function localRequire(relativePath) {
        return require(dependencies[relativePath]);
      }

      const module = { exports: {} };

      fn(localRequire, module, module.exports);

      return module.exports;
    }

    require("${graph.keys().next().value}");
  })({${modules}})
`;
```

于是，整体代码为

```ts
/**
 * 打包依赖关系图为单一字符串。
 * 此函数接收一个依赖关系图，将其转换为一个包含所有模块和它们依赖的单一字符串。
 * 字符串的格式允许它被执行并作为模块系统使用，其中每个模块都被封装在一个函数中，
 * 并且有一个映射来表示其依赖关系。
 *
 * @param {DependencyGraph} graph - 依赖关系图，包含项目中所有模块的信息。
 * @returns {string} - 一个字符串，包含所有模块及其依赖，可以被执行以模拟模块系统。
 */
const bundle = (graph: DependencyGraph): string => {
  let modules = "";

  graph.forEach((mod) => {
    modules += `
      "${mod.id}": [
        function (require, module, exports) {
          ${mod.content}
        },
        ${JSON.stringify(mod.mapping)},
      ],
    `;
  });

  return `
    (function(modules) {
      function require(id) {
        const [fn, dependencies] = modules[id];

        function localRequire(relativePath) {
          return require(dependencies[relativePath]);
        }

        const module = { exports: {} };

        fn(localRequire, module, module.exports);

        return module.exports;
      }

      require("${graph.keys().next().value}");
    })({${modules}})
  `;
};
```

代码写完，我们来做一个测试。

`index.js` 文件： 入口文件，引入 `add.js`
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/7af896e4dd0d480a883652cbdc6bd3f5%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

`add.js` 文件: 引入 sub 函数，并提供 add，sub 函数。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/4d375fb5048341e89c3644b3544ee0c8%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

`sub.js` 文件: 提供 sub 函数。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/124158410c3d4a4c9924baf89644b391%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)
最终运行，得到下方的代码

我们将 `index.js` 作为入口文件

```js
const run = () => {
  const filePath = path.resolve(__dirname, "./index.js");

  const graph = createDependencyGraph(filePath);
  const result = bundle(graph);

  const outputPath = path.resolve(__dirname, "./output/bundle.js");
  fs.writeFileSync(outputPath, result);
};
```

```js
(function (modules) {
  function require(id) {
    const [fn, dependencies] = modules[id];

    function localRequire(relativePath) {
      return require(dependencies[relativePath]);
    }

    const module = { exports: {} };

    fn(localRequire, module, module.exports);

    return module.exports;
  }

  require("/xxxxx/xxxxx//wheel-awesome/mini-bundler/src/index.js");
})({
  "/xxxxx/xxxxx//wheel-awesome/mini-bundler/src/index.js": [
    function (require, module, exports) {
      "use strict";

      var _add = require("./add.js");
      var a = (0, _add.add)(1, 12);
      var b = (0, _add.sub)(1, 12);
      console.log(a, b);
    },
    {
      "./add.js":
        "/xxxxx/xxxxx//wheel-awesome/mini-bundler/src/add.js",
    },
  ],

  "/xxxxx/xxxxx//wheel-awesome/mini-bundler/src/add.js": [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports["default"] = exports.add = void 0;
      Object.defineProperty(exports, "sub", {
        enumerable: true,
        get: function get() {
          return _sub.sub;
        },
      });
      var _sub = require("./sub.js");
      var add = (exports.add = function add(a, b) {
        return a + b;
      });
      var _default = (exports["default"] = add);
    },
    {
      "./sub.js":
        "/xxxxx/xxxxx//wheel-awesome/mini-bundler/src/sub.js",
    },
  ],

  "/xxxxx/xxxxx//wheel-awesome/mini-bundler/src/sub.js": [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.sub = sub;
      function sub(a, b) {
        return a - b;
      }
    },
    {},
  ],
});

```

运行代码，也得到了正确的输出。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/7099a114958642a191a0f35806fe423c%7Etplv-k3u1fbpfcp-jj-mark%3A0%3A0%3A0%3A0%3Aq75.image)

一个简单的 bundler 就实现了。当然，目前还有很多细节，如`循环依赖`，`文件扩展`，`插件系统`等东西都还没有实现，但理论上也是个 mvp 的版本。**主要是为了了解一个 bundler 是如何运作的**。

由于篇幅关系，所以`插件系统`会专门在开一篇文章讲解。

## 4. 总结

本文简单的简单介绍了 `bundler 的主要能力`，设计一个简单的 `mini bundler`, `bundler`技术细节点（`模块解析`，`依赖图构建`，`代码转换`）的实现。

这也仅仅是一个简易的 `bundler` 的开始，下一章会继续设计其插件系统。

## 资料

- [代码实现](https://github.com/hua-bang/wheel-awesome/tree/master/mini-bundler/src)



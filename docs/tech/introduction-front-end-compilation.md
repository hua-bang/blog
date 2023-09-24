---
title: 初识前端编译及 Babel
customTag: tech>编译
---

# 初识前端编译及 Babel

本文主要从个人对前端编译的了解，对前端编译的一些进行思考。会讲解编译的大致流程，以及前端的常用工具 Babel，但不会细节到具体某个环节。

## **1. 引言**

编译在前端开发中的重要性逐渐增加，特别是随着**现代前端框架、ES6+， TypeScript** 的普及。本文旨在为开发者提供一个比较简单的前端编译的知识输入，主要讲解编译的基本概念以及让大家对编译有所体感。

## **2. 什么是编译**

**编译是将源代码从一种编程语言转换为另一种编程语言的过程**。

简单来说，它通常是将高级语言转换为低级语言（如汇编或机器代码）。与解释不同，编译是在代码运行之前完成的。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924231818.png)


### **前端常见的编译工具**

前端编译例子：TS 转 JS、JSX 转 JS、Vue Template 转 JS，对应的编译工具有。

- **Babel**：主要用于将 ES6+代码转换为向后兼容的 JavaScript 版本。
- **TSC**：JavaScript 的超集，添加了类型系统。
- **Vue-Compiler**: 支持 Vue 的语法，最终转成 JS、css 代码。
- **小程序**：小程序的设计，天然就决定了他的编译特性，跨端运行。
- **Compiler-NG**: 内部对于 Lynx 语法的编译器，将类 react 语法转成一个二进制的 JS 产物。

虽然前端用了这么多编译工具，但这些对于我们来说，可能还是会相对比较陌生。

因为在我们日常开发中，可能我们更多注重接触的是运行时的代码，而一般不会接触到工程层的设计，所以可能对基建工具层不够熟悉。

但其实了解编译的话，会对我们日常开发，也是会有很大帮助的。

## 3. **编译流程**

编译一般包括以下几个步骤：

- **Parse:** 通过 `parser` 将源代码转换成**抽象语法树(AST),** 其中会涉及到 **词法解析，语法解析**等操作。
- **Transform：** 拿到了源码上对应的 `AST`, 我们可以去对这个`AST`, 进行增删改查的操作。其中会涉及到访问者模式的知识。
- **Generate：** 转换后的 `AST`，我们可以转换生成目标代码。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924231840.png)


上方只是简单说了下编译的流程，下方我们对流程进行细化。

[https://astexplorer.net/#/gist/c98a65c37b72bec5dfd215ac981a3ad4/140607ab8205b758cd42aae9399a8e86d4519a55](https://astexplorer.net/#/gist/c98a65c37b72bec5dfd215ac981a3ad4/140607ab8205b758cd42aae9399a8e86d4519a55)

### 3.1 Parse

> Parse 阶段是将源码字符串转换成机器能够理解的 AST，这个过程分成此词法分析，语法分析。

**词法分析**：将字符串分成一个个规定好的 `token`，分割的工具我们一般成为词法分析器(`Tokenizer`)。

**语法分析：** 将一个个 `token` 进行拼接组装，按照不同的语法结构，来把一堆堆 `token` 进行组合拼接，生成 `AST` ，声明语句，赋值表达式都有对应的 `AST` 节点。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232000.png)

### 3.2 Transform

> Transform 主要是对生成的 AST 进行处理，会进行 AST 的遍历，可以对对应的 AST 节点进行处理。

下方是一个在 log 函数添加新的参数节点的示意图，注意，这里只是表达添加参数节点，并不代表实际节点这么使用。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232013.png)

### 3.3 Generate

> Generate 阶段会根据 AST 生成新的字符串，并生成对应的 SourceMap。

不同的 AST 对应的不同结构的字符串。比如 `VariableDeclaration` 就可以打印成 `const` 格式的代码。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232046.png)


以上是编译的抽象的流程。而前端工程中，其实也是在打包的过程去加入了编译的这样的一个环节。

下方，我们就来讲讲其中用的比较多的打包工具 —— babel

## **4. Babel: A JavaScript Compiler**

`Babel` 实质上是一个 `JavaScript` 的编译器（转译器），用于将 `es next`, `typescript` 等代码做相关的转换，同时暴露了相关的 `api` 给开发者做特定用途的转换。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232058.png)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232110.png)

### 4.1 Babel 执行流程

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232220.png)

refer: [\***\*深入浅出 Babel 上篇：架构和原理 + 实战\*\***](https://juejin.cn/post/6844903956905197576#heading-7)

babel 的执行过程从大体来看，和我们上方的流程是一致的。但 babel 在具体实现的细节中，有很多很棒的技术设计。

如**核心流程拆包、插件生态、访问者模式。**

### 4.2 \***\*核心流程拆包\*\***

babel 讲流程拆的很细, 并且每个包都符合单一职责的设计。

- **核心**：
  - **`@babel/core`:** 整体流程的内核，加载配置和插件，调用 parser, traverser, generator 的流程调用。
- **核心能力支撑:**
  - **`@babel/parser`：**负责 源代码进行解析，解析成 AST。它已经内置支持很多语法. 例如 JSX、Typescript、Flow、以及最新的 ECMAScript 规范。
  - **`@babel/traverse` :** 实现了`访问者模式`，对 AST 进行遍历，可以对节点进行 patch。
  - **`@babel/generator` :** 将 AST 转换为源代码，支持 SourceMap。

### 4.3 **插件生态**

- **插件**：
  - **语法插件(`@babel/plugin-syntax-*`)**：上面说了 `@babel/parser` 已经支持了很多 JavaScript 语法特性，Parser 也不支持扩展. **因此`plugin-syntax-*`实际上只是用于开启或者配置 Parser 的某个功能特性**。
  - **转换插件**： 用于对 AST 进行转换, 实现转换为 ES5 代码、压缩、功能增强等目的.
  - **预定义集合(`@babel/presets-*`)**： 插件集合或者分组，主要方便用户对插件进行管理和使用。比如`preset-env`含括所有的标准的最新特性; 再比如`preset-react`含括所有 react 相关的插件.
- **插件开发辅助：**
  - `@babel/template`： 某些场景直接操作 AST 太麻烦，就比如我们直接操作 DOM 一样，所以 Babel 实现了这么一个简单的模板引擎，可以将字符串代码转换为 AST。比如在生成一些辅助代码(helper)时会用到这个库。
  - `@babel/types`： AST 节点构造器和断言. 插件开发时使用很频繁。
  - `@babel/helper`： 辅助代码，单纯的语法转换可能无法让代码运行起来，比如低版本浏览器无法识别 class 关键字，这时候需要添加辅助代码，对 class 进行模拟。
- **工具**：
  - `@babel/cli`： CLI 工具
  - `@babel/node`： Node.js CLI, 通过它直接运行需要 Babel 处理的 JavaScript 文件

### 4.4 **访问者模式**

// 看看写不写

## 5.简单的写一个 Babel 插件

> 整体会使用 vite + react 来实现。

### **5.1 需求**

埋点，可以理解为针对用户的特定行为，进行一个记录，处理和发送相关事件以及对应的数据的技术。

我们这里做一个简单的案例，我们只需要在对应的 DOM 节点打上标识，然后当点击对应的 DOM 节点的时候，能够进行埋点数据的上报。

### **5.2 思路**

于是，我们的思路比较明确，主要是以下两点

- **修改代码的时机**：在对应的打包工具中，看编译过程中的生命周期钩子，在对应生命周期中，修改代码。(如 vite 中的  `transform`  钩子)
- **具体如何修改代码**：我们可以借助 babel 来进行一层代码的转译。分为  **引入 SDK**  以及  **添加编译事件**。

### **5.3 实现**

**修改代码的时机**

这里其实涉及两点。

- **打包工具提供的钩子**：vite 提供了 transform 钩子，我们可以直接用，但其他打包工具的具体看提供的钩子。
- **编译插件调用顺序**：项目中一般也存在其他的编译插件，我们要注意执行顺序，不要产生冲突（如我们的插件应该是 在 tsx/jsx 进行编译，而不是在他转成 js 的时候进行编译）。

我们使用 vite 的 transform 钩子。

```ts
import * as babel from '@babel/core';
import autoTrackerBabelPlugin from './babel-plugin';

interface AutoTrackerPluginOptions {
  libPath: string;
}

const fileRegex = /\\.(tsx)$/;

export default function autoTracker(pluginOptions: AutoTrackerPluginOptions) {

  return {
    name: 'autoTracker',
    enforce: 'pre',

    async transform(code: string, id: string) {
      if (!fileRegex.test(id)) {
        return;
      }

      const result = await babel.transformAsync(code, {
        babelrc: false,
        configFile: false,
        ast: true,
        code: true,
        parserOpts: {
          plugins: ["jsx", "typescript"]
        },
        plugins: [
          [
            autoTrackerBabelPlugin,
            pluginOptions
          ]
        ]
      });
      return {
        code: result.code,
        map: null      }
    }
  }
}

```

**babel 代码编译**

`babel` 这里主要注意两点

- **SDK 引入**：我们看对应的文件，之前有没有引入 SDK，没有的话，我们手动引入一下。

代码如下：

```ts
function checkHasLogIdentification(attributes) {
  return (attributes || []).some(item => item.name.name === 'data-log-params');
}

function findAttributeNode(attributes, key) {
  return (attributes || []).find(item => item.name && item.name.name === key);
}

export default function (babel, options) {
  const { types: t, template } = babel;
  const { libName, libPath } = options;
  return {
    name: "autoTrackerPlugin",
    visitor: {
      Program(path, state) {
        let needImportSDK = false;
        let loggerId;

        // 这里从 Program 节点进行遍历, 主要两个功能        // 1. 判断该组件下的 是否需要引入 SDK。        // 2. 判断 SDK 是否导入，导入记录下 loggerId。        path.traverse({
          JSXOpeningElement(elePath) {
            const { attributes } = elePath.node;

            const hasLogIdentification = checkHasLogIdentification(
              attributes,
            );

            if (hasLogIdentification) {
              needImportSDK = true;
              elePath.stop();
            }
          },
          ImportDeclaration(importPath) {
            const { node } = importPath;
            if (node.source.value.includes(libPath)) {
              const specifier = node.specifiers[0];
              if (!t.isImportDefaultSpecifier(specifier)) {
                importPath.stop();
                needImportSDK = true;
                return;
              }
              loggerId = specifier.local.name; // 取出导入的变量名赋值给loggerId              importPath.stop();
              state.loggerNodeName = loggerId;
            }
          },
        });

        if (!needImportSDK) {
          return;
        }

        if (!loggerId) {
          // 如果loggerId没有值，说明源代码中还没有导入此模块，          loggerId = path.scope.generateUid(libName);
          path.node.body.unshift(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier(loggerId))],
              t.stringLiteral(libPath),
            ),
          );
          state.loggerNodeName = loggerId;
        }
      },
    }
  };
}

```

**代码编译**：

```ts
function checkHasLogIdentification(attributes) {
  return (attributes || []).some(item => item.name.name === 'data-log-params');
}

function findAttributeNode(attributes, key) {
  return (attributes || []).find(item => item.name && item.name.name === key);
}

export default function (babel, options) {
  const { types: t, template } = babel;
  const { libName, libPath } = options;
  return {
    name: "autoTrackerPlugin",
    visitor: {
      JSXOpeningElement(path, state) {
      	if (!state.loggerNodeName) {
          return;
        }
        const { attributes } = path.node;

        const hasLogIdentification = checkHasLogIdentification(
          attributes,
        );
        if (!hasLogIdentification) {
          return;
        }

        const onClickNode = findAttributeNode(
          attributes,
          'onClick',
        );

        if (!onClickNode) {
          path.pushContainer(
            'attributes',
            t.jsxAttribute(
              t.jsxIdentifier('onClick'),
              t.jsxExpressionContainer(
                template.expression(`${state.loggerNodeName}.reportClick`)(),
              ),
            ),
          );
        } else {
          const { value } = onClickNode;
          const { expression: onClickFNNode } =
            value;

          const newTapFNNode = t.callExpression(
            t.callExpression(
              t.memberExpression(
                t.memberExpression(
                  t.identifier(state.loggerNodeName),
                  t.identifier('generateReportClickFn'),
                ),
                t.identifier('bind'),
              ),
              [t.thisExpression()],
            ),
            [onClickFNNode],
          );
          (onClickNode.value).expression =
            newTapFNNode;
        }
      }
    }
  };
}

```

### **5.4 效果**

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20230924232152.png)


## 6. 结尾

上方简单的介绍了个人视角下的前端编译流程以及对 babel 的理解，也许部分内容存在部分错误，也请批评指正。

编译在前端开发中扮演着越来越重要的角色，特别是在现代 Web 应用的构建中。掌握基础的编译原理和工具使用是每个前端开发者的必备技能。

具体表现在

- 不同的框架的不同语法，Vue, React 等。
- 自定义语法支持，比如公司内部的 Lynx， 同时 Lynx 有多套编译器。
- 越来越多的打包工具的诞生，从编译角度讲，rust、 go 编译的性能会比 JS 编译的性能高。

未来，随着 WebAssembly、工具链新技术的出现，前端编译可能会有更多的应用场景和发展趋势。

## **参考链接**

- \***\*深入浅出 Babel 上篇：架构和原理 + 实战:\*\*** [https://juejin.cn/post/6844903956905197576](https://juejin.cn/post/6844903956905197576)
- Babel 官网: **[https://babeljs.io/**](https://babeljs.io/**)
- Webpack 官网: **[https://webpack.js.org/**](https://webpack.js.org/**)
- TypeScript 官网: **[https://www.typescriptlang.org/**](https://www.typescriptlang.org/**)
- 编译器原理基础: **[https://en.wikipedia.org/wiki/Compiler**](https://en.wikipedia.org/wiki/Compiler**)

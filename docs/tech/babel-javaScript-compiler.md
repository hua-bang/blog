---
title: "Babel: A JavaScript Compiler"
customTag: tech>编译
editLink: true
---
# Babel: A JavaScript Compiler
## What

`Babel` 实质上是一个 `JavaScript` 的编译器（转译器），用于将 `es next`, `typescript` 等代码做相关的转换，同时暴露了相关的 `api` 给开发者做特定用途的转换。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/44b75b7bb9324f13800fbb80df031628%7Etplv-k3u1fbpfcp-zoom-1.image)

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/46d50c1c987342958a11ca131b788117%7Etplv-k3u1fbpfcp-zoom-1.image)

## Why

我们为什么要使用 `Babel`

-   转译 `esnext`, `typescript`, `flow` 等到目标环境支持的 `javaScript`。

<!---->

-   一些特定代码的转换。

<!---->

-   代码的静态分析。

## Process

**总结流程：** 首先需要把源码字符串进行 **parse,** 生成 AST，对这个 AST 进行增删改的操作 **，** 再根据转换后的 AST 生成新的代码。

一般的**编译流程**分为三步：

-   **Parse:** 通过 `parser` 将源代码转换成**抽象语法树(AST),** 其中会涉及到 词法解析，语法解析等操作。

<!---->

-   **Transform：** 拿到了源码上对应的 `AST`, 我们可以去对这个`AST`, 进行增删改查的操作。其中会涉及到访问者模式的知识。

<!---->

-   **Generate：** 转换后的 `AST`，我们可以转换生成目标代码。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/94e9157c68ec409ea2001b27bc9b0ca0%7Etplv-k3u1fbpfcp-zoom-1.image)

## Process Detail

### Parse

> Parse 阶段是将源码字符串转换成机器能够理解的 AST，这个过程分成此**词法分析**，**语法分析**。

**词法分析**：将字符串分成一个个规定好的 `token`。

**语法分析：** 将一个个 `token` 进行拼接组装，按照不同的语法结构，来把一堆堆 `token` 进行组合拼接，生成 `AST` ，声明语句，赋值表达式都有对应的 `AST` 节点。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/8813ad14658b46da92612fad423c4fe9%7Etplv-k3u1fbpfcp-zoom-1.image)

### Transform

> Transform 主要是对生成的 AST 进行处理，会进行 AST 的遍历，可以对对应的 AST 节点进行处理。

下方是一个在 log 函数添加新的参数节点的示意图，注意，这里只是表达添加参数节点，并不代表实际节点这么使用。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/d8091caecb4145f9bc1fe972ae0f3496%7Etplv-k3u1fbpfcp-zoom-1.image)

### Generate

> Generate 阶段会根据 AST 生成新的字符串，并生成对应的 SouceMap。

不同的 AST 对应的不同结构的字符串。比如 `VariableDeclaration` 就可以打印成 `const` 格式的代码。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/df5e1a0fd0274580aefe2d1ac5990774%7Etplv-k3u1fbpfcp-zoom-1.image)

## Basic

### AST

> **Babel 的 AST**：[github.com](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md)
>
> **AST 可视化工具**：[AST explorer](https://astexplorer.net/)

| **类型**                  | **含义**                                                                                                                                    | **备注** |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Literal**             | 字面量，数字字面量 NumericLiteral，布尔字面量 BooleanLiteral，字符串字面量 StringLiteral，正则表达式字面量 RegExpLiteral                                                 |        |
| **Identifier**          | Identifer 是标识符的意思，变量名、属性名、参数名等各种声明和引用的名字，都是Identifer。                                                                                     |        |
| **Statement**           | statement 是语句，它是可以独立执行的单位，比如 break、continue、debugger、return 或者 if 语句、while 语句、for 语句，还有声明语句，表达式语句等。                                       |        |
| **Declaration**         | 声明语句是一种特殊的语句，它执行的逻辑是在作用域内声明一个变量、函数、class、import、export 等。                                                                                 |        |
| **Expression**          | expression 是表达式，特点是执行完以后有返回值，这是和语句 (statement) 的区别。                                                                                       |        |
| **Class**               | class 的语法也有专门的 AST 节点来表示。                                                                                                                 |        |
| **Modules**             | es module 是语法级别的模块规范，所以也有专门的 AST 节点。                                                                                                      |        |
| **Program & Directive** | program 是代表整个程序的节点，它有 body 属性代表程序体，存放 statement 数组，就是具体执行的语句的集合。还有 directives 属性，存放 Directive 节点，比如`"use strict"` 这种指令会使用 Directive 节点表示。 |        |
| **File**                | babel 的 AST 最外层节点是 File，它有 program、comments、tokens 等属性，分别存放 Program 程序体、注释、token 等，是最外层节点。                                                |        |
| **Comment**             | 注释分为块注释和行内注释，对应 CommentBlock 和 CommentLine 节点。                                                                                            |        |

**AST 公共属性**

每种 AST 都有自己的属性，但是它们也有一些公共的属性：

-   `type`： AST 节点的类型

<!---->

-   `start、end、loc`：start 和 end 代表该节点在源码中的开始和结束下标。而 loc 属性是一个对象，有 line 和 column 属性分别记录开始和结束的行列号。

<!---->

-   `leadingComments、innerComments、trailingComments`： 表示开始的注释、中间的注释、结尾的注释，每个 AST 节点中都可能存在注释，而且可能在开始、中间、结束这三种位置，想拿到某个 AST 的注释就通过这三个属性。

<!---->

-   `extra`：记录一些额外的信息，用于处理一些特殊情况。比如 StringLiteral 的 value 只是值的修改，而修改 extra.raw 则可以连同单双引号一起修改。

### API

> [babeljs.io](https://babeljs.io/docs/en/babel-parser)

上方介绍了 `babel` 的编译流程：`parse`, `transform`, `generate` 三个步骤，对于这三个步骤，`babel` 都有暴露对应的 `api`。

-   **parse:** 提供 `@babel/parser`, 将源码转成 **AST。**

<!---->

-   **transform:** 提供 `@babel/traverse`, 可以遍历 **AST,** 用 `visitor` 函数修改 `AST`, 修改`AST`会涉及 `AST` 的判断，创建，修改，这个时候需要 `@babel/type`, 如果需要批量操作的话，可以使用 `@babel/template` 来简化 **AST** 的创建逻辑。

<!---->

-   **generate:** 将 **AST** 打印成目标代码字符串，同时生成 `sourcemap`, 需要 `@babel/generator`。

<!---->

-   中途遇到错误想打印代码位置的时候，使用 `@babel/code-frame` 包

<!---->

-   babel 的整体功能通过 `@babel/core` 提供，基于上面的包完成 babel 整体的编译流程，并应用 plugin 和 preset。

#### @babel/parser

> The Babel parser is a JavaScript parser used in Babel. Based on acorn.

babel parser 默认只能 parse js 代码，jsx、flow、typescript 这些非标准的语法的解析需要指定语法插件。

**API**

-   `babelParser.parse(code, [options])`

<!---->

-   `babelParser.parseExpression(code, [options])`

`parse()` parses the provided `code` as an entire ECMAScript program, while `parseExpression()` tries to parse a single Expression with performance in mind. When in doubt, use `.parse()`.

**Options**

-   `plugins`： 指定jsx、typescript、flow 等插件来解析对应的语法

<!---->

-   `allowXxx`： 指定一些语法是否允许，比如函数外的 await、没声明的 export等

<!---->

-   `sourceType`： 指定是否支持解析模块语法，有 module、script、unambiguous 3个取值：

<!---->

-   `strictMode`：是否是严格模式

<!---->

-   `startLine`：从源码哪一行开始 parse

<!---->

-   `errorRecovery`：出错时是否记录错误并继续往下 parse

<!---->

-   `tokens`：parse 的时候是否保留 token 信息

<!---->

-   `ranges`：是否在 ast 节点中添加 ranges 属性

**Output**

The Babel parser generates AST according [Babel AST Format](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md). It is based on [ESTree spec](https://github.com/estree/estree) with the following deviations.

#### @babel/traverse

> [@babel/traverse · Babel](https://babeljs.io/docs/en/babel-traverse)

经过 `parse` 阶段，我们能拿到对应的 `AST`, 我们可以通过 `@babel/traverse` 来进行遍历或修改， `babel traverse` 包提供了 `traverse` 方法。

```
function traverse(ast, options);
```

**Params**

-   **ast**: 需要遍历的 **`AST`** 节点。

<!---->

-   **opts：** 指定 **`visitor`** 函数 **。**

babel 会在遍历 parent 对应的 AST 时调用相应的 visitor 函数。

**Example**

`enter` 及 `exit`:

```
traverse(ast, {
  FunctionDeclaration: {
    enter(path, state) {},
    exit(path, state) {}
  }
});
```

`only enter`

```
traverse(ast, {
  FunctionDeclaration(path, state) {} // 进入节点时调用
})
```

`enter` 时调用是在遍历当前节点的子节点前调用，`exit` 时调用是遍历完当前节点的子节点后调用。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/0d485a56c4e4414dab34f3e3987eeb15%7Etplv-k3u1fbpfcp-zoom-1.image)

**Path**

> AST 是棵树,遍历过程中肯定是有个路径的，path 记录了这个路径。（具体来说Path 是表示两个节点之间连接的对象）

path 中提供的内容：

-   获取节点信息

    -   path.node 指向当前的 AST 节点
    -   path.parent 指向父级 AST 节点
    -   path.getSibling、path.getNextSibling、path.getPrevSibling 获取兄弟节点
    -   path.find 从当前节点向上查找节点
    -   path.get、path.set 获取 / 设置属性的 path

<!---->

-   获取作用域

    -   path.scope 获取当前节点的作用域信息

<!---->

-   判断 AST 类型

    -   path.isXxx 判断当前节点是不是 xx 类型
    -   path.assertXxx 判断当前节点是不是 xx 类型，不是则抛出异常

<!---->

-   AST 进行增删改

    -   path.insertBefore、path.insertAfter 插入节点
    -   path.replaceWith、path.replaceWithMultiple、replaceWithSourceString 替换节点
    -   path.remove 删除节点

跳过遍历的：

-   path.skip 跳过当前节点的子节点的遍历

<!---->

-   path.stop 结束后续遍历

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/a8524eeceb424d37a28b239d7a49117c%7Etplv-k3u1fbpfcp-zoom-1.image)

**State**

> State 主要是在遍历过程做相关的数据传输工作。插件会通过 state 传递 options 和 file 信息，我们也可以通过 state 存储一些遍历过程中的共享数据

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/a66b1b4262ea413fabd00ff8f127625c%7Etplv-k3u1fbpfcp-zoom-1.image)

#### @babel/types

> This module contains methods for building ASTs manually and for checking the types of AST nodes.
>
> [babeljs.io](https://babeljs.io/docs/en/babel-types)

Types 提供了**节点生成**以及**检测节点类型**的能力。

**Node Builders:** 节点生成

举例来说，如果要创建IfStatement就可以调用

```
t.ifStatement(test, consequent, alternate);
```

**Aliases:** 节点类型检测

而判断节点是否是 IfStatement 就可以调用 isIfStatement 或者 assertIfStatement

```
t.isIfStatement(node, opts);
t.assertIfStatement(node, opts);
```

#### @babel/template

> [@babel/template · Babel](https://babeljs.io/docs/en/babel-template)

通过 @babel/types 创建 AST 还是比较麻烦的，要一个个的创建然后组装，如果 AST 节点比较多的话需要写很多代码，这时候就可以使用 `@babel/template` 包来批量创建。

这个包有这些 api：

```
const ast = template(code, [opts])(args);
const ast = template.ast(code, [opts]);
const ast = template.program(code, [opts]);
```

这些都是传入一段字符串，返回创建好的 AST，区别只是返回的 AST 粒度不大一样。

#### @babel/generator

> Turns AST into code.

AST 转换完之后就要打印成目标代码字符串，通过 `@babel/generator` 包的 generate api

```
function (ast: Object, opts: Object, code: string): {code, map} 
```

第一个参数是要打印的 AST。

第二个参数是 options，指定打印的一些细节，比如通过 comments 指定是否包含注释，通过 minified 指定是否包含空白字符。

第三个参数当多个文件合并打印的时候需要用到，这部分直接看[文档](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-generator)即可，基本用不到。

options 中常用的是 sourceMaps，开启了这个选项才会生成 sourcemap。

```
import generate from "@babel/generator";

const { code, map } = generate(ast, { sourceMaps: true })
```

#### @babel/core

> https://babeljs.io/docs/en/babel-core

前面讲了 @babel/parser、@babel/traverse、@babel/generaotr、@babel/types、@babel/template 等包，babel 的功能就是通过这些包来实现的。

babel 基于这些包来实现编译、插件、预设等功能的包就是 @babel/core。

这个包的功能就是完成整个编译流程，从源码到目标代码，生成 sourcemap。实现 plugin 和 preset 的调用。

```
transformSync(code, options); // => { code, map, ast }

transformFileSync(filename, options); // => { code, map, ast }

transformFromAstSync(
  parsedAst,
  sourceCode,
  options
); // => { code, map, ast }

transformAsync("code();", options).then(result => {})
transformFileAsync("filename.js", options).then(result => {})
transformFromAstAsync(parsedAst, sourceCode, options).then(result => {})
```

-   `@babel/parser` 对源码进行 parse，可以通过 plugins、sourceType 等来指定 parse 语法

<!---->

-   `@babel/traverse` 通过 visitor 函数对遍历到的 ast 进行处理，分为 enter 和 exit 两个阶段，具体操作 AST 使用 path 的 api，还可以通过 state 来在遍历过程中传递一些数据

<!---->

-   `@babel/types` 用于创建、判断 AST 节点，提供了 xxx、isXxx、assertXxx 的 api

<!---->

-   `@babel/template` 用于批量创建节点

<!---->

-   `@babel/code-frame` 可以创建友好的报错信息

<!---->

-   `@babel/generator` 打印 AST 成目标代码字符串，支持 comments、minified、sourceMaps 等选项。

<!---->

-   `@babel/core` 基于上面的包来完成 babel 的编译流程，可以从源码字符串、源码文件、AST 开始。

## Demo

我们可以实现一个小功能，在所有的标签元素绑定上 `data-id` 属性，用 babel 插件就可以简单实现。

```ts
export default function (babel) {
  const { types: t, template } = babel;
  
  let index = 1;
  return {
    name: "autoTrackerPlugin",
    visitor: {
      JSXOpeningElement(path, state) {
        path.pushContainer(
          'attributes',
          t.jsxAttribute(
            t.jsxIdentifier('data-id'),
            t.stringLiteral(
              `loggerId-${index++}`
            ),
          ),
        );
      }
    }
  };
}

```

**DEMO** 效果请看：https://astexplorer.net/#/gist/ac67eabb79019755143dfd0758e4102c/90b8b1e059e7a2467f221c4a057fd1b763911101

# 参考资料

- [AST - nodepie](https://nodepie.com/2021/04/06/AST/)
- [astexplorer](https://astexplorer.net/)
---
title: 通过 the-super-tiny-compiler 初识编译
editLink: true
customTag: tech>编译
---
# 通过 the-super-tiny-compiler 初识编译
## 前言

编译，对部分前端开发来说，是一个熟悉又陌生的词汇。

熟悉指的是，我们在日常工作中，写的代码大多都会走编译，如 `jsx`, `vue`, `TypeScript` 这些语法，浏览器还是不支持的，这个时候此时我们会用到 `babel`, `tsc` 等工具来编译我们的代码，让其成为浏览器能识别的 `js` 代码。

陌生指的是，很多时候脚手架已经帮我们进行了这个编译流程，所以我们在开发过程中，对于编译其实是没有过多感知的，对于其具体的流程，可能我们不了解。

其实对于前端开发来说，了解编译的知识，也是不错的，毕竟如 `tsc`, `babel`, `eslint` 等工具其实都离不开编译，熟悉编译，可能对这些工具的工作原理也会有所深入。

如果想初步了解一点编译的工作流程的话，我们可以从一个最小可用的编译器去入手，会比较容易接受。而 [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler) 是个不错的选择, 本文会通过这个最小编译器来看编译的流程。

那么，下面我们先来介绍一下编译的概念和知识点吧。

## 编译

> **编译器**（compiler）是一种[计算机程序](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6%E7%A8%8B%E5%BC%8F "计算机程序")，它会将某种编程语言写成的[源代码](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%A7%8B%E7%A2%BC "源代码")（原始语言）转换成另一种编程语言（目标语言）。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/83335795fcd64b4f81d4a9fef3c8f56d%7Etplv-k3u1fbpfcp-watermark.image)

简单来说，编译就是把一种语言转成另一种语言。如 `babel` 作为一个 `JavaScript` 的编译器，在官网上也放了下图。（ES2015+ -> ES5）


![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/e0115a79d077481fb866211ff164ad7b%7Etplv-k3u1fbpfcp-watermark.image)

### 作用

那么，这种转化在前端有什么作用呢。下面列举了几点

-   转译 `esnext`, `typescript`, `flow` 等到目标环境支持的 `javaScript`。

<!---->

-   一些特定代码的转换，如去除注释，压缩代码等。

<!---->

-   代码的静态分析，如 `eslint`的代码规范检查, `typescript`的类型检查。

### 编译流程

> 在介绍具体流程之前，我们先讲一下 `AST` 的概念。
**抽象语法树**（Abstract Syntax Tree，AST） 实际上是对源代码的抽象数据结构，用树状结构来表示源代码，树上每个节点代表着代码中的 `标识符`，`语句`，`表达式` 等。

一般的**编译流程**分为三步：

-   **Parse:** 通过 `parser` 将源代码转换成**抽象语法树(AST),** 其中会涉及到 词法解析，语法解析等操作。

-   **Transform：** 拿到了源码上对应的 `AST`, 我们可以去对这个`AST`, 进行增删改查的操作。其中会涉及到访问者模式的知识。

-   **Generate：** 转换后的 `AST`，我们可以转换生成目标代码。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/468710afea504f829dc741f8028d5d93%7Etplv-k3u1fbpfcp-zoom-1.image)

**总结流程：** 首先需要把源码字符串进行 **parse,** 生成 AST，对这个 AST 进行增删改的操作 **，** 再根据转换后的 AST 生成新的代码。

## 流程细化

上方只是简单说了下编译的流程，下方我们对流程进行细化。
### Parse

> Parse 阶段是将源码字符串转换成机器能够理解的 AST，这个过程分成此**词法分析**，**语法分析**。

**词法分析**：将字符串分成一个个规定好的 `token`，分割的工具我们一般成为词法分析器(`Tokenizer`)。

**语法分析：** 将一个个 `token` 进行拼接组装，按照不同的语法结构，来把一堆堆 `token` 进行组合拼接，生成 `AST` ，声明语句，赋值表达式都有对应的 `AST` 节点。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/6085945036bb409796d74f839a30638c%7Etplv-k3u1fbpfcp-zoom-1.image)

### Transform

> Transform 主要是对生成的 AST 进行处理，会进行 AST 的遍历，可以对对应的 AST 节点进行处理。

下方是一个在 log 函数添加新的参数节点的示意图，注意，这里只是表达添加参数节点，并不代表实际节点这么使用。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/e623586b7ce246dfadbe1a5635589e73%7Etplv-k3u1fbpfcp-zoom-1.image)

### Generate

> Generate 阶段会根据 AST 生成新的字符串，并生成对应的 SouceMap。

不同的 AST 对应的不同结构的字符串。比如 `VariableDeclaration` 就可以打印成 `const` 格式的代码。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/6b1b393d2b414819aaf50dbf2633c23c%7Etplv-k3u1fbpfcp-zoom-1.image)

## 最小编译器的实现

最小编辑器用了少量的代码，实现了 `Lisp` 语言的函数调用到 `c` 语言的函数调用。


|  | LISP | C|
| --- | --- | --- |
| 2 + 2 |(add 2 2)  |add(2, 2) |
| 4 - 2 |(subtract 4 2)  |subtract(4, 2) |
| 2 + (4 - 2) |(add 2 (subtract 4 2))  |add(2, subtract(4, 2)) |

例如
`(add 2 (subtract 4 2))` ---> `add(2, subtract(4, 2))`。


接下来我们来看 
[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler) 是如何做这编译的流程 `parse` -> `transform` -> `generate` 吧。

### Parse

其实这里我们要做的无非是下方这行代码, 返回代码的 `AST`。

```ts
const ast = parse(sourceCode);
```

上方，我们知道 `Parse` 这里需要做两步，**词法分析**和**语法分析**。

#### 词法分析

**思路**： 根据字符串生成 `token` 数组。

**伪代码**
```ts
const tokens = tokenizer(input);
```

**效果**：

```ts
// 输入
(add 2 (subtract 4 2))

// 输出
[
  { type: 'paren',  value: '('        },
  { type: 'name',   value: 'add'      },
  { type: 'number', value: '2'        },
  { type: 'paren',  value: '('        },
  { type: 'name',   value: 'subtract' },
  { type: 'number', value: '4'        },
  { type: 'number', value: '2'        },
  { type: 'paren',  value: ')'        },
  { type: 'paren',  value: ')'        },
]
```



**具体代码**

实际上是对字符串进行遍历，对每个字符串进行判断，从而生成对应的`token`, 最终拿到一个 `token` 数组。

```ts
function tokenizer(input) {
  let current = 0;

  let tokens = [];

  while (current < input.length) {

    let char = input[current];
    if (char === '(') {

      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'number', value });

      continue;
    }

    if (char === '"') {
      let value = '';

      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({ type: 'string', value });

      continue;
    }

  
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'name', value });

      continue;
    }

    throw new TypeError('I dont know what this character is: ' + char);
  }

  return tokens;
}
```

#### 语法分析

拿到 `tokens` 后我们还要把他转成 `AST` 。

**伪代码**： 
```ts
const ast = parse(tokens);
```

**效果**:
```ts
// tokens
[
  { type: 'paren',  value: '('        },
  { type: 'name',   value: 'add'      },
  { type: 'number', value: '2'        },
  { type: 'paren',  value: '('        },
  { type: 'name',   value: 'subtract' },
  { type: 'number', value: '4'        },
  { type: 'number', value: '2'        },
  { type: 'paren',  value: ')'        },
  { type: 'paren',  value: ')'        },
]

// ast
{
  "type": "Program",
  "body": [
    {
      "type": "CallExpression",
      "name": "add",
      "params": [
        {
          "type": "NumberLiteral",
          "value": "2"
        },
        {
          "type": "CallExpression",
          "name": "subtract",
          "params": [
            {
              "type": "NumberLiteral",
              "value": "4"
            },
            {
              "type": "NumberLiteral",
              "value": "2"
            }
          ]
        }
      ]
    }
  ]
}
```

**具体代码**：

这里会去遍历 `tokens`, 对不同类型的 `token` 进行判断，从而生成不同的 `节点`。 两个节点是会通过一些属性所关联的（比如 `CallExpression` 的 `params` 就可能会含有 `StringLiteral` 或 `NumberLiteral` 节点）。从而，我们拿到了我们的 `AST` 树。


```ts
function parser(tokens) {

  let current = 0;

  function walk() {

    let token = tokens[current];

    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    if (
      token.type === 'paren' &&
      token.value === '('
    ) {
      token = tokens[++current];
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      token = tokens[++current];

      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk());
        token = tokens[current];
      }

      current++;

      return node;
    }

    throw new TypeError(token.type);
  }

  let ast = {
    type: 'Program',
    body: [],
  };
  
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}
```

### Transform

把原本的 `AST` 改造为目标代码的 `AST`, 这一步叫做 `transform`。

**伪代码**
```ts
const newAst = transform(ast);
```

**效果**
```ts
// source ast
{
  "type": "Program",
  "body": [
    {
      "type": "CallExpression",
      "name": "add",
      "params": [
        {
          "type": "NumberLiteral",
          "value": "2"
        },
        {
          "type": "CallExpression",
          "name": "subtract",
          "params": [
            {
              "type": "NumberLiteral",
              "value": "4"
            },
            {
              "type": "NumberLiteral",
              "value": "2"
            }
          ]
        }
      ]
    }
  ]
}

// target ast
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "add"
        },
        "arguments": [
          {
            "type": "NumberLiteral",
            "value": "2"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "subtract"
            },
            "arguments": [
              {
                "type": "NumberLiteral",
                "value": "4"
              },
              {
                "type": "NumberLiteral",
                "value": "2"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

**具体代码**：

这里使用了深度优先遍历来访问`AST`节点， 同时采用了`访问者模式`，实现了对应节点采用对应的转换逻辑，便于我们针对对应的节点编写转换逻辑, 并且提供 `enter`, `exit` 两个函数，让我们可以在节点进入，弹出的时候操作。

**流程示范**

```ts
-> Program (enter)
  -> CallExpression (enter)
    -> Number Literal (enter)
    <- Number Literal (exit)
    -> Call Expression (enter)
      -> Number Literal (enter)
      <- Number Literal (exit)
      -> Number Literal (enter)
      <- Number Literal (exit)
      <- CallExpression (exit)
  <- CallExpression (exit)
<- Program (exit)
```



```ts
function traverser(ast, visitor) {

  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  function traverseNode(node, parent) {

    let methods = visitor[node.type];

    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
    case 'Program':
        traverseArray(node.body, node);
        break;

      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      default:
        throw new TypeError(node.type);
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  traverseNode(ast, null);
}

function transformer(ast) {

  let newAst = {
    type: 'Program',
    body: [],
  };

  ast._context = newAst.body;

  traverser(ast, {

    NumberLiteral: {

      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    CallExpression: {
      enter(node, parent) {

        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        node._context = expression.arguments;

        if (parent.type !== 'CallExpression') {

          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

      
        parent._context.push(expression);
      },
    }
  });

  return newAst;
}
```

我们已经得到一个新的 `ast` 啦，最差最后一步代码生成了。

### Generate

把修改后的 `AST` 进行遍历，生成对应的代码。

**伪代码**:
```ts
const code = generate(newAst);
```

**效果**:
```ts
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "add"
        },
        "arguments": [
          {
            "type": "NumberLiteral",
            "value": "2"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "subtract"
            },
            "arguments": [
              {
                "type": "NumberLiteral",
                "value": "4"
              },
              {
                "type": "NumberLiteral",
                "value": "2"
              }
            ]
          }
        ]
      }
    }
  ]
}

// 转换成 
add(2, subtract(4, 2));
```

**具体代码**：

实质上提供了一个 `generateCode` 函数，对整个 `AST` 遍历，不同的节点会有不同结果的字符串, 最终做拼接。

```ts
function codeGenerator(node) {
  
  switch (node.type) {

    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    case 'Identifier':
      return node.name;

    case 'NumberLiteral':
      return node.value;

    case 'StringLiteral':
      return '"' + node.value + '"';

    default:
      throw new TypeError(node.type);
  }
}
```


### 整体流程

**Compiler**
整体的流程如下：

`parse`: 根据字符串，拿到源代码的 `AST`。

`transform`: 修改得到新的 `AST`。

`generate`: 根据新的 `AST` 生成 目标代码。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/21899aea781d4a42872b6e841490acfd%7Etplv-k3u1fbpfcp-watermark.image)



```ts
const compile = (sourceCode) => {
  const token = tokenizer(sourceCode);
  const ast = parser(token);
  const newAst = transform(ast);
  const output = codeGenerator(newAst);
  return output;
}
```

## 结语

实际上，大多编译器的实现细节可能会有些许不同，但大体的流程也是一样的，本文旨在讲述编译的一个流程，以及通过 `the-super-tiny-compier` 举例，从而有所体感。同时，本文对于一些编译的具体细节没有讲，也请读者见谅。

## 参考资料
- [the-super-tiny-compier](https://github.com/jamiebuilds/the-super-tiny-compiler)
- [前端工程化基石 -- AST（抽象语法树）以及AST的广泛应用🔥](https://juejin.cn/post/7155151377013047304#heading-6)
- [笔者：the-super-tiny-compiler](https://github.com/hua-bang/front_note/tree/master/compiler/the-super-tiny-compiler)







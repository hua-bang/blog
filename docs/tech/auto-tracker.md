---
title: 通过 Babel 编译实现自动点击埋点
customTag: tech>编译
date: 2023.11.02
---

# 通过 Babel 编译实现自动点击埋点

> 本文仅探讨通过 Babel 实现区域自动点击埋点的一个简单思路，并不一定适用具体的场景。

## 前言

埋点，可以理解为针对用户的特定行为，进行一个记录，处理和发送相关事件以及对应的数据的技术。

你可以理解为是采取用户的行为，把这次的事件数据化，进行上报，从而便于后续的数据分析。

前端作为面向用户的交互层，自然也少不了埋点的诉求。一般会涉及以下的几种常见埋点。

- **曝光埋点**：页面或者某个区域展示出来的时候，算页面/区域的曝光，进行事件上报，但由于口径的问题，这里可能还会涉及**曝光时机**，**曝光比例**等因素，但这些也取决于具体业务场景的口径。
- **点击埋点**：页面中某个特定区域被点击时候，触发事件，比如页面登录按钮等。
- **业务事件埋点**：业务中特定场景下，用户触发特定行为的埋点事件，具体看业务涉及的埋点。
- 等等。。。

我们这里只探讨**点击埋点**，且上报的口径为：**点击后立即上报，不做防抖处理。** 如何在编译过程中，实现自动上报。

但在这之前，我们先来看，不通过编译手动，点击埋点如何做的。

## 点击埋点的实现

接触做法之前，我们先来看看点击埋点的两个要素

- **点击事件触发**: 对对应的点击的元素进行监听
- **点击上报数据**: 点击事件触发后，带上对应数据。

上方，我们很容易想到第一种思路

### 手动绑定节点点击

#### 思路

实际上，我们只需要

- **事件触发**：在对应的节点，绑定上点击事件
- **上报数据**：点击事件回调中，带上数据即可。

实际上，下方代码就可以实现

```tsx
import { report } from "logger-sdk";
import React from "react";

const App = () => {
  const handleClick = () => {
    // getData 是个伪代码
    const data = getData();

    // 实现上报
    report("eventName", data);
  };

  return <div onClick={handleClick}>Click Area</div>;
};
```

上面实现了一个简单的点击上报，实际上就是用回调函数来处理。

#### 优缺点

- **优点**：针对于每个节点进行处理，点击逻辑更为具体，一个上报函数针对一个节点。
- **缺点**：每个函数都需要进行一次点击事件的绑定，点击上报事件逻辑分散。

### 运行时的全局监听

上面，我们的方案需要在每个节点绑定一个函数，这实际上是由一定的开发成本的，那么我们能不能把这个函数收敛下，节点只关注**是否上报**以及**上报的数据**。

这个时候，我们可以借助运行时的全局监听的功能。

#### 思路

进行点击的全局监听，同时对我们要监听的元素进行**上报标识**, **上报事件名称**以及**数据标识**。每一次点击，我们可以向上追溯父节点，看看是否对应的标识元素，如果有在，取多对应的数据，进行上报。

- **全局监听**：借助 `document.addEventListener` 绑定事件，在捕获阶段进行监听，这样子我们就能获取到点击的事件，而不会受其他元素的阻止冒泡和阻止捕获影响。
- **上报标识**：通过节点的 `dataset` 进行上报标识，我们可以使用 `data-event-name` 标识该节点的上报事件。
- **数据标识**：通过节点的`dataset`存储数据, 我们可以用`data-log-params` 进行该点上报数据的存储。

于是，通过下方代码可以实现。

**具体代码如下，暴露上报的函数。**

```ts
/**
 * 上报基础函数
 * @param eventName 上报事件名称
 * @param params 上报参数
 * @returns { void }
 */
const report = (eventName: string, params: Record<string, unknown>): void => {
  console.log("eventName", eventName, "params", params);
};

/**
 * 获取对象实例上的 上报数据。
 * @param target EventTarget 对象实例
 * @returns { Record<string, any> | null }
 */
const getReportInfoFromEventTarget = (
  target: EventTarget | null
): Record<string, any> | null => {
  let reportInfo = null;

  let currentTarget = target as HTMLElement | null;

  while (currentTarget) {
    const { dataset } = currentTarget;
    const { logName: eventName, logParams: params } = dataset;
    if (eventName && params) {
      reportInfo = {
        eventName,
        params: JSON.parse(params),
      };
      break;
    }
    currentTarget = currentTarget.parentElement;
  }

  return reportInfo;
};

/**
 * 添加监听上报器
 * @param el EventTarget
 */
export const addReportListener = (el: EventTarget) => {
  const handleTargetClick = (e: Event) => {
    const eventTarget = e.target;

    const reportInfo = getReportInfoFromEventTarget(eventTarget);

    if (reportInfo) {
      const { eventName, params } = reportInfo;
      report(eventName, params);
    }
  };

  el.addEventListener("click", handleTargetClick);
};
```

**如何使用**

```tsx
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { addReportListener } from "./utils/log";

addReportListener(document);

function App() {
  const [count, setCount] = useState(0);

  const logParams = JSON.stringify({
    area: "button",
    title: "test",
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          data-log-name="click-btn"
          data-log-params={logParams}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
```

**效果**

这就简单地实现了运行时，实现了对应的上报功能。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/a80d436d9c404635b13738254352308c%7Etplv-k3u1fbpfcp-watermark.image)

#### 优缺点

- **优点**：实现比较简单，只涉及运行时。
- **缺点**：监听了 `document` 的点击事件，每次点击都会触发相关函数。获取数据的过程中，存在回溯操作，这里可能也可能会有性能损耗。

### Babel 实现

下面，我们来看编译时候如何进行自动点击埋点的实现。

当我们使用 `react`, `vue` 的时候，这个过程其实会涉及的编译，比如将 `React` 中 `JSX`, `TSX` 转成`js`, 或 `vue` 转换成 `js`。

对应的打包工具会提供给我们对应的生命周期钩子，我们可以在对应的生命周期钩子，我们可以用对应的转译器（如 `babel`）来转换。

#### 思路

于是，我们的思路比较明确，主要是以下两点

- **修改代码的时机**：在对应的打包工具中，看编译过程中的生命周期钩子，在对应生命周期中，修改代码。(如 vite 中的 `transform` 钩子)
- **具体如何修改代码**：我们可以借助 babel 来进行一层代码的转译。分为 **引入 SDK** 以及 **添加编译事件**。

下面以 `vite` 项目为例子。

> Vite 插件：https://vitejs.dev/guide/api-plugin.html

##### 修改代码的时机

这里其实涉及两点。

- **打包工具提供的钩子**：vite 提供了 transform 钩子，我们可以直接用，但其他打包工具的具体看提供的钩子。
- **编译插件调用顺序**：项目中一般也存在其他的编译插件，我们要注意执行顺序，不要产生冲突（如我们的插件应该是 在 tsx/jsx 进行编译，而不是在他转成 js 的时候进行编译）。

我们使用 vite 的 transform 钩子。

```ts
import * as babel from "@babel/core";
import autoTrackerBabelPlugin from "./babel-plugin";

interface AutoTrackerPluginOptions {
  libPath: string;
}

const fileRegex = /\.(tsx)$/;

export default function autoTracker(pluginOptions: AutoTrackerPluginOptions) {
  return {
    name: "autoTracker",
    enforce: "pre",

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
          plugins: ["jsx", "typescript"],
        },
        plugins: [[autoTrackerBabelPlugin, pluginOptions]],
      });
      return {
        code: result.code,
        map: null,
      };
    },
  };
}
```

##### babel 代码编译

`babel` 这里主要注意两点

- **SDK 引入**：我们看对应的文件，之前有没有引入 SDK，没有的话，我们手动引入一下。

代码如下：

```ts
function checkHasLogIdentification(attributes) {
  return (attributes || []).some(
    (item) => item.name.name === "data-log-params"
  );
}

function findAttributeNode(attributes, key) {
  return (attributes || []).find((item) => item.name && item.name.name === key);
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

        // 这里从 Program 节点进行遍历, 主要两个功能
        // 1. 判断该组件下的 是否需要引入 SDK。
        // 2. 判断 SDK 是否导入，导入记录下 loggerId。
        path.traverse({
          JSXOpeningElement(elePath) {
            const { attributes } = elePath.node;

            const hasLogIdentification = checkHasLogIdentification(attributes);

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
              loggerId = specifier.local.name; // 取出导入的变量名赋值给loggerId
              importPath.stop();
              state.loggerNodeName = loggerId;
            }
          },
        });

        if (!needImportSDK) {
          return;
        }

        if (!loggerId) {
          // 如果loggerId没有值，说明源代码中还没有导入此模块，
          loggerId = path.scope.generateUid(libName);
          path.node.body.unshift(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier(loggerId))],
              t.stringLiteral(libPath)
            )
          );
          state.loggerNodeName = loggerId;
        }
      },
    },
  };
}
```

- **代码编译**：

```ts
function checkHasLogIdentification(attributes) {
  return (attributes || []).some(
    (item) => item.name.name === "data-log-params"
  );
}

function findAttributeNode(attributes, key) {
  return (attributes || []).find((item) => item.name && item.name.name === key);
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

        const hasLogIdentification = checkHasLogIdentification(attributes);
        if (!hasLogIdentification) {
          return;
        }

        const onClickNode = findAttributeNode(attributes, "onClick");

        if (!onClickNode) {
          path.pushContainer(
            "attributes",
            t.jsxAttribute(
              t.jsxIdentifier("onClick"),
              t.jsxExpressionContainer(
                template.expression(`${state.loggerNodeName}.reportClick`)()
              )
            )
          );
        } else {
          const { value } = onClickNode;
          const { expression: onClickFNNode } = value;

          const newTapFNNode = t.callExpression(
            t.callExpression(
              t.memberExpression(
                t.memberExpression(
                  t.identifier(state.loggerNodeName),
                  t.identifier("generateReportClickFn")
                ),
                t.identifier("bind")
              ),
              [t.thisExpression()]
            ),
            [onClickFNNode]
          );
          onClickNode.value.expression = newTapFNNode;
        }
      },
    },
  };
}
```

**效果**：

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/91cd18bae2654483bd6b4b7eaf458e06%7Etplv-k3u1fbpfcp-watermark.image)

上面是 `babel` 插件实现自动埋点，存在**运行时**和**编译时**的操作，但上方只是一个简单的实现，还有很多地方需要细化。

#### 优缺点

- **优点**：没有监听的操作，也不用手动写侵入代码，只需在对应节点绑定`data-log-xx`信息即可。
- **缺点**：涉及编译时，相对来说开发成本会高一点点。

## 总结

上方介绍了三种点击埋点的思路

- 手动绑定节点点击
- 运行时全局监听
- 编译过程注入代码

上方的实现，只是一个简单的思路，并不适用于多数场景，也请读者见谅。

## 参考资料

- [autoTracker](https://github.com/hua-bang/vite-plugins/blob/master/plugins/autoTracker/babel-plugin.ts)
- [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)
- [Babel](https://babeljs.io/)

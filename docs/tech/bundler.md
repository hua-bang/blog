---
title: 初识前端 bundler
customTag: tech>Frontend Engineer
editLink: true
date: 2024.01.02
---

# 初识前端 bundler

## 1. **什么是 bundler**

在前端开发过程中，我们日常基本都会接触 webpack、rollup、esbuild 等打包工具，通过这些工具，我们日常编写的 TSX、Vue、CSS 等文件会经过编译处理，打包生成最终的产物文件。

在这个过程中，我们会了解到 webpack、rollup、esbuild 都是 bundler，但似乎没有人具体告诉我们 bundler 的概念是什么。

这里我也试着去了解 bundler 是什么。

**什么是 bundling**

了解 bundler 之前，我们先来看看 bundling 的概念是什么。

[Vite 中介绍 bundling](https://arc.net/l/quote/tssakvvr): 使用工具抓取、处理和连接我们的源模块到可以在浏览器中运行。

bundling 的动作，就是将我们的源代码文件进行处理文件，从而可以在浏览器中执行, 我们可以简单的理解为我们日常说的打包。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231216230207.png)

那么 bundler 的话，也就是完成打包动作的工具。所以，bundler 本身就是个抽象的概念。

## 2. **为什么我们需要 bundler**

随着现代网页应用变得越来越复杂, 比如一个前端页面系统，可能会存在几十万行的代码，为了优化前端开发者的开发体验，降低开发心智，也为了后续的维护，这个时候 bundler 就能起很大的作用了，下方举几个例子。

- **模块化开发**：bundler 工具可以让我们编写粒度更细的代码模块。当几十万行的代码在一起的时候，代码的细粒度时很重要的。
- **代码合并优化**：代码细粒度越细，说明我们的文件数量可能会越多，而 bundler 在打包过程会去根据文件的依赖关系，从而进行代码的合并，将成百上千个文件打包成少数几个文件，利于 HTTP 资源的请求。同时，部分打包工具的 tree sharking 可以去除掉无用的代码。
- **现代特性支持**：bundler 一般会自己提供或支持插件配置，支持将使用现代 JavaScript 特性（如 ES6 模块）、TS 编写的代码转换为更广泛兼容的格式，确保应用可以在不同的浏览器环境中正常运行。
- **动态加载资源**：部分 bundler 支持资源/模块的动态加载，可以对资源请求进行优化。

综上，bundler 通过优化模块加载过程和支持现代编程特性（注意：并非所有的 bundler 都会实现上方所有功能，得具体看 bundler 工具），提高了复杂网页应用的性能和可维护性。

## 3. **常见的 bundler**

下面是对这三个常见的 bundler —— Webpack, Rollup, esbuild —— 的更详细的介绍：

### Webpack

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231216232422.png)

- **广泛使用**：Webpack 是业界最知名的 bundler 之一，广泛应用于各种规模和类型的项目中。
- **灵活性**：Webpack 提供了高度的配置灵活性，允许开发者精细控制打包过程。这包括代码拆分、懒加载、模块热替换（HMR）等高级功能。
- **插件系统**：一个强大的插件系统是 webpack 的核心特点之一，通过各种插件可以扩展其功能，满足特定的构建需求。
- **社区和生态**：拥有一个庞大的社区和丰富的插件生态系统，为各种问题和需求提供解决方案。

### Rspack

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231216232616.png)

- **基于 Rust**：rspack 是一个基于 Rust 语言开发的前端打包工具。Rust 的高性能特性使得 rspack 在执行速度方面有很好的表现，类似于 esbuild。
- **性能优势**：借助 Rust 强大的并发处理能力和高效的内存管理，rspack 能够提供快速的打包速度，这对于大型项目和需要快速构建的场景特别有利。
- **现代前端开发**：rspack 支持现代 JavaScript 的特性，包括模块化开发和新的 ECMAScript 标准，可帮助开发者写出更清晰、更模块化的代码。
- **插件系统和扩展性**：虽然 rspack 的生态系统可能还不如 Webpack 或 Rollup 成熟，但它设计了灵活的插件系统，允许开发者根据需要扩展其功能。

### Rollup

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231216232552.png)

- **高效打包**：Rollup 以其高效的打包算法而闻名，特别适合于库和框架的开发。
- **简洁的输出**：相较于 Webpack，Rollup 生成的打包文件通常更小，更适合用于生产环境。
- **树摇（Tree Shaking）**：Rollup 对 ES 模块的静态结构进行分析，有效地移除未使用的代码，优化最终包的大小。
- **适用场景**：虽然 Rollup 也可以用于应用级别的打包，但它在库和框架的构建中特别受欢迎，如 Vue.js 和 React 库等。

### esbuild

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231216232648.png)

- **极速构建**：esbuild 的主要特点是其构建速度，它使用 Go 编写，能够以极快的速度完成打包和构建任务，远快于其他现有的 JavaScript 打包工具。
- **简化的配置**：相比于 Webpack 和其他打包工具，esbuild 提供了更简洁的配置选项，易于上手和使用，尤其适合那些追求快速构建的项目。
- **支持现代 JavaScript**：esbuild 支持将现代 JavaScript (如 ES6+) 转换成向后兼容的代码，使其能够在不同的浏览器环境中运行。
- **优化功能**：提供代码压缩、移除无用代码等优化功能，以减小最终打包文件的体积。
- **适用场景**：由于其快速的构建能力，esbuild 特别适合于需要快速迭代的开发环境和需要快速构建原型的场景。
- **生态系统**：虽然 esbuild 的插件生态系统可能不如 Webpack 或 Rollup 成熟，但它正在快速发展，社区正在逐步扩大和增强。

## 4. **总结**

bundler 在现代前端开发中发挥着至关重要的作用。它不仅提高了应用的加载速度和性能，还通过模块化和优化代码，使得项目更加易于管理和维护。随着前端技术的不断进步，理解并学习 bundler 也许也是前端进阶的一环节吧。

## 参考

- [webpack](https://webpack.js.org/)
- [Rspack](https://www.rspack.dev/)
- [What is bundling in JavaScript](https://www.altcademy.com/blog/what-is-bundling-in-javascript/)
- [bundler 的设计取舍](https://juejin.cn/post/7294103091020628020)
- [ViteJS](https://vitejs.dev/)

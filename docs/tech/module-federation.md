---
title: 模块联邦
customTag: tech>Frontend Engineer
editLink: true
---

# 模块联邦

## **💡 什么是模块联邦**

模块联邦是 `JavaScript` 应用程序中去中心化的架构模式，允许你在多个 `JavaScript` 应用中进行代码共享。

**解决了什么问题？**

- 减少代码重复问题。
- 提高代码课维护性。
- 降低应用的整体大小。
- 提高应用的性能。

**为什么是 2.0？**

模块联邦最早是由 `Webpack` 提出，并在 `Webpack5` 中进行了内置，从而达到代码共享的能力。但也带来了几个问题：类型丢失、强依赖 `Webpack` 的 `bundler` 。而模块联邦 2.0 不仅提供模块导出、加载和依赖共享的核心功能，还提供额外的动态类型提示、`Manifest`、`Federation Runtime`和`Runtime Plugin System`。从而让模块联邦更适合用作大规模`Web`应用程序中的微前端架构

## **🔥** 功能特点

Module Federation has the following features:

- ⚡ Code sharing、Dependency reuse
- 📝 Manifest
- 🎨 **[Module Federation Runtime](https://module-federation.io/guide/basic/runtime)**
- 🧩 **[Runtime Plugins System](https://module-federation.io/plugin/dev/)**
- 🚀 **[Dynamic type prompt](https://module-federation.io/guide/basic/type-prompt)**
- 🛠️ **[Chrome Devtool](https://module-federation.io/guide/basic/chrome-devtool)**
- 🦀 **[Rspack](https://module-federation.io/guide/basic/rspack)** and **[Webpack](https://module-federation.io/guide/basic/webpack)** Support

## **🎯** 使用场景

模块联合适用于以下场景：

- **大型应用程序**：对于大型应用程序，您可以将应用程序分解为多个微前端，并使用模块联合在它们之间共享代码和资源
- **微前端架构**：模块联合是构建微前端架构的理想工具
- **多团队开发**：模块联合可以帮助多个团队协作开发大型应用程序

## **🕠 模块联邦的历史**

模块联合是Webpack 5中引入的一项新功能，但其历史可以追溯到2017年。当时，Webpack团队开始探索一种在多个应用程序之间共享代码的方法

- 2018年Webpack 4.20发布，引入模块钩子，为模块联合的发展奠定了基础
- 2019年，Webpack 5发布，正式引入模块联合功能

模块联合已成为构建现代Web应用程序的强大工具

## **🕰️ 模块联邦的未来**

模块联合旨在成为一种构建大型Web应用的架构方法，类似于后端的微服务。模块联合将提供更多的能力来满足大型Web应用去中心化的基础需求，目前包括以下部分：

- 提供全面的Devtools工具
- 提供更多高级框架功能，如路由器、沙盒、SSR
- 基于模块联合为大型Web应用程序提供最佳实践
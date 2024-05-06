import{_ as e,c as t,o as a,a3 as r}from"./chunks/framework.DbBdm8su.js";const f=JSON.parse('{"title":"模块联邦","description":"","frontmatter":{"title":"模块联邦","customTag":"tech>Frontend Engineer","editLink":true,"date":"2024.05.05"},"headers":[],"relativePath":"tech/module-federation.md","filePath":"tech/module-federation.md","lastUpdated":1714955773000}'),o={name:"tech/module-federation.md"},i=r('<h1 id="模块联邦" tabindex="-1">模块联邦 <a class="header-anchor" href="#模块联邦" aria-label="Permalink to &quot;模块联邦&quot;">​</a></h1><h2 id="💡-什么是模块联邦" tabindex="-1"><strong>💡 什么是模块联邦</strong> <a class="header-anchor" href="#💡-什么是模块联邦" aria-label="Permalink to &quot;**💡 什么是模块联邦**&quot;">​</a></h2><p>模块联邦是 <code>JavaScript</code> 应用程序中去中心化的架构模式，允许你在多个 <code>JavaScript</code> 应用中进行代码共享。</p><p><strong>解决了什么问题？</strong></p><ul><li>减少代码重复问题。</li><li>提高代码课维护性。</li><li>降低应用的整体大小。</li><li>提高应用的性能。</li></ul><p><strong>为什么是 2.0？</strong></p><p>模块联邦最早是由 <code>Webpack</code> 提出，并在 <code>Webpack5</code> 中进行了内置，从而达到代码共享的能力。但也带来了几个问题：类型丢失、强依赖 <code>Webpack</code> 的 <code>bundler</code> 。而模块联邦 2.0 不仅提供模块导出、加载和依赖共享的核心功能，还提供额外的动态类型提示、<code>Manifest</code>、<code>Federation Runtime</code>和<code>Runtime Plugin System</code>。从而让模块联邦更适合用作大规模<code>Web</code>应用程序中的微前端架构</p><h2 id="🔥-功能特点" tabindex="-1"><strong>🔥</strong> 功能特点 <a class="header-anchor" href="#🔥-功能特点" aria-label="Permalink to &quot;**🔥** 功能特点&quot;">​</a></h2><p>Module Federation has the following features:</p><ul><li>⚡ Code sharing、Dependency reuse</li><li>📝 Manifest</li><li>🎨 <strong><a href="https://module-federation.io/guide/basic/runtime" target="_blank" rel="noreferrer">Module Federation Runtime</a></strong></li><li>🧩 <strong><a href="https://module-federation.io/plugin/dev/" target="_blank" rel="noreferrer">Runtime Plugins System</a></strong></li><li>🚀 <strong><a href="https://module-federation.io/guide/basic/type-prompt" target="_blank" rel="noreferrer">Dynamic type prompt</a></strong></li><li>🛠️ <strong><a href="https://module-federation.io/guide/basic/chrome-devtool" target="_blank" rel="noreferrer">Chrome Devtool</a></strong></li><li>🦀 <strong><a href="https://module-federation.io/guide/basic/rspack" target="_blank" rel="noreferrer">Rspack</a></strong> and <strong><a href="https://module-federation.io/guide/basic/webpack" target="_blank" rel="noreferrer">Webpack</a></strong> Support</li></ul><h2 id="🎯-使用场景" tabindex="-1"><strong>🎯</strong> 使用场景 <a class="header-anchor" href="#🎯-使用场景" aria-label="Permalink to &quot;**🎯** 使用场景&quot;">​</a></h2><p>模块联合适用于以下场景：</p><ul><li><strong>大型应用程序</strong>：对于大型应用程序，您可以将应用程序分解为多个微前端，并使用模块联合在它们之间共享代码和资源</li><li><strong>微前端架构</strong>：模块联合是构建微前端架构的理想工具</li><li><strong>多团队开发</strong>：模块联合可以帮助多个团队协作开发大型应用程序</li></ul><h2 id="🕠-模块联邦的历史" tabindex="-1"><strong>🕠 模块联邦的历史</strong> <a class="header-anchor" href="#🕠-模块联邦的历史" aria-label="Permalink to &quot;**🕠 模块联邦的历史**&quot;">​</a></h2><p>模块联合是 Webpack 5 中引入的一项新功能，但其历史可以追溯到 2017 年。当时，Webpack 团队开始探索一种在多个应用程序之间共享代码的方法</p><ul><li>2018 年 Webpack 4.20 发布，引入模块钩子，为模块联合的发展奠定了基础</li><li>2019 年，Webpack 5 发布，正式引入模块联合功能</li></ul><p>模块联合已成为构建现代 Web 应用程序的强大工具</p><h2 id="🕰️-模块联邦的未来" tabindex="-1"><strong>🕰️ 模块联邦的未来</strong> <a class="header-anchor" href="#🕰️-模块联邦的未来" aria-label="Permalink to &quot;**🕰️ 模块联邦的未来**&quot;">​</a></h2><p>模块联合旨在成为一种构建大型 Web 应用的架构方法，类似于后端的微服务。模块联合将提供更多的能力来满足大型 Web 应用去中心化的基础需求，目前包括以下部分：</p><ul><li>提供全面的 Devtools 工具</li><li>提供更多高级框架功能，如路由器、沙盒、SSR</li><li>基于模块联合为大型 Web 应用程序提供最佳实践</li></ul>',20),l=[i];function n(d,s,c,p,u,h){return a(),t("div",null,l)}const b=e(o,[["render",n]]);export{f as __pageData,b as default};

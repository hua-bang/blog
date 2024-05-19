---
title: 聊聊依赖注入
customTag: tech>工程设计
editLink: true
date: 2024.05.19
---

# 聊聊依赖注入
<aside> 💡 依赖注入是依赖反转的一种具体实现。

</aside>

## 依赖注入是啥

依赖注入（Dependency Injection，DI）是一种设计模式，用于管理模块之间的依赖关系。依赖关系的创建和维护不由模块自身负责，而是由外部的容器（通常是一个依赖注入容器）来完成。简单来说，依赖注入就是将依赖对象传递给需要它的对象，而不是由被依赖对象自己去创建或者查找依赖的对象。

## **为什么需要依赖注入？**

**核心思想在于解耦，将依赖关系从模块之间转移到外部的容器来完成，从而降低了模块之间的耦合度，使得系统更加灵活、可扩展和易于测试。**

**优点在于**：

1. **解耦合：** 依赖注入将依赖关系的创建和维护从被依赖对象中解耦出来，使得模块之间的耦合度降低，提高了系统的灵活性和可维护性。
2. **可测试性：** 依赖注入使得依赖关系可以通过外部参数传入，这样在单元测试中可以更轻松地模拟依赖对象，从而进行更加精确和有效的单元测试。
3. **可重用性：** 通过依赖注入，可以将依赖对象与具体实现解耦，使得依赖对象可以在不同的上下文中被重用，提高了代码的可重用性。
4. **可替代性：** 依赖注入使得依赖关系变得更加灵活，可以轻松地替换掉被依赖对象的具体实现，而不会影响到依赖对象的调用方。

具体举个例子, 比如你有一个通知的 NoticeService 的服务。

一开始，你的代码如下。一开始使用邮件来给用户发送信息。

```jsx
class App {
  constructor() {
    this.emailService = new EmailService(); // 直接依赖具体的实现类
  }
  
  notice(message: string) {
    return this.emailService.send(message);
  }
}
```

上方这个代码确实没啥问题，但到了某一天，产品大大说，我们需要给发送 sns 的短信信息。于是乎，你做了代码修改。

```diff
class App {
  constructor() {
-   this.emailService = new EmailService(); // 直接依赖具体的实现类
+   this.snsService = new SnsService(); // 直接依赖具体的实现类
  }
  
  notice(message: string) {
-    return this.emailService.send(message);
+    return this.snsService.send(message);
  }
}
```

但也许后续还有其他的变更呢，比如 APP，Web, WeChat 等其他通知呢。这个时候可以就采用依赖注入了。

```jsx
class App {
  constructor(noticeService: NoticeService) {
    this.noticeService = noticeService; // 直接依赖具体的实现类
  }
  
  notice(message: string) {
    return this.noticeService.send(message);
  }
}

const emailNoticeService = new EmailNoticeService();
const app = new App(emailNoticeService);

app.notice('测试');
```

其实上方的代码，我们已经实现了**依赖注入**的效果。

## 什么是依赖注入容器

谈及依赖注入的时候，我们经常会听到“依赖注入容器”的概念。

**依赖注入容器是一个框架或工具，用于管理应用程序中的对象依赖关系。**它负责创建对象并解析它们之间的依赖关系，并在需要时将依赖项注入到对象中。

以下是为什么需要依赖注入容器的一些主要原因：

1. **降低耦合度：** 依赖注入容器可以帮助将对象的创建和依赖项的注入解耦。对象不再需要直接创建或获取它所依赖的对象，而是由容器负责管理，从而降低了对象之间的耦合度。
2. **简化配置：** 依赖注入容器通常提供配置机制，允许开发人员通过配置文件或注解来配置对象及其依赖项的创建方式和参数。这种方式相比手动编码可以更简洁和灵活。
3. **提高可测试性：** 通过依赖注入容器，可以更轻松地将模拟对象（Mock objects）注入到被测试对象中，从而实现单元测试。这样可以更容易地测试对象的行为而不用担心依赖项的创建和管理。
4. **促进代码重用和组件化：** 依赖注入容器可以帮助将对象分解为更小的组件，并使这些组件更容易被重用。通过将对象的依赖关系委托给容器管理，可以更轻松地将这些组件组合在一起构建更复杂的系统。
5. **提高可维护性：** 依赖注入容器可以帮助提高代码的可维护性，因为它可以使代码更加清晰和易于理解。通过将对象的创建和依赖项的注入交给容器处理，可以减少重复的代码，并将关注点分离，使得代码更易于维护和理解。

具体例子

```tsx
interface Dependency<T = any> {
  new (...args: any[]): T;
}

export class Container {
  private dependencies: Map<string, Dependency> = new Map();

  register<T>(key: string, dependency: Dependency<T>): void {
    this.dependencies.set(key, dependency);
  }

  resolve<T>(key: string): T {
    // 省略 code
  }
}

// 示例使用
class NoticeService {
  notice(msg: string) {
    console.log(`notice, ${msg}`);
  }
}

class App {
  constructor(private noticeService: NoticeService) {}

  notice(msg: string) {
    return this.noticeService.notice(msg);
  }
}

// 创建容器
const container = new Container();

// 注册依赖项
container.register("noticeService", NoticeService);
container.register("App", AppService);

// 解析依赖项
const appService = container.resolve<App>("App");
appService.notice("hello");
```

通过上方，其实我们能看到，容器本质上通过依赖注入，依赖解析的能力，去管理好应用中的依赖。

## 依赖注入容器的思路

“知其然，知其所以然”，依赖注入容器背后的原理也是值得我们去了解的，这样子我们能更好的了解依赖注入工具的使用。具体如

1. nest 中为什么 @Injectable 就能够注入依赖。
2. 依赖注入中依赖为什么是单一实例。

于是，下方我们需要实现下方几点

- **依赖注册**：声明那些依赖是可以注册到容器中，便于后续容器管理。
- **依赖分析**：创建对象，找到并创建对应需要的依赖对象。
- **创建实例**：利用创建器将实例创建出来，支持单例模式，多例模式。

最终，我们实现的代码，如下

```tsx
@Injectable()
class Noticer {
  notice(msg: string) {
    console.log(`app notice: ${msg}`);
  }
}

@Injectable()
class App {
  constructor(
    private noticer: Noticer,
  ) {}

  notice(msg: string) {
    this.noticer.notice(msg);
  }
}

const container = new Container();
const app = container.resolve(App);
app.notice('测试一下');
```

### 依赖注册

> 一句话：通过 `@Injectable` 的装饰器写法进行容器依赖的注册。

我们先来分析看看依赖注册的本质是什么，以及具体的使用形式。

- 本质：本质就是 Container 有一张表，可以存储依赖，以及后续解析依赖便于依赖的查询。
- 形式：通过装饰器来进行注册依赖。

**自身能力注册**

这里比较简单，我们直接使用 一个 Map 来进行存储就行。

```tsx
import "reflect-metadata";

interface Dependency<T = any> {
  new (...args: any[]): T;
}

export class Container {
  private dependencies: Map<string, Dependency> = new Map();

  register<T>(key: string, dependency: Dependency<T>): void {
    this.dependencies.set(key, dependency);
  }
}

const container = new Container();

export default container;
```

**装饰器依赖注入**

本质上是将依赖和容器产生关联，方便后续容器来做依赖管理。

```tsx
import container from "./container";

export function Injectable<T>() {
  return (target: new (...args: any[]) => T) => {
    container.register(target.name, target);
  };
}
```

我们写一段代码来测试效果。

```tsx
import container from "./container";
import { Injectable } from "./injectable";

@Injectable()
class NoticeService {
  notice(msg: string) {
    console.log(`notice, ${msg}`);
  }
}

@Injectable()
class App {
  constructor(private noticeService: NoticeService) {}

  notice(msg: string) {
    return this.noticeService.notice(msg);
  }
}

```

经过代码调试，确实看到依赖被自动注入到 `Container` 的 `Dependencies` 中。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240519185249.png)

目前，我们最基础的通用装饰器进行依赖注入已经完成了。

### 依赖解析

> 获取模块的依赖关系，并在该模块初始化之前，提供好这些依赖对象。

但这里有个问题，我们如何获取到对应的依赖模块呢。

这个时候，我们结合我们的例子看一看。

```tsx
import container from "./container";
import { Injectable } from "./injectable";

@Injectable()
class NoticeService {
  notice(msg: string) {
    console.log(`notice, ${msg}`);
  }
}

@Injectable()
class App {
  constructor(private noticeService: NoticeService) {}

  notice(msg: string) {
    return this.noticeService.notice(msg);
  }
}

```

看了下代码，只要我们将模块中

```tsx
import "reflect-metadata";

interface Dependency<T = any> {
  new (...args: any[]): T;
}

export class Container {
  private dependencies: Map<string, Dependency> = new Map();

  register<T>(key: string, dependency: Dependency<T>): void {
    this.dependencies.set(key, dependency);
  }

  resolve<T>(token: string): T {
    const target = this.dependencies.get(token);
    if (!target) {
      throw new Error(`Service not found: ${token}`);
    }

    // 获取目标类的依赖列表
    const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];
    const injections = dependencies.map((dep: any) => {
      // 假设依赖是用它们的类名注册的
      return this.resolve(dep.name);
    });

    return new target(...injections);
  }
}

const container = new Container();

export default container;
```

这个时候，我们来运行具体的例子。

```tsx
import container from "./container";
import { Injectable } from "./injectable";

@Injectable()
class NoticeService {
  notice(msg: string) {
    console.log(`notice, ${msg}`);
  }
}

@Injectable()
class App {
  constructor(private noticeService: NoticeService) {}

  notice(msg: string) {
    return this.noticeService.notice(msg);
  }
}

const appService = container.resolve<App>("App");
appService.notice("hello");
```

能看到，实际上已经能跑动了。我们也实现了基本的 mvp 版本。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240519185316.png)

### 创建实例

细心的朋友，可能会发现上方存在一个问题，我们上方会存在一个问题，就是多次 `resolve` 同一个依赖的时候，会创建多个实例。

举个例子

```tsx
const appService = container.resolve<App>("App");
const appService2 = container.resolve<App>("App");
console.log("appService === appService2", appService === appService2);
```

我们得到的结果，确实也验证了， `resolve` 过程中，生成了一个新的对象。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240519185331.png)


但实际情况中，我们通常希望依赖的模块是单例的，不同模块依赖的同一个模块希望保证是一个实例。

这个也比较好处理，我们在容器中用一个 `Map` 来存放好实例就好。

```diff
import "reflect-metadata";

interface Dependency<T = any> {
  new (...args: any[]): T;
}

export class Container {
  private dependencies: Map<string, Dependency> = new Map();
+  private instances: Map<string, any> = new Map();

  register<T>(key: string, dependency: Dependency<T>): void {
    this.dependencies.set(key, dependency);
  }

  resolve<T>(token: string): T {
    if (this.instances.has(token)) {
      return this.instances.get(token);
    }
    const target = this.dependencies.get(token);
    if (!target) {
      throw new Error(`Service not found: ${token}`);
    }

    // 获取目标类的依赖列表
    const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];
    const injections = dependencies.map((dep: any) => {
      // 假设依赖是用它们的类名注册的
      return this.resolve(dep.name);
    });

+    const instance = new target(...injections);

+    this.instances.set(token, instance);

-    return new target(...injections);
+    return instance;
  }
}

const container = new Container();

export default container;
```

这个时候看看效果，可以看到也保证了单个实例。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240519185342.png)

至此，一个比较简单的依赖注入容器的 `MVP` 版本就处理好了。

## 总结

最后，我们回顾一下本文我们的内容，无非是以下几点

- 依赖注入的概念以及作用
- 依赖注入容器的概念
- 通过依赖注册，依赖解析等实现了最小例子的依赖注入容器

希望根据这些内容，能够大概的了解，依赖注入容器的一点点知识点。

当然，这里还有一些深入进阶的功能可以实现，比如循环依赖处理、生命周期管理（单例、多例）、延迟加载的点，再进一步实现。

本文也是一个抛砖引玉的作用，读者也可以自己探索探索。毕竟，**理解一个事物的一个办法是实现它**。
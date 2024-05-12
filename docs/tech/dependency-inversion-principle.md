---
title: 聊聊依赖反转原则
customTag: tech>工程设计
editLink: true
date: 2024.05.12
---

# 聊聊依赖反转原则

## 前言

**依赖反转原则（Dependency inversion principle，DIP），是**五个基本原则（SOLID）中其中的一个

主要是对依赖关系的一个控制，主要规定：

1. 高层次的模块不应该依赖于低层次的模块，两者都应该依赖于[抽象接口](<https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E5%8C%96_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)>)。
2. 抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240512193905.png)

但其实，我一直感觉上方的描述比较抽象，可能是有些概念我理解的不到位，或者是我的实践比较少，总感觉有点绕。而本次作者带着学习的态度，一步步来看如何更好地进行理解。

## 什么是依赖

首先，我想先确认是，什么是**依赖**。如果是一名前端工程师，大概率会直接想到 node_modules，毕竟我们一直把他叫做依赖。

实际上，node_modules 也确实是依赖，但只是依赖中的一种，准确来讲应该叫做**前端代码库的第三方依赖**。

但在我们研发流程中，依赖其实不仅仅是这个，可以做下方的梳理

- **人力依赖**：一个项目可能依赖于特定的开发人员或团队来完成开发、维护和支持工作。
- **资源依赖**：项目可能依赖于外部资源，如服务器、数据库、API、云服务等。
- **接口依赖**：项目开发中，前端可能依赖后端的接口，项目才能正常运行
- **代码依赖**：项目中不同部分之间的依赖关系。例如，一个大型前端应用可能会有多个模块或组件，它们之间可能存在依赖关系，其中一些模块可能依赖于其他模块的功能或数据。如 node_modules, 公共工具，基础工具等
- 等等

总的来说，依赖抽象来说：**“依赖”是指项目中需要的外部资源、工具或人员，以实现项目的完成、运行或特定功能。**

在工作过程中，我也深刻地意识到，梳理各种依赖关系是我们完成项目的重要因素，梳理清楚了可以大大提升项目过程中的效率。

同样的，具体到软件领域中，梳理好依赖关系具体可以是两点，**“尽量减少模块间的依赖，并且保证依赖关系清晰”**。

并且，理论上合理的依赖关系应该是单向依赖，应该是一个**有向无环图**。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240512193931.png)

## 再看依赖反转

理清楚依赖关系后，我们来看看依赖反转吧。

之前说了依赖反转有两个特点，我们来细化下

1. **高层模块不应该依赖于低层模块：** 在传统的软件设计中，通常会有高层模块依赖于低层模块的情况，例如，业务逻辑层依赖于数据访问层。这种依赖关系导致了高层模块对低层模块的细节实现的直接依赖，增加了模块之间的耦合度，使得系统难以理解和维护。
2. **抽象不应该依赖于具体实现：** 依赖反转原则要求抽象不应该依赖于具体实现，而是具体实现应该依赖于抽象。具体来说，高层模块和低层模块都应该依赖于抽象，而不是具体实现。这样做的好处是可以降低模块之间的耦合度，使得系统更加灵活和可维护。

**依赖反转实际上是将将模块之间的依赖关系转换为对抽象的依赖关系（注意，并不是消除），从而降低模块之间的耦合度，提高系统的灵活性和可维护性。**

通过遵循依赖反转原则，可以实现以下几个好处：

- **降低耦合度：** 将模块之间的依赖关系转换为对抽象的依赖关系，使得模块之间的耦合度降低，从而使得系统更加灵活和可维护。
- **提高可测试性：** 依赖反转原则使得模块之间的依赖关系变得更加松散，从而使得系统更容易进行单元测试和集成测试。
- **促进代码重用：** 通过依赖反转原则，可以将具体实现与抽象解耦，使得抽象可以被多个具体实现所复用，从而提高了代码的重用性。

上方我们聊了什么是依赖反转和他所带来的优点，接着来看看一些具体实现吧，增加一些体感。

## 常用方法

依赖反转是一种设计原则，通常用于实现松耦合的软件架构，其中高层模块不直接依赖于低层模块，而是依赖于抽象。这样做可以提高代码的灵活性、可维护性和可扩展性。

常用的实现方法包括如下：

### **依赖注入（Dependency Injection）**

**思路：** 在依赖注入中，对象的依赖关系是通过外部传递而不是在对象内部创建的。通常通过构造函数、属性或者方法参数来注入依赖。

**示例：**

```jsx
// 依赖接口
interface Logger {
    log(message: string): void;
}

// 实现依赖接口的具体类
class ConsoleLogger implements Logger {
    log(message: string) {
        console.log(message);
    }
}

// 需要依赖的类
class Service {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    doSomething() {
        this.logger.log("Doing something...");
    }
}

// 使用依赖注入
const logger = new ConsoleLogger(); // 创建依赖对象
const service = new Service(logger); // 将依赖对象注入
service.doSomething(); // 调用方法

```

### **工厂模式（Factory Pattern）**

**思路：** 工厂模式通过一个工厂方法或者抽象工厂来创建对象，客户端通过工厂获取所需的对象，从而将客户端与具体对象的创建解耦。

**示例**：

```jsx
// 产品接口
interface Product {
  operation(): string;
}

// 具体产品类
class ConcreteProduct implements Product {
  operation() {
    return "ConcreteProduct";
  }
}

// 工厂接口
interface Factory {
  createProduct(): Product;
}

// 具体工厂类
class ConcreteFactory implements Factory {
  createProduct() {
    return new ConcreteProduct();
  }
}

// 使用工厂创建对象
const factory: Factory = new ConcreteFactory();
const product: Product = factory.createProduct();
console.log(product.operation()); // 输出 "ConcreteProduct"
```

### **模块化架构（Modular Architecture）**

**思路：** 将系统划分为独立的模块，每个模块都有清晰的接口和依赖关系。模块之间通过接口进行通信，从而实现松耦合。

```jsx
// 模块A
module ModuleA {
    export interface Service {
        execute(): void;
    }

    export class ServiceImpl implements Service {
        execute() {
            console.log("Executing ModuleA.ServiceImpl...");
        }
    }
}

// 模块B
module ModuleB {
    import Service = ModuleA.Service;

    export class Client {
        private service: Service;

        constructor(service: Service) {
            this.service = service;
        }

        useService() {
            this.service.execute();
        }
    }
}

// 创建并使用模块A中的服务
const service = new ModuleA.ServiceImpl();
const client = new ModuleB.Client(service);
client.useService(); // 输出 "Executing ModuleA.ServiceImpl..."

```

### **事件驱动架构（Event-Driven Architecture）**

**思路：** 通过事件和消息来解耦组件之间的依赖关系。组件之间通过发布-订阅模式进行通信，从而实现松耦合和高内聚。

**示例：**

```jsx
// 事件总线
class EventBus {
    private listeners: { [key: string]: Function[] } = {};

    subscribe(event: string, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    publish(event: string, data?: any) {
        const callbacks = this.listeners[event];
        if (callbacks) {
            callbacks.forEach(callback => callback(data));
        }
    }
}

// 创建事件总线实例
const eventBus = new EventBus();

// 订阅事件
eventBus.subscribe("someEvent", (data: any) => {
    console.log("Received someEvent with data:", data);
});

// 发布事件
eventBus.publish("someEvent", { message: "Hello, world!" }); // 输出 "Received someEvent with data: { message: 'Hello, world!' }"

```

## 总结

本文简单地介绍了 **依赖，依赖反转是什么，以及依赖反转的优点和常用方法。** 主要让读者对依赖和依赖反转有一个个认识，后续笔者将会具体结合 nest 框架聊聊依赖注入。但最终的目的，还是希望能够让读者意识到依赖的重要性，以及梳理依赖的益处。当然，这不仅仅限于代码层面，在项目执行过程，生活中，我们也可以留意并梳理我们的依赖。

## 参考

- [NestJS 依赖注入 DI 与控制反转 IOC](https://zhuanlan.zhihu.com/p/682628623)
- [聊聊 nestjs 中的依赖注入](https://zhuanlan.zhihu.com/p/462341598)
- [依赖反转原则](https://zh.wikipedia.org/wiki/%E4%BE%9D%E8%B5%96%E5%8F%8D%E8%BD%AC%E5%8E%9F%E5%88%99)

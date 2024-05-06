---
title: TypeScript 类型编程小技巧
customTag: tech>TypeScript
editLink: true
date: 2024.02.05
---

# TypeScript 类型编程小技巧

`TypeScript` 可以通过类型编程去灵活生成我们想要的类型。下面我们就来讲讲其中的一些小技巧吧。

## 三种类型系统

首先，我们先来讲讲类型系统。

### 简单类型系统

最基础的类型系统，保证了类型安全，但只有最基础的类型设置，类型灵活性比较低。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be505c186be5415ab9c28019436c272b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 支持泛型的类型系统

进阶一点的，其实就是我们支持泛型的类型系统，我们可以通过我们泛型系统和指定的参数去生成我们指定的类型，增加了类型的灵活性。

> 泛型提供了编译时类型安全检测机制，该机制允许开发在编译时检测到非法的类型。 泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67d060e9c18f458c966b720b31a4db87~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 支持类型编程的类型系统

支持对传入的类型参数做逻辑运算，并且能够产生新类型的类型系统，这种操作也就是字面意义的类型编程，这大大提高了类型系统的灵活性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3b3118b42084439aeaaa7bb719b57af~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 类型编程？类型体操？

`TypeScript`很明显就是支持类型编程的类型系统，类型编程提供了高度的灵活性。

`TypeScript`是图灵完备的，我们能够用 TS 所提供的语法以及基础工具，去进行条件判断，递归，类型推断等操作去，同时我们进行复杂的组合计算，获得新的类型，从而可以去实现`Pick`等内置泛型工具, `斐波那契数列`,`中国象棋`,`Lisp解释器`,`HypeScript`类型系统，这也被称为`类型体操`。

# 类型编程的小技巧

## 前置知识

在接触类型编程/体操，我们需要对`TypeScript`的基础有一定了解和熟悉，这能让我们更加好的理解。

### 条件类型

`extends`的写法，有点类似于三目运算符。

> 简单理解：如果`T`包含的类型 是 `U`包含的类型的 '子集'，那么取结果`X`，否则取结果`Y`

typescript

复制代码

`T extends U ? X : Y`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c993d30933bb49898a13f69a896fb8a2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### `infer`推断

`infer`, 能够推断出变量的类型，但是，只能在条件语句`extends`下进行使用。

typescript

复制代码

`type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`

### 元组操作

元祖我们可以理解为定长、定类型的数组。

typescript

复制代码

`type Tunple = [1, 'string', false];`

元组的核心在于`...`和`infer`的结合。

typescript

复制代码

`type concat<A extends any[], B extends any[]> = [...A, ...B]; type GetFirst<T extends any[]> =      T extends [infer First, ...infer any[]] ? First : never;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6addddd88d8240ec83d4460b16b989c1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 泛型工具

> `TypeScript`中,有内置一些泛型工具,提供我们做类型转换。

这里的话就不加多介绍了， 可以查阅 TS 的文档[Documentation - Utility Types](https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Futility-types.html "https://www.typescriptlang.org/docs/handbook/utility-types.html")。

| Partial              | Required    | Readonly   | Record<Keys, Type>    | Pick<Type, Keys> | Omit<Type, Keys> | Exclude<UnionType, ExcludedMembers> |
| -------------------- | ----------- | ---------- | --------------------- | ---------------- | ---------------- | ----------------------------------- |
| Extract<Type, Union> | NonNullable | Parameters | ConstructorParameters | ReturnType       | InstanceType     | ThisParameterType                   |
| OmitThisParameter    | ThisType    | Uppercase  | Lowercase             | Capitalize       | Uncapitalize     |                                     |

当然, `TypeScript`的基础当然不止这么多，还有`索引类型`,`as`等。

## 模式匹配

想象一个场景，如果我们想提取元组的最后一个元素的类型。

这个时候，其实我们可以借助`infer`这个工具来满足我们的需求。

### GetLast

实现一个类型，用于提取元组的最后一个元素类型。

typescript

复制代码

`type GetLast<T extends unknown[]> = T extends [...any[], infer Last] ? Last : never;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a077246fe294d899b642b5e3d9a65e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### GetFirst

实现一个类型，用于提取元组的第一个元素类型。

typescript

复制代码

`type GetFirst<Arr extends unknow[]> = Arr extends [infer First, ...unknown[]]   ? First   : never;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d9451fdff34438ebc9700f026e86a25~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### StartsWith

判断字符串是否以某个前缀开头。

typescript

复制代码

`` type StartsWith<     Str extends string,      Prefix extends string > = Prefix extends ''      ? true      : Str extends `${Prefix}${string}`      ? true      : false; ``

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18347e7df07e4e2ea02e196831c2a18c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### GetParameters

实现一个 Parameters 泛型工具。

typescript

复制代码

`type GetParameters<Func extends Function> = Func extends (   ...args: infer Parameters ) => any   ? Parameters   : never;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/597bd99be21c4308bc56f6bea26487f3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

模式匹配可以用在数组、字符串、函数等，实际上是我们去为类型构建对应的条件，从而利用`extends`和`infer`两个基础工具，去对我们产生的新类型进行构造，`伪代码`表示。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd749c2fe86a405481d9fb9ded9365e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 重新构造

注意，我们都知道 TS 中的类型不会像我们的变量那样支持重新赋值的，即我们用`type`,`infer`,`泛型参数`都是唯一确定的，无法修改的，这个时候我们要产生新的类型就要对类型去进行修改。

### AppendArgument

实现一个函数，对函数类型的，往函数类型里面添加新的类型参数。

typescript

复制代码

`type AppendArgument<Fun extends Function, Ele> =      Fun extends (...args: infer OriginArgs) => any ?         (...args: [Ele, ...OriginArgs]) => any : void;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7189c2c7962145b69b5a0b1e042b3478~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### ReplaceStr

我们实现字符串类型中的指定字符的替换。

typescript

复制代码

`` type ReplaceStr<   Str extends string,   From extends string,   To extends string > = Str extends `${infer Prefix}${From}${infer Suffix}`   ? `${Prefix}${To}${Suffix}`   : Str; ``

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b77ae13d26641a183cd0e2e84947451~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### ParitalByKeys

实现一个根据`Key`值过滤的 Parital。

typescript

复制代码

`type PartialByKeys<T, K = keyof T> = {   [P in keyof T as P extends K ? never : P]: T[P] } & {   [P in keyof T as P extends K ? P : never]?: T[P] } extends infer A   ? { [P in keyof A]: A[P] }   : never;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e5467ff98764e0ea4dfd64cc43a1d6b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

重新构造的点也在于，我们如何**提取**，以及如何**构造**， `伪代码`表示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e4ddf95a82e4286b8ef3b1b3f70ea79~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 递归操作

`TS`中是支持我们去做递归计算的，不过最好结合`extends`和`infer`。

> **递归的基本要素**
>
> 基线条件：确定递归到何时终止，函数不再调用自己，也称为递归出口； 递归条件：函数调用自己，将大问题分解为类似的小问题，也称为递归体。

### DeepAwaited

实现一个嵌套`Promise`的提取。

typescript

复制代码

`type DeepAwaited<T> = T extends Promise<infer R>    ? R extends Promise<infer P>    ? DeepAwaited<P>    : R   : T; type Test = DeepAwaited<Promise<Promise<Promise<Promise<Promise<number>>>>>>`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b45e1d9c5688430e8612f1f14ebc7bf4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### ReplaceAll

之前实现了`Reaplce`, 当时只支持了一次匹配替换，接下来，我们可以在原来的基础上加上递归操作。

typescript

复制代码

`` type ReplaceAll<   Str extends string,   From extends string,   To extends string > = Str extends `${infer Prefix}${From}${infer Suffix}`   ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`   : Str; ``

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e5d9fb3411b4699a4124199da65801b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### Reverse

实现一个类型，类似于`Array.reverse`

typescript

复制代码

`type Reverse<T extends any[]> = T extends [...(infer Rest), infer Last]   ? [Last, ...Reverse<Rest>]   : [];`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21f749d763c84f52ab3cdae5233fe52e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### BuildArr

实现一个类型，构建数组。

typescript

复制代码

`type BuildArr<   Length extends number,   Ele = unknown,   Arr extends unknown[] = [] > = Arr['length'] extends Length ? Arr : BuildArr<Length, Ele, [...Arr, Ele]>;`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef97ffa719b8440ca540e16007a36dba~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

递归操作注意**递归出口**+**递归体**， `伪代码`表示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf9102a8c42a4cc28767f744d6362be2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 类型计数

### LengthOfString

实现一个类型，可以统计传入的字符串字面量的长度。

typescript

复制代码

`` type LengthOfString<S extends string, Result extends string[] = []> =     S extends `${infer First}${infer Next}`       ? LengthOfString<Next, [...Result, First]>       : Result['length']; ``

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/925e57de53654f1abed486bba23d586a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### Add

实现一个类型加法。

typescript

复制代码

`type Add<num1 extends number, num2 extends number> = [   ...BuildArr<num1>,   ...BuildArr<num2>, ]['length'];`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f17c6a90da474e72a9e468d1db110a7e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

数值一般是对数组进行操作，并提取他的`length`属性, `伪代码`表示。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d41597c108fd482fa1db47c430596228~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

# 类型编程的意义

- 技术上类型理解

- 业务开发中的规范

- 类型编程？类型体操？

**类型编程能帮助你更好地理解复杂类型编程的底层原理，同时类型编程可以通过类型运算产出更准确的类型，也能够让你获得独立解决各种类型问题的能力。**

# 扩展

**Lisp 解释器：** [TypeScript 类型体操天花板，用类型运算写一个 Lisp 解释器 - 掘金](https://juejin.cn/post/7024673107906396190 "https://juejin.cn/post/7024673107906396190")

**中国象棋**：[用 TypeScript 类型运算实现一个中国象棋程序](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F426966480 "https://zhuanlan.zhihu.com/p/426966480")

**井字棋：** [TS 实现简易的井字棋 - 掘金](https://juejin.cn/post/7128621293011730469 "https://juejin.cn/post/7128621293011730469")

**HypeScript**: [GitHub - ronami/HypeScript: 🐬 A simplified implementation of TypeScript's type system written in Typ](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fronami%2FHypeScript "https://github.com/ronami/HypeScript")

# 参考资料

- [类型系统-wiki](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fzh-cn%2F%25E9%25A1%259E%25E5%259E%258B%25E7%25B3%25BB%25E7%25B5%25B1%23%25E5%259E%258B%25E5%2588%25A5%25E7%259A%2584%25E5%259E%258B%25E5%2588%25A5 "https://zh.wikipedia.org/zh-cn/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1#%E5%9E%8B%E5%88%A5%E7%9A%84%E5%9E%8B%E5%88%A5")

- [type-challenges](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftype-challenges%2Ftype-challenges "https://github.com/type-challenges/type-challenges")

- [TypeScript 全面进阶指南](https://juejin.cn/book/7047524421182947366 "https://juejin.cn/book/7047524421182947366")

- [TypeScript 类型体操通关秘籍](https://juejin.cn/book/7086408430491172901 "https://juejin.cn/book/7086408430491172901")

- [TypeScript 类型元编程入门指南 - 掘金](https://juejin.cn/post/7025619077158666270 "https://juejin.cn/post/7025619077158666270")

- [The starting point for learning TypeScript](https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2F "https://www.typescriptlang.org/docs/")

- [用 TypeScript 类型运算实现一个中国象棋程序](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F426966480 "https://zhuanlan.zhihu.com/p/426966480")

- [TypeScript 类型体操天花板，用类型运算写一个 Lisp 解释器 - 掘金](https://juejin.cn/post/7024673107906396190 "https://juejin.cn/post/7024673107906396190")

- [一文理解静态语言、动态语言、解释型语言、编译型语言、强类型语言、弱类型语言 - 掘金](https://juejin.cn/post/6844903901066428423 "https://juejin.cn/post/6844903901066428423")

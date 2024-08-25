---
title: Tapable： a little module for plugin
customTag: tech>Frontend Engineer
editLink: true
date: 2024.05.19
---

# Tapable: a little module for plugin

熟悉 webpack 的同学都知道, `webpack` 提供了插件系统，从而丰富了 webpack 的能力。而这个插件系统，就是基于 Tapable 的去做的。

## 介绍

Tapable 本质上提供了很多生命周期钩子，方便我们去进行事件注册，比哦那个在不同的时机进行触发。

webpack 中的 plugin 正式基于这个机制所以可以在不同的编译阶段调用不同的插件从而影响编译结果。

```tsx
const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");

```

使用例子

```tsx
const hook = new SyncHook(["arg1"]);

// 注册事件
hook.tap('flag1', (arg1,arg2,arg3) => {
  console.log('flag1:',arg1,arg2,arg3)
})

hook.tap('flag2', (arg1,arg2,arg3) => {
  console.log('flag2:',arg1,arg2,arg3)
})

// 调用事件并传递执行参数
hook.call('华铧',)
```

## Hook

### 同步/异步分类

Hook 我们作为分类，可以分为同步和异步

- 同步：同步表示注册的事件函数会同步进行执行，所以这里是不会去等待异步方法的。
- 异步：异步表示注册的事件函数会异步进行执行，可以进行异步方法的等待。

![image.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F81c4f4c6-d195-4005-94f8-1a64f864a131%2Fbf8a58a7-96ce-49d3-a205-e77fbfd0dd7d%2Fimage.png?table=block&id=1fa844cc-565d-4dd4-bf55-b5df0c04e35c&spaceId=81c4f4c6-d195-4005-94f8-1a64f864a131&width=1770&userId=dfca4a9e-48e7-4d69-9e46-ff52416f9855&cache=v2)


### **按执行机制分类**

![image.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F81c4f4c6-d195-4005-94f8-1a64f864a131%2F38972826-a2f6-416c-bb00-dfea3c7fa8e5%2Fimage.png?table=block&id=15aa0ad9-0069-4f56-a9f6-832912f5fd07&spaceId=81c4f4c6-d195-4005-94f8-1a64f864a131&width=1770&userId=dfca4a9e-48e7-4d69-9e46-ff52416f9855&cache=v2)

- Basic Hook： 基本类型的钩子，它仅仅执行钩子注册的事件，并不关心每个被调用的事件函数返回值如何。
    
    ![image.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F81c4f4c6-d195-4005-94f8-1a64f864a131%2F5fdb50e7-3544-4516-9bad-8eda6eee4922%2Fimage.png?table=block&id=94445d58-4ddb-46b7-925b-0549dbccd267&spaceId=81c4f4c6-d195-4005-94f8-1a64f864a131&width=1770&userId=dfca4a9e-48e7-4d69-9e46-ff52416f9855&cache=v2)
    
- Bail Hook: 保险类型狗子，一句话，如果执行某个函数，他返回了 不为 undefined 的值，则不会再继续执行。
    
    ![image.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F81c4f4c6-d195-4005-94f8-1a64f864a131%2F8e3f9a37-621d-4f5e-99a1-ce04ed3f853d%2Fimage.png?table=block&id=e8405eb4-0a71-4115-8109-c6993b7c2618&spaceId=81c4f4c6-d195-4005-94f8-1a64f864a131&width=1770&userId=dfca4a9e-48e7-4d69-9e46-ff52416f9855&cache=v2)
    
- Waterfall Hook: 瀑布流钩子，如果前一个事件函数的结果是 `result !== undefiend`, 则 result 会作为后一个事件函数的第一个参数。
    
    ![image.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F81c4f4c6-d195-4005-94f8-1a64f864a131%2F959f1c99-8a42-41a8-a94e-dbbfb6c41d7a%2Fimage.png?table=block&id=a3e1da33-0fc6-41b4-9042-a41b77d884e6&spaceId=81c4f4c6-d195-4005-94f8-1a64f864a131&width=1770&userId=dfca4a9e-48e7-4d69-9e46-ff52416f9855&cache=v2)
    
- Loop Hook: 循环类型的钩子，当钩子的返回值不为 undefined 时，会不停的循环事件，直到所有函数结果都为 `undefined` 。
    
    ![image.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F81c4f4c6-d195-4005-94f8-1a64f864a131%2Fa1f648a2-d185-4da4-8da8-4d3222bcaf5a%2Fimage.png?table=block&id=987c9c7a-9338-4c28-8e11-2443d4936245&spaceId=81c4f4c6-d195-4005-94f8-1a64f864a131&width=1770&userId=dfca4a9e-48e7-4d69-9e46-ff52416f9855&cache=v2)
    

## 具体 Hook

### SyncHook

`SyncHook` 是最基础的同步钩子

- 分析：同步串行的钩子，先注册的事件，先执行，tap 中是同步调用，不会做等待。
- 使用方式：

```tsx
import { SyncHook } from "tapable";

const hook = new SyncHook(["arg1"]);

hook.tap("event1", (...args) => {
  console.log("event1", ...args);
});

hook.tap("event2", (...args) => {
  console.log("event2", ...args);
});

hook.call("hua hua");
```

结果如下

```jsx
event1 hua hua
event2 hua hua
```

### SyncBailHook

`SyncBailHook` 是一个同步的，保险类型的 `hook`, 意思是只有要其中一个返回了，后面的就不执行了。

```jsx
import { SyncBailHook } from "tapable";

const hook = new SyncBailHook(["arg1"]);

hook.tap("event1", (...args) => {
  console.log("event1", ...args);
});

hook.tap("event2", (...args) => {
  console.log("event2", ...args);
  return 123;
});

hook.tap("event3", (...args) => {
  console.log("event3", ...args);  // 不会执行，因为前面的已经调用过了
});

hook.call("hua hua");

```

结果如下

```jsx
event1 hua hua
event2 hua hua
```

### SyncWaterfallHook

`SyncWaterfallHook` 是一个同步的，瀑布式类型的 `hook` 。瀑布类型的钩子的函数可以有对应的返回值，当返回值不为 `undefined` 的时候，则可以改变第一个传递的参数。

```jsx
import { SyncWaterfallHook } from "tapable";

const hook = new SyncWaterfallHook(["author", "age"] as any) as any;

hook.tap("event1", (author: any, age: any) => {
  console.log("event1", author, age);
});

hook.tap("event2", (author: any, age: any) => {
  console.log("event2", author, age);

  return "华铧";
});

hook.tap("event3", (author: any, age: any) => {
  console.log("event3", author, age);
});

hook.call("hua hua", 18);
```

结果

```jsx
event1 hua hua 18
event2 hua hua 18
event3 华铧 18
```

### SyncLoopHook

`SyncLoopHook` 是一个同步，循环类型的 `hook` 。

循环之：不停的循环执行事件函数，直到所有函数结果 `result === undefined`，不符合条件就调头重新开始执行。

这也就意味着，如果有一个函数存在返回值，会从第一个事件开始。

```jsx
import { SyncLoopHook } from "tapable";

const hook = new SyncLoopHook(["arg1"]);

let count1 = 0;
let count2 = 0;

hook.tap("event1", (...args) => {
  console.log("event1", ...args);
  if (count1 !== 3) {
    return count1++;
  }
});

hook.tap("event2", (...args) => {
  console.log("event2", ...args);
  if (count2 !== 3) {
    return count2++;
  }
});

hook.tap("event3", (...args) => {
  console.log("event3", ...args);
});

hook.tap("event4", (...args) => {
  console.log("event4", ...args);
});

hook.call("hua hua");
```

结果

```jsx
event1 hua hua
event1 hua hua
event1 hua hua
event1 hua hua
event2 hua hua
event1 hua hua
event2 hua hua
event1 hua hua
event2 hua hua
event1 hua hua
event2 hua hua
event3 hua hua
event4 hua hua
```

### AsyncSeriesHook

`AsyncSerieslHook` 异步串行钩子

- 使用场景: 异步串行执行，必须等待前一个事件处理函数完成后再执行下一个。

```jsx
import { AsyncSeriesHook } from "tapable";

const hook = new AsyncSeriesHook(["arg1"]);

hook.tapAsync("event1", (arg1, callback) => {
  setTimeout(() => {
    console.log("plugin1", arg1);
    callback();
  }, 1000);
});

hook.tapAsync("event2", (arg1, callback) => {
  console.log("plugin2", arg1);
  callback();
});

hook.callAsync("value1", () => {
  console.log("All done");
});
```

结果

```jsx
plugin1 value1
plugin2 value1
All done
```

### Async**SeriesBailHook**

异步串行执行，如果任意一个处理函数返回非 `undefined` 或触发错误，将中断后续执行。

```jsx
import { AsyncSeriesBailHook } from "tapable";

const hook = new AsyncSeriesBailHook(["arg1"]);

hook.tapAsync("event1", (arg1, callback) => {
  setTimeout(() => {
    console.log("plugin1", arg1);
    callback(null, "stop");
  }, 1000);
});

hook.tapAsync("event2", (arg1, callback) => {
  console.log("plugin2", arg1);
  callback();
});

hook.callAsync("value1", () => {
  console.log("All done");
});

```

结果

```jsx
plugin1 value1
All done
```

### Async**SeriesWaterfallHook**

`AsyncSeriesWaterfallHook` 是一个异步串行、瀑布类型的 `Hook` .

如果前一个事件函数的结果是 `result !== undefined` , 则 `result` 则会作为后面的第一个事件函数。

```jsx
import { AsyncSeriesWaterfallHook } from "tapable";

const hook = new AsyncSeriesWaterfallHook(["arg1"]);
hook.tapAsync("plugin1", (arg1, callback) => {
  setTimeout(() => {
    callback(null, arg1 + " from plugin1");
  }, 1000);
});
hook.tapAsync("plugin2", (arg1, callback) => {
  callback(null, arg1 + " from plugin2");
});
hook.callAsync("start", (err, result) => {
  console.log(result); // 输出: "start from plugin1 from plugin2"
});

```

结果

```jsx
start from plugin1 from plugin2
```

### **AsyncParallelHook**

`AsyncParallelHook` 是一个异步并行的 `hook`

- 使用场景: 异步并行执行，注册函数在同一时间段同时调用。

```tsx
import { AsyncParallelHook } from 'tapable';

const hook = new AsyncParallelHook(['arg1']);
console.time('AsyncParallelHook');

hook.tapPromise('event1', (...args: any[]): any => {
  console.log('event1', args);
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('测试');
    }, 2000);
  })
});

hook.tapPromise('event2', (...arg: any[]): any => {
  console.log('event2', arg);
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('测试1');
    }, 2000);
  })
});

hook.callAsync('test', (err, res) => {
  console.log('callAsync', res);
  console.timeEnd('AsyncParallelHook');
})
```

### **AsyncParallelBailHook**

`AsyncParallelBailHook` 是一个异步并行、保险类型的 `Hook` ，只有其中一个有返回值或错误，则会相当于执行完成。

```tsx
import { AsyncParallelBailHook } from 'tapable';
const hook = new AsyncParallelBailHook(['arg1']);

console.time('AsyncParallelBailHook');

hook.tapPromise('plugin1', () => {
  console.log('plugin1');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('plugin1');
    }, 1000);
  })
});

hook.tapPromise('plugin2', () => {
  console.log('plugin2');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('plugin2');
    }, 2000);
  })
});

hook.callAsync('测试', (err, res) => {
  console.log('res');
  console.timeEnd('AsyncParallelBailHook');
})

```

结果

```tsx
plugin1
plugin2
res
AsyncParallelBailHook: 1.004s
```

## 基类派生

Tapable 中有一个基础的类，称为 Hook。基于这个 Hook 类，派生不同的 Hook， 如 `SyncHook`, `SyncBailHook` ，举个例子。

SyncHook

```jsx
/*
	MIT License <http://www.opensource.org/licenses/mit-license.php>
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class SyncHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncHook");
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function SyncHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = SyncHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncHook.prototype = null;

module.exports = SyncHook;
```

SyncBailHook

```jsx
/*
	MIT License <http://www.opensource.org/licenses/mit-license.php>
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class SyncBailHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, resultReturns, onDone, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onResult: (i, result, next) =>
				`if(${result} !== undefined) {\\n${onResult(
					result
				)};\\n} else {\\n${next()}}\\n`,
			resultReturns,
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncBailHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncBailHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncBailHook");
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

function SyncBailHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = SyncBailHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncBailHook.prototype = null;

module.exports = SyncBailHook;

```

可以看到外部只需要根据 hook，修改特定的 `content` , `compile` 方法，即可以进行基类的派生。

我们主要关注的是 `tap`, `call` 等方法的调用。

### Tap

`hook.tap` → `hook._tap` → `hook._insert`

tap 本质还比较简单，主要做下事件注册。

```jsx
class Hook {
  tap(options, fn) {
		this._tap("sync", options, fn);
	}
	
	_tap(type, options, fn) {
		this._insert(options);
	}
	
	_insert(item) {
		this._resetCompilation();
		let i = this.taps.length;
		// 本质上只做排序
		while (i > 0) {
			i--;
			const x = this.taps[i];
			this.taps[i + 1] = x;
			const xStage = x.stage || 0;
			if (before) {
				if (before.has(x.name)) {
					before.delete(x.name);
					continue;
				}
				if (before.size > 0) {
					continue;
				}
			}
			if (xStage > stage) {
				continue;
			}
			i++;
			break;
		}
		this.taps[i] = item;
	}
}
```

### Call

后面主要关心 hook.call， 我们可以看到调用的堆栈

`hook.call` → `CALL_DELEGATE` → `this.call = this._createCall("sync")` → `compile` → `HookCodeFactory.content` → `this.call(...args)`

```jsx
class Hook {
  call: CALL_DELEGATE;
  
  _createCall(type) {
		return this.compile({
			taps: this.taps,
			interceptors: this.interceptors,
			args: this._args,
			type: type
		});
	}
}

const CALL_DELEGATE = function(...args) {
	this.call = this._createCall("sync");
	return this.call(...args);
};

const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

class HookCodeFactory {
  create(options) {
		this.init(options);
		let fn;
		switch (this.options.type) {
			case "sync":
				fn = new Function(
					this.args(),
					'"use strict";\\n' +
						this.header() +
						this.contentWithInterceptors({
							onError: err => `throw ${err};\\n`,
							onResult: result => `return ${result};\\n`,
							resultReturns: true,
							onDone: () => "",
							rethrowIfPossible: true
						})
				);
				break;
			case "async":
				fn = new Function(
					this.args({
						after: "_callback"
					}),
					'"use strict";\\n' +
						this.header() +
						this.contentWithInterceptors({
							onError: err => `_callback(${err});\\n`,
							onResult: result => `_callback(null, ${result});\\n`,
							onDone: () => "_callback();\\n"
						})
				);
				break;
			case "promise":
				let errorHelperUsed = false;
				const content = this.contentWithInterceptors({
					onError: err => {
						errorHelperUsed = true;
						return `_error(${err});\\n`;
					},
					onResult: result => `_resolve(${result});\\n`,
					onDone: () => "_resolve();\\n"
				});
				let code = "";
				code += '"use strict";\\n';
				code += this.header();
				code += "return new Promise((function(_resolve, _reject) {\\n";
				if (errorHelperUsed) {
					code += "var _sync = true;\\n";
					code += "function _error(_err) {\\n";
					code += "if(_sync)\\n";
					code +=
						"_resolve(Promise.resolve().then((function() { throw _err; })));\\n";
					code += "else\\n";
					code += "_reject(_err);\\n";
					code += "};\\n";
				}
				code += content;
				if (errorHelperUsed) {
					code += "_sync = false;\\n";
				}
				code += "}));\\n";
				fn = new Function(this.args(), code);
				break;
		}
		this.deinit();
		return fn;
	}
	
	contentWithInterceptors(options) {
	  return this.content(options);
	}
}
```

可以看到， tapable 的 不同Hook 基本都是由一个基础的 Hook 来基于派生的，通过 `COMPILE` ，最后改写 `content` 方法的过程。

## 手写一个 Tapable

<aside> 💡 这里我们会自己实现一个 Tapable，最终的源码可能和 Tapable 的差别有点大，但是效果事类似的。

</aside>

知其然，知其所以然。我们做动手来实现一个吧。

我们上方看到的 Tapable 核心主要做了两件事。

- **事件订阅**：一切都是事件订阅。
- **Hook 派生**：基于基础 Hook 类，进行派生，做同步/异步，waterfall， bail, Loop 等 Hook 的派生。

所以，我们做好基础类的 Hook 的抽象，就已经成功很多了。

### 基类 Hook

我们可以抽象出一个基类 `hook` , 本质上是一个抽象类，需要派生的 `hook` 去具体实现两个方法即可。

- _call: `(...args: T)=> any`
- _callAsync: `(...args: T): promise<any>`

```tsx
import { Tap, TapCallback } from "./typings";

export abstract class Hook<T extends any[] = any[]> {
  protected taps: Array<Tap<T>> = [];

  constructor(args: T) {}

  tap(name: string, callback: TapCallback<T>) {
    const tap: Tap<T> = {
      name,
      fn: callback,
      callback: (...args) => {
        return callback(...args);
      },
    };
    this.taps.push(tap);
  }

  call(...args: T) {
    return this._call(...args);
  }
  abstract _call(...args: T): any;

  callAsync(...args: T): Promise<any> {
    return this._callAsync(...args);
  }
  abstract _callAsync(...args: T): Promise<any>;
}

export default Hook;
```

### SyncHook 示范

**具体实现代码**

```tsx
import Hook from "./hook";

export class SyncHook<T extends any[] = any[]> extends Hook<T> {
  _call(...args: T): void {
    this.taps.forEach((tap) => {
      tap.callback(...args);
    });
  }

  _callAsync(...args: T): Promise<void> {
    throw new Error("SyncHook.callAsync is not implemented");
  }
}

export default SyncHook;
```

**测试代码**

```tsx
import { SyncHook } from "../../src/index";

const hook = new SyncHook(["arg1"]);

hook.tap("event1", (...args) => {
  console.log("event1", ...args);
});

hook.tap("event2", (...args) => {
  console.log("event2", ...args);
});

hook.call("hua hua");

```

其他 `Hook` 也是同样去进行继承，派生即可了。可以参考 [https://github.com/hua-bang/awesome-mvp/tree/master/packages/tapable/src](https://github.com/hua-bang/awesome-mvp/tree/master/packages/tapable/src)

### Intercept 拦截器

`Tapable` 的拦截器也是一个重要的功能，支持你在不同的时刻，注册不同的函数，从而在对应的时机进行触发。

举个例子

```tsx
const { SyncHook } = require('tapable');

// 创建一个同步钩子
const hook = new SyncHook(['arg1', 'arg2']);

// 添加拦截器
hook.intercept({
  // 在注册新的插件时调用
  register: (tapInfo) => {
    console.log('New plugin registered:', tapInfo.name);
    return tapInfo; // 可以返回一个修改过的 tapInfo
  },
  
  // 在调用钩子之前调用
  call: (arg1, arg2) => {
    console.log('Before calling the hook', arg1, arg2);
  },
  
  // 在每个插件函数调用之前调用
  tap: (tap) => {
    console.log('Before calling a plugin', tap.name);
  },
});

// 注册插件
hook.tap('PluginA', (arg1, arg2) => {
  console.log('PluginA:', arg1, arg2);
});

hook.tap('PluginB', (arg1, arg2) => {
  console.log('PluginB:', arg1, arg2);
});

// 调用钩子
hook.call('Hello', 'World');
```

我们也稍微实现一下吧。

由于这里，拦截器应该是基类就具备的功能，所以我们在基类的 `Hook` 中直接进行集成吧。

`Intercept.ts`

```tsx
import { InterceptHook } from "./typings";

export class Intercept {
  hooks: Record<InterceptHook, Array<(...args: any[]) => any>> = {
    register: [],
    call: [],
    callAsync: [],
    tap: [],
  };

  register(hook: InterceptHook, callback: (...args: any[]) => any) {
    this.hooks[hook].push(callback);
  }

  emit(hook: InterceptHook, ...args: any[]) {
    this.hooks[hook].forEach((callback) => {
      callback(...args);
    });
  }
}

export default Intercept;

```

`基类 Hook`

```tsx
import Intercept from "./intercept";
import { Tap, TapCallback } from "./typings";
import { InterceptHook, InterceptOptions } from "./typings/intercept";

export abstract class Hook<T extends any[] = any[]> {
  protected taps: Array<Tap<T>> = [];
  protected interceptInstance: Intercept = new Intercept();

  constructor(args: T) {}

  tap(name: string, callback: TapCallback<T>) {
    const tap: Tap<T> = {
      name,
      fn: callback,
      callback: (...args) => {
        this.interceptInstance.emit("tap", ...args);
        return callback(...args);
      },
    };
    this.interceptInstance.emit("register", tap);
    this.taps.push(tap);
  }

  intercept(options: InterceptOptions) {
    if (!options) {
      return;
    }

    Object.keys(options).forEach((key) => {
      this.interceptInstance.register(
        key as InterceptHook,
        options[key as InterceptHook] as (...args: any[]) => any
      );
    });
  }

  call(...args: T) {
    this.interceptInstance.emit("call", ...args);
    return this._call(...args);
  }

  abstract _call(...args: T): any;

  callAsync(...args: T): Promise<any> {
    this.interceptInstance.emit("callAsync", ...args);
    return this._callAsync(...args);
  }
  abstract _callAsync(...args: T): Promise<any>;
}

export default Hook;
```

测试例子

```tsx
import { AsyncParallelHook } from "../../src";

const hook = new AsyncParallelHook(["arg1"]);
console.time("async parallel hook");

hook.intercept({
  register: (tap) => {
    console.log("register", tap);
  },
  call: (tap) => {
    console.log("call", tap);
  },
  callAsync: (tap) => {
    console.log("callAsync", tap);
  },
  tap: (tap) => {
    console.log("tap", tap);
  },
});

hook.tap("event1", (arg1) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
});

hook.tap("event2", (arg1) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
});

hook.callAsync("value1").then((res) => {
  console.timeEnd("async parallel hook");
});
```

于是 `Tapable` 的 `Intercept` 我们也实现了。

## 总结

本文简单介绍了 `Tapable` ，以及我们动手实现了个 `mini-tapable` 。

旨在让读者了解 `Tapable` 这个库， 毕竟这个库其中有很多思想，同步/异步，串行/并行，拦截器， `bail`/ `waterfall` / `loop` 等执行类型钩子。

正是这些思想的叠加关联，它也成为了一些 `bundler` 的 底层依赖，从而去实现插件系统，也正如它仓库的那句话 `Just a little module for plugins` 。
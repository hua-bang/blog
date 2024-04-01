---
title: 页面首次渲染 & 组件更新
customTag: react>React 源码解析
editLink: true
---

## 页面首次渲染 & 组件更新

<aside>
💡 render 流程：
1. 获取 current fiber & lane
2. 创建一个 update: const update = createUpdate(eventTime, lane)
3. update 入队列：enqueueConcurrentClassUpdate(fiber, sharedQueue, update, lane)
4. 调度 update: scheduleUpdateOnFiber(root, current, lane);
5. 处理非紧急更新的 transitions: entangleTransitions(root, current, lane)

</aside>

**整体流程**

```tsx
const root = createRoot(document.querySelector("#root"));

// render
root.render(jsx);
```

### **createRoot**

本质就是新建了一个 `ReactDOMRoot` 对象，然后进行属性挂载。

```tsx
export function createRoot(
  container: Element | Document | DocumentFragment,
  options?: CreateRootOptions
) {
  // 前置操作
  return new ReactDOMRoot(root);
}

function ReactDOMRoot(internalRoot: FiberRoot) {
  this._internalRoot = internalRoot;
}
```

### **root.render**

1. **调用协调器的 updateContainer**

```tsx
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
  function (children: ReactNodeList): void {
    updateContainer(children, root, null, null);
  };
```

1. **updateContainer**

   获取 eventTime， lane 新建 update 对象，并放进队列

```tsx
export function updateContainer(
  element: ReactNodeList,
  container: OpaqueRoot,
  parentComponent: ?React$Component<any, any>,
  callback: ?Function
): Lane {
  const current = container.current;
  const eventTime = requestEventTime();
  const lane = requestUpdateLane(current);

  const update = createUpdate(eventTime, lane);

  const root = enqueueUpdate(current, update, lane);

  if (root !== null) {
    scheduleUpdateOnFiber(root, current, lane, eventTime);
    entangleTransitions(root, current, lane);
  }

  return lane;
}
```

1. **enqueueUpdate**

   通过 `CreateUpdate` 新建 `Update` 的变量。

   ```tsx
   export function createUpdate(eventTime: number, lane: Lane): Update<mixed> {
     const update: Update<mixed> = {
       eventTime,
       lane,

       tag: UpdateState,
       payload: null,
       callback: null,

       next: null,
     };

     return update;
   }
   ```

   将 update 放在全局 concurrentQueues 中, 并调用 getRootForUpdateFiber

   ```tsx
   export function enqueueUpdate<State>(
     fiber: Fiber,
     update: Update<State>,
     lane: Lane,
   ): FiberRoot | null {
     const updateQueue = fiber.updateQueue;
     if (updateQueue === null) {
       // Only occurs if the fiber has been unmounted.
       return null;
     }

     const sharedQueue: SharedQueue<State> = (updateQueue: any).shared;

     if (isUnsafeClassRenderPhaseUpdate(fiber)) {
       // code
     } else {
       return enqueueConcurrentClassUpdate(fiber, sharedQueue, update, lane);
     }
   }

   export function enqueueConcurrentClassUpdate<State>(
     fiber: Fiber,
     queue: ClassQueue<State>,
     update: ClassUpdate<State>,
     lane: Lane,
   ): FiberRoot | null {
     const concurrentQueue: ConcurrentQueue = (queue: any);
     const concurrentUpdate: ConcurrentUpdate = (update: any);
     enqueueUpdate(fiber, concurrentQueue, concurrentUpdate, lane);
     return getRootForUpdatedFiber(fiber);
   }

   export function enqueueConcurrentRenderForLane(
     fiber: Fiber,
     lane: Lane,
   ): FiberRoot | null {
     enqueueUpdate(fiber, null, null, lane);
     return getRootForUpdatedFiber(fiber);
   }

   function getRootForUpdatedFiber(sourceFiber: Fiber): FiberRoot | null {

     // When a setState happens, we must ensure the root is scheduled. Because
     // update queues do not have a backpointer to the root, the only way to do
     // this currently is to walk up the return path. This used to not be a big
     // deal because we would have to walk up the return path to set
     // the `childLanes`, anyway, but now those two traversals happen at
     // different times.
     // TODO: Consider adding a `root` backpointer on the update queue.
     detectUpdateOnUnmountedFiber(sourceFiber, sourceFiber);
     let node = sourceFiber;
     let parent = node.return;
     while (parent !== null) {
       detectUpdateOnUnmountedFiber(sourceFiber, node);
       node = parent;
       parent = node.return;
     }
     return node.tag === HostRoot ? (node.stateNode: FiberRoot) : null;
   }
   ```

2. **scheduleUpdateOnFiber 调度处理**

   ```tsx
   export function scheduleUpdateOnFiber(
     root: FiberRoot,
     fiber: Fiber,
     lane: Lane,
     eventTime: number
   ) {
     // Mark that the root has a pending update.
     markRootUpdated(root, lane, eventTime);

     if (
       (executionContext & RenderContext) !== NoLanes &&
       root === workInProgressRoot
     ) {
       // code
     } else {
       // This is a normal update, scheduled from outside the render phase. For
       if (root === workInProgressRoot) {
         // code
       }

       ensureRootIsScheduled(root, eventTime);
       if (
         lane === SyncLane &&
         executionContext === NoContext &&
         (fiber.mode & ConcurrentMode) === NoMode &&
         // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
         !(__DEV__ && ReactCurrentActQueue.isBatchingLegacy)
       ) {
         // code
       }
     }
   }
   ```

   ```tsx
   // 调用 performConcurrentWorkOnRoot
   ```

3. **entangleTransitions 非紧急更新**

   暂时不看哈

## 组件更新

### 主动更新

这里指手动创建 update, 如使用 `root.render` 、 `setState` 、 `forceUpdate` 的情况

- `root.render` 流程同初次渲染
- 类组件的 `setState`: 流程如上
- `forceUpdate`: 流程如上
- `函数的 setState`: 流程化同 1,2,3,4 点，只是第 5 点变成了 `entangleTransitionUpdate(root, queue, lane)`

### 被动更新

这里指 props 或 context value 的改变。

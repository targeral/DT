function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // Instance
  this.tag = tag; // 标记fiber类型tag.
  this.key = key;
  this.elementType = null;
  this.type = null; // fiber对应的function/class/module类型组件名.
  this.stateNode = null; // fiber所在组件树的根组件FiberRoot对象

  // Fiber
  // 处理完当前fiber后返回的fiber
  this.return = null; // 返回当前fiber所在fiber树的父级fiber实例
  this.child = null; // fiber树结构相关链接
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps; // 当前处理过程中的组件props对象
  this.memoizedProps = null; // 缓存的之前组件props对象
  this.updateQueue = null; // 组件状态更新及对应回调函数的存储队列
  this.memoizedState = null;
  this.firstContextDependency = null;

  this.mode = mode;

  // Effects
  this.effectTag = NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  this.expirationTime = NoWork;
  this.childExpirationTime = NoWork;

  this.alternate = null; // fiber的版本池，即记录fiber更新过程，便于恢复
}
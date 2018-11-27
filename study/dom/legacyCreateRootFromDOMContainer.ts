function legacyCreateRootFromDOMContainer(
  container: DOMContainer,
  forceHydrate: boolean,
): Root {
    let shouldHydrate = false;  // 源码不是这样，不过调用render时候，就是false
  // First clear any existing content.
    let rootSibling;
    while ((rootSibling = container.lastChild)) {
      container.removeChild(rootSibling);
    }
  // Legacy roots are not async by default.
  // 不太懂这个isConcurrent是什么意思，
  // 不过之前的版本这里的变量名字为 `var isAsync = false;`
  const isConcurrent = false; 
  return new ReactRoot(container, isConcurrent, shouldHydrate);
}
let isIdleScheduled = false; // 是否在执行空闲期回调
let frameDeadlineObject = {
 didTimeout: false,
 timeRemaining() {
   // now = Performance.now || Date.now
   const remaining = frameDeadline - now();
   // 计算得到当前帧运行剩余时间
   return remaining > 0 ? remaining : 0;
 },
};
// 帧回调
const animationTick = function(rafTime) {
 ...
 if (!isIdleScheduled) {
   // 不在执行空闲期回调，表明可以调用空闲期回调
   isIdleScheduled = true;
   // 执行Idle空闲期回调
   idleTick();
 }
};
// 空闲期回调
const idleTick = function() {
 // 重置为false，表明可以调用空闲期回调
 isIdleScheduled = false;
 const currentTime = now();
 if (frameDeadline - currentTime <= 0) {
   // 帧到期时间小于当前时间，说明已过期
   if (timeoutTime !== -1 && timeoutTime <= currentTime) {
     // 此帧已过期，且发生任务处理函数（执行具体任务，传入的回调）的超时
     // 需要执行任务处理，下文将调用；
     frameDeadlineObject.didTimeout = true;
   } else {
     // 帧已过期，但没有发生任务处理函数的超时，暂时不调用任务处理函数
     if (!isAnimationFrameScheduled) {
       // 当前没有调度别的帧回调函数
       // 调度下一帧
       isAnimationFrameScheduled = true;
       requestAnimationFrame(animationTick);
     }
     // Exit without invoking the callback.
     return;
   }
 } else {
   // 这一帧还有剩余时间
   // 标记未超时，之后调用任务处理函数
   frameDeadlineObject.didTimeout = false;
 }

 // 缓存的任务处理函数
 timeoutTime = -1;
 const callback = scheduledRICCallback;
 scheduledRICCallback = null;
 if (callback !== null) {
   // 执行回调
   callback(frameDeadlineObject);
 }
}

// 自定义模拟requestIdleCallback
rIC = function(
 callback: (deadline: Deadline) => void, // 传入的任务处理函数参数
 options?: {timeout: number} // 其他参数
) {
 // 回调函数
 scheduledRICCallback = callback;
 if (options != null && typeof options.timeout === 'number') {
   // 计算过期时间
   timeoutTime = now() + options.timeout;
 }
 if (!isAnimationFrameScheduled) {
   // 当前没有调度别的帧回调函数
   isAnimationFrameScheduled = true;
   // 初始开始执行帧回调 
   requestAnimationFrame(animationTick);
 }
 return 0;
};
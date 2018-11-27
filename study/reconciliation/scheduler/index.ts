import {
  NoWork,
  Sync,
  Never,
  msToExpirationTime,
  expirationTimeToMs,
  computeAsyncExpiration,
  computeInteractiveExpiration,
} from './ReactFiberExpirationTime';


// 表示下一个要处理的任务的到期时间，默认为NoWork，即当前没有正在等待执行的任务；
// Nowork默认更新策略：异步模式下，异步执行任务；同步模式下同步执行任务
let expirationContext: ExpirationTime = NoWork;

let isWorking: boolean = false;

// 下一次渲染到期时间
let nextRenderExpirationTime = NoWork;

// 异步更新
export const AsyncUpdates = 1;

// 初始时间（ms）.
const startTime = now();

let mostRecentCurrentTime = msToExpirationTime(0);
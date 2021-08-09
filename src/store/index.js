import {
  configure,
  makeObservable,
  observable,
  computed,
  action,
  makeAutoObservable,
} from "mobx";

// 将 proxy 降级为 Object.defineProperty, 6.0版本前使用的defineProperty
configure({ useProxies: "never" });

// 第一种方式(6.0版本之后一)
const store = makeObservable(
  // 需要代理的响应对象
  {
    count: 0,
    get double() {
      return this.count * 2;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
  // 对各个属性进行包装,用于标记该属性的作用
  {
    count: observable, // 需要跟踪的响应属性
    double: computed, // 计算属性
    increment: action, // action调用后，会修改响应对象
    decrement: action, // action调用后，会修改响应对象
  }
);

// 第二种方式(6.0版本之后二)
// makeAutoObservable中的所有方法都被处理成action
const state = makeAutoObservable({
  count: 0,
  get double() {
    return this.count * 2;
  },
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
});

// 导出
export default store;

import { makeObservable, computed, observable, action } from "mobx";

class Store {
  @observable count = 0;
  constructor() {
    makeObservable(this);
  }
  @action increment() {
    this.count++;
  }
  @action decrement() {
    this.count--;
  }

  @computed get double() {
    return this.count * 2;
  }
}

export default new Store();

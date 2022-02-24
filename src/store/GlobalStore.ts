import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';

class GlobalStore {
  rootStore: RootStore;

  isDragging: boolean;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.isDragging = false;
  }

  setIsDragging = (isDragging: boolean) => {
    this.isDragging = isDragging;
  };
}

export default GlobalStore;

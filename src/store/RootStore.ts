import arrayShuffle from 'array-shuffle';
import { makeAutoObservable } from 'mobx';
import { getRandomInt } from '../utils';
import GlobalStore from './GlobalStore';

const DATA_KEY = 'data2';

class RootStore {
  globalStore: GlobalStore;

  cards: string[];

  next: string;

  constructor() {
    this.globalStore = new GlobalStore(this);
    this.cards = ['chinsun9'];
    this.next = '';

    makeAutoObservable(this);
  }

  loadData = (jsonString: string) => {
    try {
      const json: string[] = JSON.parse(jsonString);
      console.log(json);

      this.cards = json;
      this.shuffle();

      localStorage.setItem(DATA_KEY, jsonString);
    } catch (error) {
      alert('음... 파일이 뭔가 이상해요');
      console.log(error);
    }
  };

  initData = () => {
    try {
      const jsonString = localStorage.getItem(DATA_KEY)!;
      if (!jsonString) return;
      this.loadData(jsonString);
    } catch (error) {
      console.log(`로컬 스토리지가 없거나 이상함`);
    }
  };

  shuffle = () => {
    this.cards = arrayShuffle(this.cards);
  };

  pick = () => {
    const random = getRandomInt(this.cards.length);
    console.log(random);
    this.next = this.cards[random];
  };

  initNext = () => {
    this.next = '';
  };
}

export default RootStore;

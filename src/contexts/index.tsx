import React, { createContext } from 'react';
import RootStore from '../store/RootStore';

type StoreProviderProps = {
  children: React.ReactNode;
};

const store = new RootStore();
store.initData();

export const StoreContext = createContext<RootStore>(store);

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;

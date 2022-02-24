import { useContext } from 'react';
import { StoreContext } from '../contexts';
import RootStore from '../store/RootStore';

export const useStore = () => useContext<RootStore>(StoreContext);

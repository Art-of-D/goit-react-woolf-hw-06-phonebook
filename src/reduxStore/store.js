import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const WHITELIST = ['contacts'];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: WHITELIST,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);

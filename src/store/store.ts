import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { createPersistStorage } from '@/helpers/persist-storage';

import { KEY_COMMON } from './constants';
import { commonSlice } from './slices';

const storage = createPersistStorage();

const persistCommon = {
  key: KEY_COMMON,
  storage,
  // blacklist: ["tableData"]
};

const persistedReducer = persistReducer(persistCommon, commonSlice);
const reducer = {
  [KEY_COMMON]: persistedReducer,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

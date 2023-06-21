import { createSlice } from '@reduxjs/toolkit';

import { KEY_COMMON } from '../constants';

export interface ICommonState {
  loading: boolean;
}

const initialState: ICommonState = {
  loading: false,
};

// export const storeCommonChangeTheme =
//   createAction<ICommon.Theme>('common/changeTheme');

export const commonSlice = createSlice({
  initialState,
  name: KEY_COMMON,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(storeCommonChangeTheme, (state, { payload }) => {
  //     state.theme = payload;
  //   });
  // },
});

export default commonSlice.reducer;

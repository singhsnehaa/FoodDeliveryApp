import {createSlice} from '@reduxjs/toolkit';

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    bottomTabs: {},
    selectedDrawerTab: 'Home',
  },
  reducers: {
    reset: () => initialState,
    changeDrawerTab: (state, action) => {
      const {payload} = action;
      state.selectedDrawerTab = payload;
    },
  },
});

export const {reset, changeDrawerTab} = tabsSlice.actions;
export default tabsSlice.reducer;

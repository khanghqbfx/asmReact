import {createSlice} from '@reduxjs/toolkit';


export const popupSlice = createSlice({
  name: 'popup',
  initialState: { popup: false, items: null},
  reducers: {
    showPopUp: (state, actions) => {
      state.popup = true;
      state.items = actions.payload;
    },
    hidePopUp: (state) => {
      state.popup = false;
     
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: []
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
        state.items.push({
          ...action.payload,
          favorite: true,
        });

    },
    removeFavorite(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearFavorite(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
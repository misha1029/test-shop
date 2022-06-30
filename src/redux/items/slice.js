import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async () => {
    const { data } = await axios.get(
      `https://61c6e2f49031850017547270.mockapi.io/items`
    );
    return data;
  }
);

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state, action) => {
        state.status = 'loading';
    },
    [fetchItems.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = 'success';
    },
    [fetchItems.rejected]: (state, action) => {
        state.status = 'error';
        state.items = [];
    }
}
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;

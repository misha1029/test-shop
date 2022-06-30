import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/slise';
import itemsSlice from './items/slice';
import  favoriteSlice  from './favorited/slice';


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    items: itemsSlice,
    favorite: favoriteSlice
  },
})


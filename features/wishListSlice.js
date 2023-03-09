import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.basket.push(action.payload);
      }
    },
    removeItem: (state, action) => {
        state.basket = state.basket.filter((item) => item.id !== action.payload.itemId);
      },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.basket;

export default wishlistSlice.reducer;

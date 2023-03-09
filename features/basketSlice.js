import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[],
}
export const getBasketTotal = (items) =>
  items?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          // item already exists in the basket, increase quantity
          state.items[index].quantity += action.payload.quantity || 1;
        } else {
          // item does not exist in the basket, add it
          state.items.push({...action.payload, quantity: action.payload.quantity || 1});
        }
      },
      
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in basket!`
        );
      }
    },
    addQuantity: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        console.warn(
          `Can't increment quantity (id: ${action.payload.id}) as it's not in basket!`
        );
      }
    },
    reduceQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {
          // decrease quantity if greater than 1
          state.items[index].quantity--;
        } else {
          // remove item if quantity is 1
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket, addQuantity, reduceQuantity } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;

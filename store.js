import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import wishlistReducer from './features/wishListSlice'
export const store = configureStore({
  reducer: {
    basket:basketReducer,
    wishlist: wishlistReducer,
  },
})


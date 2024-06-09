import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.newPrice,
          quantity: 1,
          totalPrice: newItem.newPrice,
          image: newItem.image, // Add the image property
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.newPrice;
      }
      state.totalAmount += newItem.newPrice;
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalAmount += existingItem.price;
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalAmount -= existingItem.price;
        } else {
          state.items = state.items.filter(item => item.id !== id);
          state.totalAmount -= existingItem.price;
        }
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItemToCart, incrementQuantity, decrementQuantity, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

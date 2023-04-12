import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../Products";

const initialState = {
  PRODUCTS,
  cartItem: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let product = state.PRODUCTS.find((p) => p.id === payload.id);
      //當按下button時，
      if (product) {
        let index = state.cartItem.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          //如果cartItem裡面有該商品，就在他裡面的quantity+1
          state.cartItem[index].quantity += 1;
        } else {
          //如果cartItem裡面沒有按下button的那個商品，就把product push 到cartItem裡面，且把他的數量設為1
          state.cartItem.push({ ...product, quantity: 1 });
        }
      }
    },
    addToCartAmount: (state, { payload }) => {
      let product = state.PRODUCTS.find((p) => p.id === payload.id);
      if (product) {
        let index = state.cartItem.findIndex((item) => item.id === product.id);
        if (index != -1) {
          state.cartItem[index].quantity += payload.amount;
        } else {
          state.cartItem.push({ ...product, quantity: payload.amount });
        }
      }
    },
    decreaseFromCart: (state, { payload }) => {
      let cart = state.cartItem.find((item) => item.id === payload.id);
      if (cart) {
        cart.quantity -= 1;
        if (cart.quantity === 0) {
          //顯示確認框
          const shouldRemove = window.confirm("確定要刪除此商品？");
          if (shouldRemove) {
            state.cartItem = state.cartItem.filter(
              (item) => item.id !== payload.id
            );
          } else {
            cart.quantity = 1;
          }
        }
      }
    },
    changeQuantity: (state, { payload }) => {
      let cart = state.cartItem.find((item) => item.id === payload.id);
      if (cart) {
        cart.quantity = payload.quantity;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== payload.id);
    },
  },
});

export const {
  addToCart,
  addToCartAmount,
  decreaseFromCart,
  changeQuantity,
  removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;

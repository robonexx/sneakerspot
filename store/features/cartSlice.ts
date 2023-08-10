
import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, Product } from "@/interfaces";
import { RootState } from "@/store/store";

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            )
            if (item) item.quantity;
            else {
                state.cartItems.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },

        decrement: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            )
            if (item) {
                item.quantity--;
                if (item.quantity === 0) {
                    state.cartItems = state.cartItems.filter(
                        el => el.product.id !== action.payload.id
                    );
                }
            }
        },
    },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const productQuantityInCartSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find((el) => el.product.id === productId)?.quantity
  );
  
  export const totalCartItemsSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.quantity),0
      )
  );
  export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.quantity * curr.product.price),
        0
      )
  );
  

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
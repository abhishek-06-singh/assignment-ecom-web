import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice";
import orderSummaryReducer from "./orderSummarySlice";
import googleAuthReducer from "./googleAuthSlice";
import darkModeReducer from "./darkModeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer,
    orderSummary: orderSummaryReducer,
    googleAuth: googleAuthReducer,
    darkMode: darkModeReducer,
  },
});
export default store;

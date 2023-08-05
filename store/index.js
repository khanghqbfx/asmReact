import { configureStore } from "@reduxjs/toolkit";
import popupReducer from './popup';
import cartReducer from './cart';
import loginReducer from "./Login";

export default configureStore({
    reducer: { popup: popupReducer, login:loginReducer ,cart: cartReducer},
  });



 
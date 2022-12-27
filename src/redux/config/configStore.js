import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/postSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: { postSlice, loginSlice },
});

export default store;

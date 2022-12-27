import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/postSlice";
import commentSlice from "../modules/commentSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: { postSlice, loginSlice, commentSlice },
});

export default store;

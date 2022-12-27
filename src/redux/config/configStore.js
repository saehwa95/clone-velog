import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/postSlice";
import commentSlice from "../modules/commentSlice";

const store = configureStore({
  reducer: { postSlice, commentSlice },
});

export default store;

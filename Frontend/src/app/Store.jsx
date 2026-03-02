import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/loginReducer";

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default Store;

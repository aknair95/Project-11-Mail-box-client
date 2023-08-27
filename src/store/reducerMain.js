
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const storeReducer= configureStore({
    reducer: { authentication: authReducer.reducer }
});

export default storeReducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import mailReducer from "./mailReducer";

const storeReducer= configureStore({
    reducer: { authentication: authReducer.reducer, mailDetails: mailReducer.reducer }
});

export default storeReducer;
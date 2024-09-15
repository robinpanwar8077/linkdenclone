import {configureStore} from "@reduxjs/toolkit"
import userDetailsReducers from "./features/userDetails/userDetailsSlice"
import loginsigninReducer from "./features/loginSignin/loginsigninSlice";

const store=configureStore({
    reducer:{
        userDetails:userDetailsReducers,
        loginSignin:loginsigninReducer,
        

    }
})
export default store;
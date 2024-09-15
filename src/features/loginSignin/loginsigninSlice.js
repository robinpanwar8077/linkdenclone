import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginSigninToggle:true
}
const loginsingin=createSlice({
    name:"loginSignin",
    initialState,
    reducers:{
        toggle:(state)=>{state.loginSigninToggle=!state.loginSigninToggle},
    }
})


export default loginsingin.reducer;
export const {toggle}=loginsingin.actions;
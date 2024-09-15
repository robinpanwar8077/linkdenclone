import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null
}
const userDetails=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,{payload})=>{state.user=(payload)},
        logout:(state)=>{state.user=null},
    }
})

export default userDetails.reducer;
export const {login,logout}=userDetails.actions;
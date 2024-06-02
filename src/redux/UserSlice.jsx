/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit"

// eslint-disable-next-line react-refresh/only-export-components
const UserSlice=createSlice({
    name:"users",
    initialState:{
        user:null
    },
    reducers:{
        getUserData:(state,action)=>{
         state.user=action.payload
        }
    }
})
export const {getUserData} =UserSlice.actions
export default UserSlice.reducer
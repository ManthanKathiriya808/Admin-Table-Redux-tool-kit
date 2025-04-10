import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({

    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action) {
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeUser(state,action) {
           state.splice(action.payload,1)
        },
        deleteUsers(state,action) {
            return []
        }


    }
})

export default UserSlice.reducer
export const {addUser} = UserSlice.actions
export const {removeUser,deleteUsers} = UserSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', name: "aravindh" },
  { id: '2', name: "vikram" },
  { id: '3', name: "leo" }
];

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state)=>state.users;

export default usersSlice.reducer
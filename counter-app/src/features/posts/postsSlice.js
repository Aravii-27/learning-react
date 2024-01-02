import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "learned redux", content: "redux was complex" },

  {
    id: "2",
    title: "learning redux toolkit",
    content: "redux toolkit is simple",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded:{reducer(state, action){
         state.push(action.payload)
    },
    prepare(title, content){
      return{
        payload:{
          id: nanoid(),
          title,
          content
        }
      }
    }
  }
},
});

export const selectAllPost = (state) => state.posts;
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer;

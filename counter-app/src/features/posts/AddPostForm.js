import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";


const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch()

  const OnTitleChanged = (e) => setTitle(e.target.value);
  const OnContentChanged = (e) => setContent(e.target.value);

  const OnSavePostClicked = ()=>{
    if (title && content){
        dispatch(postAdded(title, content))
        setTitle('')
        setContent('')
    }
  }
  return (
    <section>
      <h3>Add a New Post</h3>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={OnTitleChanged}
        />
        <textarea
          type="text"
          id="postContent"
          name="postTitle"
          value={content}
          onChange={OnContentChanged}
        />
        <button type="button" onClick={OnSavePostClicked}>save post</button>
      </form>
    </section>
  );
};

export default AddPostForm;

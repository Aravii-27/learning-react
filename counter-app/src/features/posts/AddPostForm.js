import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const OnTitleChanged = (e) => setTitle(e.target.value);
  const OnContentChanged = (e) => setContent(e.target.value);
  const OnAuthorchanged = (e) => setUserId(e.target.value);

  const OnSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
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
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={OnAuthorchanged}>
          <option value="">select an author</option>
          {usersOptions}
        </select>
        <textarea
          type="text"
          id="postContent"
          name="postTitle"
          value={content}
          onChange={OnContentChanged}
        />
        <button type="button" onClick={OnSavePostClicked} disabled={!canSave}>
          save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;

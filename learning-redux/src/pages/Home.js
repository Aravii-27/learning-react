import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as userActions from "../store/action/user";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
  });

  const dispatch = useDispatch();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  };

  const addUser = () => {
    dispatch(userActions.addUser(user));
    setUser((prevUser) => ({ ...prevUser, id: "", name: "", password: "" }));
  };

  
  return (
    <div>
      <h1>Add User</h1>
      <input
        name="id"
        placeholder="enter id"
        onChange={inputHandler}
        value={user.id}
      />
      <input
        name="name"
        placeholder="enter name"
        onChange={inputHandler}
        value={user.name}
      />
      <input
        name="password"
        type="password"
        placeholder="enter password"
        onChange={inputHandler}
        value={user.password}
      />
      <button type="submit" onClick={addUser}>Add</button>
      <Link to="/users">Users List</Link>
    </div>
    
  );
};

export default Home;

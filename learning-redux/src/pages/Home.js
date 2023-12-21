import React, { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(
    {
      id: "",
      name: "",
      password: "",
    }
  );

  const inputHandler = (event) => {
    const { name, value } = event.target;
    console.log(name,value)
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
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
        <button>Add</button>
      </div>
  
  );
};

export default Home;

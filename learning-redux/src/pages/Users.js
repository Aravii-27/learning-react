import React from "react";
import { useSelector } from "react-redux";
import User from "../components/User"

const Users = () => {
  const users = useSelector((state) => state.users);

  console.log(users);

  return (
    <div>
      {users && users.map((user) => (
        <User key={user.id} name={user.name} id={user.id} password={user.password} />
      ))}
    </div>
  );
};


export default Users;

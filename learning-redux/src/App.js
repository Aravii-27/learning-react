import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import usersReducer from "./store/reducer/user";

const App = () => {
  const store = configureStore({
    reducer: {
      users: usersReducer,
    },
  });
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/users" element={<Users/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

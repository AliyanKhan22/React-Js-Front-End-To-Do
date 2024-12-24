import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import TodoApp from "./components/todo";
import PrivateRoute from "./config/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodoApp />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

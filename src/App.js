import React from "react";
// import Login from "./components/login"; 
// import Signup from "./components/signup"; 
 import Todo from "./components/todo"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Navigate to="/todo" replace />} />
         <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
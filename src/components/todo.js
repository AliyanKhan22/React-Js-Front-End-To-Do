import React, { useState, useEffect } from "react";
import { Input, Button, List, Modal } from "antd";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    if (newTodo.trim()) {
      try {
        const response = await axios.post("http://localhost:5000/api/todos", { text: newTodo });
        setTodos([...todos, response.data]);
        setNewTodo("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const openEditModal = (todo) => {
    setCurrentTodo(todo);
    setIsEditModalVisible(true);
  };

  const editTodo = async () => {
    if (currentTodo.text.trim()) {
      try {
        const response = await axios.put(`http://localhost:5000/api/todos/${currentTodo._id}`, {
          text: currentTodo.text,
        });
        setTodos(todos.map((todo) => (todo._id === currentTodo._id ? response.data : todo)));
        setIsEditModalVisible(false);
      } catch (error) {
        console.error("Error editing todo:", error);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center py-10 px-6">
      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-50 shadow-2xl rounded-2xl p-10 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-10">
          🚀 Mern Stack To-Do App
        </h1>

        <div className="flex gap-4 mb-10">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 p-4 border-2 border-purple-300 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-500"
          />
          <Button
            type="primary"
            onClick={addTodo}
            className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg transform transition-transform hover:scale-110"
          >
            <PlusCircleOutlined /> Add
          </Button>
        </div>

        <List
          bordered
          dataSource={todos}
          className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
          renderItem={(item) => (
            <List.Item
              className="p-5 flex justify-between items-center hover:bg-purple-100 transition duration-200 rounded-xl mb-2 shadow-sm"
              actions={[
                <Button
                  type="link"
                  onClick={() => openEditModal(item)}
                  className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
                >
                  <EditOutlined /> Edit
                </Button>,
                <Button
                  type="link"
                  onClick={() => deleteTodo(item._id)}
                  className="text-red-500 hover:text-red-700 flex items-center gap-2"
                >
                  <DeleteOutlined /> Delete
                </Button>,
              ]}
            >
              <span className="text-gray-800 text-lg font-semibold">{item.text}</span>
            </List.Item>
          )}
        />
      </div>

      <Modal
        title={
          <h2 className="text-2xl font-extrabold text-purple-700">
            ✏️ Edit Task
          </h2>
        }
        visible={isEditModalVisible}
        onOk={editTodo}
        onCancel={() => setIsEditModalVisible(false)}
        okText="Save Changes"
        cancelText="Cancel"
        className="rounded-lg"
      >
        <Input
          value={currentTodo.text}
          onChange={(e) => setCurrentTodo({ ...currentTodo, text: e.target.value })}
          placeholder="Update your task"
          className="border border-purple-300 rounded-lg p-4 focus:outline-none focus:ring-4 focus:ring-purple-500"
        />
      </Modal>
    </div>
  );
};

export default App;

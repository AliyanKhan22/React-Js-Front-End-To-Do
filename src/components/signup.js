import React, { useState } from "react";
import { Button, Input, Form, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Title, Text } = Typography;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (values) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await axios.post("http://localhost:5000/api/signup", values);
      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-teal-500 via-indigo-500 to-purple-700">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-10 max-w-md w-full animate-fade-in transform hover:scale-105 transition-all duration-300">
        <Title level={3} className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 font-extrabold mb-6">
          Create an Account
        </Title>
        {error && <Alert message={error} type="error" showIcon className="mb-4" />}
        {success && <Alert message={success} type="success" showIcon className="mb-4" />}
        <Form layout="vertical" onFinish={handleSignup}>
          <Form.Item
            label={<Text className="font-medium text-gray-800">Username</Text>}
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input
              size="large"
              placeholder="Enter your username"
              prefix={<UserOutlined className="text-gray-400" />}
              className="rounded-lg border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transform hover:scale-105 transition-all duration-300"
            />
          </Form.Item>
          <Form.Item
            label={<Text className="font-medium text-gray-800">Password</Text>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<LockOutlined className="text-gray-400" />}
              className="rounded-lg border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transform hover:scale-105 transition-all duration-300"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="mt-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            size="large"
          >
            Sign Up
          </Button>
        </Form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            className="text-teal-500 cursor-pointer hover:underline transition-all"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
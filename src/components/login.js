// import React from "react";
// import { Link } from "react-router-dom";
// import { Input, Button, Form } from "antd";

// const Login = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-4 text-blue-500">Login</h1>
//         <Form className="space-y-4">
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Please enter your email!" }]}
//           >
//             <Input placeholder="Enter your email" />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Please enter your password!" }]}
//           >
//             <Input.Password placeholder="Enter your password" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//         <div className="text-center mt-4">
//           <p>
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-blue-500 underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
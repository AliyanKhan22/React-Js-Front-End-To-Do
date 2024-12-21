// import React from "react";
// import { Link } from "react-router-dom";
// import { Input, Button, Form } from "antd";

// const Signup = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-4 text-blue-500">Sign Up</h1>
//         <Form className="space-y-4">
//           {/* Name Input */}
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: "Please enter your name!" }]}
//           >
//             <Input placeholder="Enter your name" />
//           </Form.Item>

//           {/* Email Input */}
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Please enter your email!" }]}
//           >
//             <Input placeholder="Enter your email" />
//           </Form.Item>

//           {/* Password Input */}
//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Please enter your password!" }]}
//           >
//             <Input.Password placeholder="Enter your password" />
//           </Form.Item>

//           {/* Submit Button */}
//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>
//               Sign Up
//             </Button>
//           </Form.Item>
//         </Form>
//         <div className="text-center mt-4">
//           <p>
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Iltimos inputlarni to'ldiring");
    } else {
      // Handle login logic here
      setError("");
    }
  };

  document.title = "CRM Login";

  return (
    <main className="login flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-10 space-y-8 bg-white backdrop-blur-lg rounded-lg shadow-xl border border-gray-300">
        <h1 className="text-4xl font-bold text-center text-blue-800 animate-bounce">
          Welcome to CRM
        </h1>
        <p className="text-center text-lg text-blue-600">
          Please login to continue
        </p>
        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
            role="alert"
          >
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute transition-all duration-300 ease-in-out text-lg font-medium text-blue-700 ${
                focusedInput === "email" || email
                  ? "top-[-12px] left-2 text-[12px] bg-white text-blue-500"
                  : "top-4 left-3 text-gray-700"
              }`}
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              className="block w-full px-4 py-3 mt-1 bg-[#eeeeee] border border-t-0 border-l-0 border-r-0 border-[#000] rounded-md rounded-br-none rounded-bl-none shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute transition-all duration-300 ease-in-out text-lg font-medium text-blue-700 ${
                focusedInput === "password" || password
                  ? "top-[-6px] left-2 text-xs bg-white"
                  : "top-4 left-3"
              }`}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              className="block w-full px-4 py-3 mt-1 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember_me"
                className="block ml-3 text-lg text-blue-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-lg">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-lg text-center text-blue-700">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;

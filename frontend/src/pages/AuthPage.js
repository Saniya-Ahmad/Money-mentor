import React, { useState } from "react";

function AuthPage({ setIsLoggedIn, onBackToHome }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API = "http://127.0.0.1:8000";

  const handleAuth = async () => {
    setError("");
    setSuccess("");
    const endpoint = isLogin ? "/auth/login" : "/auth/signup";

    const res = await fetch(API + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (isLogin) {
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        setIsLoggedIn(true);
      } else {
        setError("Invalid email or password");
      }
    } else {
      setSuccess("Signup successful. Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[400px] border border-white border-opacity-20">
        {/* Back Button */}
        <div className="flex justify-start mb-4">
          <button
            onClick={onBackToHome}
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">💰</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Money Mentor
          </h2>
          <p className="text-gray-600">
            {isLogin ? "Welcome back! Please sign in." : "Join us to start your financial journey."}
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              className="w-full border border-gray-300 p-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute left-3 top-3.5 text-gray-400">📧</span>
          </div>

          <div className="relative">
            <input
              className="w-full border border-gray-300 p-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔒</span>
          </div>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}

        <button
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg mt-6 hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-semibold shadow-lg"
          onClick={handleAuth}
        >
          {isLogin ? "Sign In" : "Create Account"}
        </button>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
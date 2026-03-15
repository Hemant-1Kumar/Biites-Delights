import { useState } from "react";
import axios from "axios";
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/admin/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token); // MUST save token
    window.location.href = "/admin"; // redirect to dashboard
  } catch (err) {
    alert("Invalid credentials");
  }
};
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin"; // Redirect to dashboard
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-lg space-y-6 w-full max-w-md"
      >
        <h2 className="text-2xl text-yellow-400 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-yellow-400 text-black py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
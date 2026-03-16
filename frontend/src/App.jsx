import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Mango from "./pages/Mango";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mango" element={<Mango />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

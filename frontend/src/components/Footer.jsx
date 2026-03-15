import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">

        <h2 className="text-yellow-400 font-semibold text-lg">
          Bites & Delights
        </h2>

        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
          <Link to="/mango" className="hover:text-yellow-400">Mango Supply</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Bites & Delights. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
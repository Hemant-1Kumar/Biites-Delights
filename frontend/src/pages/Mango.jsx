import { useState } from "react";
import axios from "axios";

export default function Mango() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/mango", form);
      alert("Order Placed Successfully 🥭");
      setForm({
        name: "",
        phone: "",
        location: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      alert("Error submitting order");
    }
  };

  return (
    <div className="pt-24 bg-black text-white min-h-screen px-6">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Fresh Mango Supply in Pune
        </h1>
        <p className="text-gray-300">
          Premium Alphonso and Kolhapuri mangoes sourced directly from farms.
        </p>
      </div>

      {/* ================= MANGO TYPES ================= */}
      <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-10">

        {/* Alphonso */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1200&auto=format&fit=crop"
            alt="Alphonso Mango"
            className="h-64 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Alphonso Mango
            </h3>
            <p className="text-gray-400">
              Sweet, aromatic and premium quality mango.
            </p>
          </div>
        </div>

        {/* Kolhapuri */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <img
  src="https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop"
  alt="Kolhapuri Mango"
  className="h-64 w-full object-cover"
/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Kolhapuri Mango
            </h3>
            <p className="text-gray-400">
              Fresh farm-sourced juicy mangoes.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SUPPLY OPTIONS ================= */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-8">
          Supply Options
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Home Delivery",
            "Bulk Orders",
            "Retail Stores",
            "Restaurants",
          ].map((option, index) => (
            <div
              key={index}
              className="bg-gray-900 py-6 rounded-lg border border-gray-800"
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      {/* ================= ORDER FORM ================= */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
          Place Your Order
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md outline-none focus:border-yellow-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md outline-none focus:border-yellow-400"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md outline-none focus:border-yellow-400"
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity (Kg / Boxes)"
            value={form.quantity}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md outline-none focus:border-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-md outline-none focus:border-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold hover:opacity-90"
          >
            Submit Order
          </button>
        </form>
      </div>

    </div>
  );
}
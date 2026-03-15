import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Message Sent Successfully ✅");
      setForm({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="pt-24 bg-black text-white min-h-screen px-6">

      {/* ===== Title Section ===== */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300">
          We would love to hear from you.
        </p>
      </div>

      {/* ===== Company Info ===== */}
      <div className="max-w-4xl mx-auto mb-16 bg-gray-900 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Bites & Delights
        </h2>
        <p className="text-gray-300 mb-2">📍 Location: Pune, India</p>
        <p className="text-gray-300">
          👨‍💼 Founders: Niranjan Inamdar & Kalyani Inamdar
        </p>
      </div>

      {/* ===== Contact Form ===== */}
      <div className="max-w-3xl mx-auto mb-20">
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
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:border-yellow-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:border-yellow-400 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:border-yellow-400 outline-none"
          />

          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:border-yellow-400 outline-none"
          >
            <option value="">Select Inquiry Type</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Mango Supply">Mango Supply</option>
            <option value="Bulk Order">Bulk Order</option>
            <option value="General Question">General Question</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:border-yellow-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}
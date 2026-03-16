import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://biites-delights.onrender.com/api/contact",
        form
      );

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-black text-white min-h-screen px-6 relative">

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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold transition duration-300 cursor-pointer ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-yellow-400 text-black hover:scale-105"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      {/* ===== SUCCESS POPUP ===== */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 p-10 rounded-2xl text-center shadow-2xl max-w-sm w-full"
            >
              {/* Animated Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center"
              >
                <span className="text-3xl text-white">✓</span>
              </motion.div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Message Sent!
              </h3>

              <p className="text-gray-300 mb-6">
                Thank you for contacting us. We’ll get back to you soon.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

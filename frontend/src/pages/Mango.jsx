import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Mango() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    quantity: "",
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
      await axios.post("https://biites-delights.onrender.com/api/mango", form);
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        location: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      alert("Error submitting order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-black text-white min-h-screen px-6 relative">

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
                Processing...
              </div>
            ) : (
              "Submit Order"
            )}
          </button>
        </form>
      </div>

      {/* ================= SUCCESS POPUP ================= */}
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
                Order Placed!
              </h3>

              <p className="text-gray-300 mb-6">
                Your mango order has been successfully submitted.
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

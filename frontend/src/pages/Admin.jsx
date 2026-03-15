import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [mangoOrders, setMangoOrders] = useState([]);
  const [contacts, setContacts] = useState([]);

  const token = localStorage.getItem("token");

  // Redirect if no token
  useEffect(() => {
    if (!token) {
      window.location.href = "/admin-login";
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  const fetchMangoOrders = async () => {
    const res = await axios.get("http://localhost:5000/api/mango", {
      headers: { Authorization: token }
    });
    setMangoOrders(res.data);
  };

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contact", {
      headers: { Authorization: token }
    });
    setContacts(res.data);
  };

  const deleteMango = async (id) => {
    await axios.delete(`http://localhost:5000/api/mango/${id}`, {
      headers: { Authorization: token }
    });
    fetchMangoOrders();
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/api/contact/${id}`, {
      headers: { Authorization: token }
    });
    fetchContacts();
  };

  useEffect(() => {
    if (token) {
      fetchMangoOrders();
      fetchContacts();
    }
  }, [token]);

  return (
    <div className="pt-24 bg-black text-white min-h-screen px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:opacity-90"
        >
          Logout
        </button>
      </div>

      {/* Mango Orders */}
      <h2 className="text-2xl text-yellow-400 mb-6">Mango Orders</h2>
      {mangoOrders.map(order => (
        <div key={order._id} className="bg-gray-800 p-4 mb-4 rounded flex justify-between">
          <span>{order.name} - {order.quantity}</span>
          <button
            onClick={() => deleteMango(order._id)}
            className="bg-red-500 px-2 py-1 rounded text-white"
          >
            Delete
          </button>
        </div>
      ))}

      {/* Contacts */}
      <h2 className="text-2xl text-yellow-400 mt-10 mb-6">Contact Messages</h2>
      {contacts.map(contact => (
        <div key={contact._id} className="bg-gray-800 p-4 mb-4 rounded flex justify-between">
          <span>{contact.name} - {contact.inquiryType}</span>
          <button
            onClick={() => deleteContact(contact._id)}
            className="bg-red-500 px-2 py-1 rounded text-white"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
const token = localStorage.getItem("token");

const fetchContacts = async () => {
  const res = await axios.get("http://localhost:5000/api/contact", {
    headers: { Authorization: token } // ← important!
  });
  setContacts(res.data);
};
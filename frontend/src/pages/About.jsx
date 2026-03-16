// src/pages/AboutUs.jsx
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 px-6 md:px-20 lg:px-32">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          About Us - Bites & Delights
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Welcome to <span className="font-semibold text-white">Bites & Delights</span>, where health meets taste. We are a Pune-based food innovation company founded by Niranjan Inamdar and Kalyani Inamdar, on a mission to make healthy, plant-based eating delicious, accessible, and affordable for everyone.
        </p>
      </div>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          What We Do
        </h2>

        {/* Banner Image */}
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Plant-Based Food"
          className="w-full h-64 object-cover rounded-3xl shadow-2xl mb-8"
        />

        <ul className="text-gray-300 text-lg space-y-4 max-w-3xl mx-auto">
          <li>
            <span className="font-semibold text-white">Plant-Based Protein (Soya Chaap):</span> Available in exciting variants like Tandoori, Malai, BBQ, Peri Peri, Gym Protein Chaap, and Frozen Chaap Sticks.
          </li>
          <li>
            <span className="font-semibold text-white">Vegan Chocolates & Desserts:</span> Including 70% Dark Chocolate, Jaggery Chocolate, Protein Chocolate Bar, and Coffee Chocolate Blend.
          </li>
          <li>
            <span className="font-semibold text-white">Functional Beverages:</span> Almond Milk, Cashew Milk, Mango Vegan Milk Drink, Vegan Cold Coffee, and Protein Shakes.
          </li>
          <li>
            <span className="font-semibold text-white">Frozen & Ready-to-Cook Foods:</span> Convenient, nutritious options for busy lifestyles.
          </li>
        </ul>
      </section>

      {/* Mango Supply Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          Premium Mango Supply
        </h2>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-8">
          Beyond our vegan product range, <span className="font-semibold text-white">Bites & Delights</span> is also a trusted name in fresh seasonal mango supply across Pune. We source premium Alphonso and Kolhapuri mangoes directly from farms, delivering the finest quality to households, restaurants, and bulk buyers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Real working mango images */}
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Alphonso Mangoes"
            className="w-full h-64 object-cover rounded-3xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/11113103/pexels-photo-11113103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Fresh Mangoes"
            className="w-full h-64 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Our Vision
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
          We believe eating well should never mean compromising on taste. Our vision is to build a future where plant‑based foods are the first choice not just for vegans, but for every family that values health, sustainability, and great flavor.
        </p>
        <p className="text-gray-100 font-medium">
          Based in Pune, India | Serving Across the Country
        </p>
      </section>

    </div>
  );
}

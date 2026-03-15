import { motion } from "framer-motion";

export default function Products() {

  const sections = [
    {
      title: "Plant Based Protein (Soya Chaap)",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
      items: [
        "Tandoori Chaap",
        "Malai Chaap",
        "BBQ Chaap",
        "Peri Peri Chaap",
        "Gym Protein Chaap",
        "Frozen Chaap Sticks",
      ],
    },
    {
      title: "Vegan Chocolate",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1600&q=80",
      items: [
        "70% Dark Chocolate",
        "Jaggery Chocolate",
        "Drinking Chocolate Mix",
        "Protein Chocolate Bar",
        "Coffee Chocolate Blend",
      ],
    },
    {
      title: "Functional Beverages",
      image:
        "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?auto=format&fit=crop&w=1600&q=80",
      items: [
        "Almond Milk",
        "Cashew Milk",
        "Mango Vegan Milk Drink",
        "Vegan Cold Coffee",
        "Protein Shakes",
      ],
    },
    {
      title: "Upcoming Products",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80",
      items: [
        "Vegan Butter",
        "Plant Based Ice Cream",
        "Protein Laddoos",
        "High Protein Parathas",
        "Vegan Paneer",
        "Frozen Indian Meals",
      ],
    },
  ];

  return (
    <div className="pt-24 bg-black text-white min-h-screen px-6">

      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-yellow-400"
        >
          Our Products
        </motion.h1>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-28"
          >

            {/* Category Image Banner */}
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl mb-12 group">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60"></div>

              <h2 className="absolute bottom-6 left-8 text-2xl md:text-3xl font-semibold text-yellow-400">
                {section.title}
              </h2>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/5 border border-yellow-400/20 p-6 rounded-2xl hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-2xl transition duration-500 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-center">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}
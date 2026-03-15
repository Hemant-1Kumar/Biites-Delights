import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide">
            Healthy Vegan Foods <br />
            <span className="text-yellow-400">& Premium Mango Supply</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Bites & Delights develops plant based protein foods, vegan chocolates,
            functional beverages and frozen foods. We also supply Alphonso and
            Kolhapuri mangoes across Pune.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/products"
              className="border border-yellow-400 text-yellow-400 px-10 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 font-semibold"
            >
              View Products
            </Link>

            <Link
              to="/mango"
              className="bg-yellow-400 text-black px-10 py-3 rounded-full hover:scale-105 transition duration-300 font-semibold shadow-xl"
            >
              Order Mangoes
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              About Bites & Delights
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Bites & Delights is a Pune based food innovation company focused
              on plant based and vegan food manufacturing. We craft high protein
              meat alternatives, dairy free chocolates and functional nutrition
              products designed for modern healthy lifestyles.
            </p>
          </div>

          <img
  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
  alt="Premium Vegan Food"
  className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
/>

        </div>
      </section>

      {/* ================= PRODUCT CATEGORIES ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16 text-yellow-400">
            Our Product Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Plant Based Meat Alternatives",
              "Vegan Chocolates & Desserts",
              "Functional Beverages",
              "Frozen Ready to Cook Foods",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-yellow-400/20 p-8 rounded-3xl hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-2xl transition duration-500"
              >
                <h3 className="font-semibold text-lg text-white">
                  {item}
                </h3>
              </div>
            ))}

          </div>

          <div className="mt-14">
            <Link
              to="/products"
              className="bg-yellow-400 text-black px-10 py-3 rounded-full hover:scale-105 transition font-semibold shadow-lg"
            >
              Explore All Products
            </Link>
          </div>

        </div>
      </section>

      {/* ================= MANGO HIGHLIGHT ================= */}
      <section
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1590080877777-7b2d0e1f6f2d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Premium Alphonso & Kolhapuri Mango Supply
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Fresh seasonal mango supply across Pune for households,
            restaurants and bulk buyers.
          </p>

          <Link
            to="/mango"
            className="bg-yellow-400 text-black px-10 py-3 rounded-full hover:scale-110 transition duration-300 font-semibold shadow-2xl"
          >
            Order Mangoes
          </Link>
        </div>
      </section>

    </div>
  );
}
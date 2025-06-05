import { motion } from "framer-motion";
import { features } from "../constants";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Creative <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">Freelance Team</span> Delivering Results
      </h2>
      <p className="text-md lg:text-xl text-neutral-400 max-w-4xl mx-auto text-center mb-10">
        We are a duo of passionate web developers committed to helping individuals, startups, 
        and businesses build powerful digital experiences. With a perfect blend of design and code, 
        we create fast, secure, and beautiful websites that truly stand out.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {features.map(({ icon, text, description }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-orange-500 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <div className="text-orange-500">{icon}</div>
              <h3 className="text-2xl font-semibold text-orange-400">{text}</h3>
            </div>
            <p className="text-neutral-400 mt-2">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Work With Us Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-16 max-w-5xl mx-auto p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:shadow-orange-500 transition-transform duration-300 transform hover:scale-105"
      >
        <h3 className="text-3xl font-bold text-center mb-6">
          Why Work With Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-5xl font-bold text-orange-500 mb-2">10+</div>
            <p className="text-lg text-neutral-400">Combined Projects</p>
          </div>
          <div className="text-center p-4">
            <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-lg text-neutral-400">Custom Solutions</p>
          </div>
          <div className="text-center p-4">
            <div className="text-5xl font-bold text-orange-500 mb-2">2x</div>
            <p className="text-lg text-neutral-400">The Creativity & Dedication</p>
          </div>
        </div>
        <p className="mt-8 text-center text-neutral-400 max-w-3xl mx-auto">
          As a two-person team, we combine our unique skills — from UI/UX and frontend magic to backend power 
          and deployment — to build tailored, reliable, and scalable web solutions that truly reflect your brand.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

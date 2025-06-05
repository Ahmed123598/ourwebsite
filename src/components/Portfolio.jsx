import { Code, ExternalLink } from "lucide-react";
import { portfolioItems } from "../constants";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Recent <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {portfolioItems.map(({ title, description, image, technologies, category, github, liveLink }, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: idx * 0.15 }} 
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-orange-500 transition-transform duration-300 transform hover:scale-105 group overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative">
              <img src={image} alt={title} className="rounded-lg w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-white">{description}</p>
              </div>
            </div>

            {/* Project Title & Tech Stack */}
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-orange-400">{title}</h3>
              <span className="text-sm bg-gray-800 text-orange-500 px-2 py-1 rounded">{category}</span>
            </div>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 mt-3">
              {technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs bg-gray-800 text-neutral-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links to Code & Live Demo */}
            <div className="flex justify-between mt-5">
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-400 transition">
                <Code className="mr-2" size={18} />
                Code
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-400 transition">
                <ExternalLink className="mr-2" size={18} />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

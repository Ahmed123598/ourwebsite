import {
  GlobeAltIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ShoppingBagIcon,
  CogIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Building fast and modern web apps using React.js & Next.js.",
    icon: <CodeBracketIcon className="w-10 h-10 text-orange-500" />,
    imgUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Design",
    desc: "Crafting beautiful, responsive UI with Figma & Tailwind CSS.",
    icon: <PaintBrushIcon className="w-10 h-10 text-orange-500" />,
    imgUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Sites",
    desc: "Showcase your skills & projects with clean portfolio sites.",
    icon: <DocumentTextIcon className="w-10 h-10 text-orange-500" />,
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
   {
    title: "WordPress Development",
    desc: "Custom themes, plugins & Elementor-based WordPress sites.",
    icon: <GlobeAltIcon className="w-10 h-10 text-orange-500" />,
    imgUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80", // ✅ Valid WordPress image
  },
    {
    title: "E-commerce Stores",
    desc: "Developing scalable stores with secure payment integration.",
    icon: <ShoppingBagIcon className="w-10 h-10 text-orange-500" />,
    imgUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80", // ✅ Valid E-commerce image
  },
  {
    title: "Maintenance & Updates",
    desc: "Ongoing updates, performance tuning & backups.",
    icon: <CogIcon className="w-10 h-10 text-orange-500" />,
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SEO Optimization",
    desc: "Improve Google rankings with tailored SEO strategies.",
    icon: <ArrowTrendingUpIcon className="w-10 h-10 text-orange-500" />,
    imgUrl:
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        My{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {services.map(({ title, desc, icon, imgUrl }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-orange-500 transition-transform duration-300 transform hover:scale-105 group overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={imgUrl}
                alt={title}
                className="rounded-lg w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-4 flex items-center space-x-3">
              {icon}
              <h3 className="text-2xl font-semibold text-orange-400">{title}</h3>
            </div>
            <p className="text-neutral-400 mt-2">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

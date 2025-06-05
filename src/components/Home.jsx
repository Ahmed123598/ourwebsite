import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-6"
      >
        Turn Ideas Into {" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Impactful Websites
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-center text-neutral-400 max-w-4xl mx-auto mb-10"
      >
        I’m a freelance web developer focused on helping startups, individuals, and small businesses grow online with modern, high-performance websites. From eye-catching designs to functional e-commerce stores — I’ll bring your vision to life.
      </motion.p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <Link
          to="portfolio"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-center font-medium transition hover:opacity-90"
        >
          View My Portfolio
        </Link>
        <Link
          to="contact"
          className="py-3 px-6 rounded-md border border-orange-500 text-orange-500 transition hover:bg-orange-500/10 text-center"
        >
          Let's Discuss Your Project
        </Link>
      </div>

      {/* Services Section */}
      <h2 className="text-3xl font-bold text-center mb-2">
        Services <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">I Offer</span>
      </h2>
      <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
        I offer flexible and budget-friendly web solutions — whether you're just starting out or scaling up. Here’s how I can help:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {[
          { title: "Web Development", desc: "Responsive and high-performance websites built using React.js, Node.js, and modern JavaScript frameworks." },
          { title: "Web Design", desc: "Clean, intuitive, and user-focused designs created with Tailwind CSS and Figma mockups for an excellent user experience." },
          { title: "Portfolio Sites", desc: "Custom portfolio websites tailored for freelancers, creatives, and professionals to showcase their work effectively." },
          { title: "WordPress Development", desc: "Fully customized WordPress websites with themes, plugins, and Elementor integration for flexible content management." },
          { title: "E-commerce Stores", desc: "Scalable online stores with secure payment gateways, product management, shopping carts, and admin dashboards." },
          { title: "SEO Optimization", desc: "Boost your online presence with on-page SEO, meta tags, keyword optimization, and performance improvements." },
        ].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-orange-500 transition-transform duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-orange-400">{service.title}</h3>
            <p className="text-neutral-400 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Video Showcase */}
      <div className="flex flex-col lg:flex-row mt-14 justify-center gap-6 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <video autoPlay loop muted className="rounded-xl w-full border border-orange-700 shadow-lg shadow-orange-400/20">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2 font-medium">Project Showcase</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <video autoPlay loop muted className="rounded-xl w-full border border-orange-700 shadow-lg shadow-orange-400/20">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2 font-medium">My Workflow</p>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Web Journey?</h2>
        <p className="mb-8 text-lg text-neutral-400 max-w-3xl mx-auto">
          Whether you need a sleek portfolio, a business website, or an online store — I’m here to make it happen. Let’s connect and build something amazing together.
        </p>
        <Link
          to="contact"
          className="bg-gradient-to-r from-orange-500 to-orange-700 py-4 px-8 rounded-lg text-lg font-bold inline-block hover:from-orange-600 hover:to-orange-800 transition-all"
        >
          Book a Free Consultation
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;

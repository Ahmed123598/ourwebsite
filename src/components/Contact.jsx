import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Intro Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-5xl font-bold mb-6">
            Connect with <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">Me</span>
          </h2>
        <p className="text-lg text-orange-400 font-bold mt-4">
   Ready to launch your website? Let's build something amazing together!
</p>


        </motion.div>

        {/* Contact Section */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} 
          className="mt-12 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Let's Connect</h3>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-6">
              <a href="mailto:skshahbaz783@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                📩 Email: skshahbaz783@gmail.com
              </a>
              <a href="tel:+919515397556" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                📞 Call: +91 9515397556
              </a>
            </div>
          </div>

          {/* Social Icons (Using FontAwesome) */}
          <div className="mt-8">
            
            <div className="flex justify-center space-x-4 text-white text-3xl">
              {/* WhatsApp */}
              <motion.a href="https://wa.me/919515397556" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition-all"
              >
                <i className="fab fa-whatsapp"></i>
              </motion.a>
              
              {/* LinkedIn */}
              <motion.a href="https://www.linkedin.com/in/shahbaz-ahmed-821043352/" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              
              {/* X (Twitter) */}
              <motion.a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-500 transition-all"
              >
                <i className="fab fa-x-twitter"></i>
              </motion.a>
              
              {/* Instagram */}
              <motion.a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-all"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

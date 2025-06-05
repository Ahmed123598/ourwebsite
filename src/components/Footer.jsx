import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-700 bg-gradient-to-br from-black via-gray-900 to-black text-neutral-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">About Me</h3>
          <p className="text-sm">
            I'm a freelance web developer specializing in modern, high-performance websites and applications. I work with React, Next.js, Tailwind CSS, and WordPress to bring ideas to life.
          </p>
          <Link to="/about" className="mt-4 inline-block text-orange-500 hover:text-orange-400 transition">
            Learn More →
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-500 transition">Portfolio</Link></li>
            <li><Link to="/testimonials" className="hover:text-orange-500 transition">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">Reach out for inquiries, collaborations, or freelance work.</p>
          <p className="text-sm">Email: <a href="mailto:skshahbaz783@gmail.com" className="text-orange-500 hover:text-orange-400 transition">skshahbaz783@gmail.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+919515397556" className="text-orange-500 hover:text-orange-400 transition">+91 9515397556</a></p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/shahbaz-ahmed-821043352/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/ahmed123598" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/shahbaz_dev" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm border-t border-gray-700 mt-10 pt-4">
        © {new Date().getFullYear()} Shahbaz | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

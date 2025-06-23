import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Import your updated logo image
import logo from "../assets/hi.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-gray-700 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container px-6 mx-auto relative flex justify-between items-center">
        
        {/* Logo & Branding */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Robust Ark Technologies Logo"
         className="h-12 sm:h-20 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-10">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-500 transition-all">
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-6">
          <button onClick={toggleNavbar} className="lg:hidden text-white">
            {mobileDrawerOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

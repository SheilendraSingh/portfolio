import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/", label: "About" },
    { to: "/education", label: "Education" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contacts", label: "Contacts" },
  ];

  return (
    <header className="fixed   top-0 left-0 w-full bg-[#1a0b2e] text-gray-400 z-50 shadow-md">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-7">
        {/* Logo left */}
        <div className="text-2xl font-bold hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
          <Link to="/">PortFolio</Link>
        </div>

        {/* Desktop Nav - links right */}
        <ul className="hidden lg:flex gap-8 ml-auto">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-purple-900 focus:outline-none lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a0b2e] px-6 pb-6 space-y-4 text-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="block hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

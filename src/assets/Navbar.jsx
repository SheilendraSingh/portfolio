import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-[#1a0b2e] text-gray-400 ">
      <nav className="fixed flex items-center justify-between w-2/3 px-8 py-4 bg-[#1a0b2e] ">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
          <Link to="/">PortFolio</Link>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8 ml-56">
          <li className="cursor-pointer hover:text-white  transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            <Link to="/">About</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            <Link to="/education">Education</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            <Link to="skills/">Skills</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

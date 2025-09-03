import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import Education from "./assets/Education";
import Skills from "./assets/Skills";
import Projects from "./assets/Projects";
import Contacts from "./assets/Contact";

export default function Portfolio() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

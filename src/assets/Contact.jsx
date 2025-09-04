import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ju8aw3i",
        "template_wgj5jlc",
        formData,
        "ahqfK6RellGq_CL5V"
      )
      .then(
        () => {
          alert(
            `Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send. Try again later.");
          console.error(error);
        }
      );

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] bg-[#1a0b2e] text-white px-8 z-0 overflow-visible">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Get in Touch (only this moves above form on mobile) */}
        <div className="order-1 md:order-none md:hidden mb-8 ">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">
            Get In Touch
          </h2>
          <p className="text-[#b0a8c4]">
            Feel Free to Get in Touch With Me. I am Always Open to Discussing
            New Projects, Creative Ideas or New Opportunities to be Part of Your
            Visions.
          </p>
        </div>

        {/* Contact Form */}
        <div className="order-2 md:order-1 md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-[#24113b] border border-purple-500/30 
                 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-[#24113b] border border-purple-500/30 
                 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] text-white"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded bg-[#24113b] border border-purple-500/30 
                 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-900 hover:bg-[#8652a8] text-white font-semibold 
                 px-6 py-3 rounded transition-colors w-1/3 m-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side (desktop shows full block) */}
        <div className="order-3 md:order-2 md:w-1/3 space-y-6">
          {/* Show Get in Touch ONLY on md and above */}
          <div className="hidden md:block mb-20">
            <h2 className="text-4xl font-bold mb-6 text-purple-400">
              Get In Touch
            </h2>
            <p className="text-[#b0a8c4]">
              Feel Free to Get in Touch With Me. I am Always Open to Discussing
              New Projects, Creative Ideas or New Opportunities to be Part of
              Your Visions.
            </p>
          </div>

          {/* Contact Info always stays in right column */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Contact</h3>
            <p className="mb-2">Kota, Rajasthan</p>
            <p className="mb-2">+91-9057097720</p>
            <p className="mb-2">sheilendra31@gmail.com</p>
            <div className="flex space-x-4 mt-4 mb-5">
              <a
                href="https://www.linkedin.com/in/sheilendra-singh-780175229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6c63ff] hover:text-[#857dff] text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SheilendraSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e0e0e0] hover:text-[#6c63ff] text-2xl transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import "./Skill.css";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  const skills = [
    {
      name: "JavaScript",
      color: "bg-yellow-400",
      desc: "ES6+, DOM, Functions",
    },
    { name: "C++", color: "bg-gray-600", desc: "OOP, STL" },
    { name: "ReactJS", color: "bg-blue-500", desc: "Components, Hooks" },
    { name: "NodeJS", color: "bg-green-500", desc: "Express, APIs" },
    { name: "MongoDB", color: "bg-green-700", desc: "NoSQL, Aggregation" },
    {
      name: "HTML",
      color: "bg-orange-500",
      desc: "Markup language for web pages",
    },
    { name: "CSS", color: "bg-blue-300", desc: "Flex, Grid, Animations" },
    { name: "Tailwind", color: "bg-teal-400", desc: "Responsive UI" },
    { name: "C++", color: "bg-gray-600", desc: "OOP, STL" },
  ];

  useEffect(() => {
    // Trigger animation on mount / route change
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 100); // slight delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] bg-[#1a0b2e] text-white px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-8 p-32">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center m-6">
            {/* Button with animated fill */}
            <div className="relative w-full h-12 border rounded-full overflow-hidden p-5">
              <div
                className={`${skill.color} absolute top-0 left-0 h-full ${
                  animate ? "animate-fill" : "w-0"
                }`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              ></div>
              <span className="relative z-10 flex items-center justify-center h-full text-white font-bold">
                {skill.name}
              </span>
            </div>
            {/* Description */}
            <p className="mt-2 text-sm text-gray-300 text-center">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

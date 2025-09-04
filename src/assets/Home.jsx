import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Home() {
  const navigate = useNavigate();
  const highlight =
    "text-purple-400 hover:text-purple-300 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]";

  const fullText = `I’m passionate Software Developer with experience in Mern Stack and Problem-Solving. Seeking a Role in software development Industry to enhance and explore my technical knowledge gained at Rajasthan Technical University in the last Couple of years. Currently pursuing B.Tech from Gurukul Institute OF Engineering And Technology, Kota and work hard on Creating Projects & Practicing Questions of Data Structures & Algorithm From Platform Like LeetCode, GeeksForGeeks etc.`;

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 20); // speed in ms per character
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] bg-[#1a0b2e] text-white pt-24 px-8">
      {/* Left side - text */}
      <div className="flex-1 text-center md:text-left ml-6 md:ml-40 group">
        <h1 className="text-xl md:text-4xl font-bold mb-4">
          Hi, I’m <span className={highlight}>Sheilendra Singh</span>
        </h1>
        <p className="text-base md:text-l text-gray-300  mb-6 leading-relaxed">
          {displayed.split(" ").map((word, idx) => {
            // Wrap highlighted words
            const highlightWords = [
              "Software",
              "Developer",
              "Mern",
              "Stack",
              "Problem-Solving",
              "Rajasthan",
              "Technical",
              "University",
              "Gurukul",
              "Institute",
              "OF",
              "Engineering",
              "And",
              "Technology,",
              "Kota",
              "LeetCode,",
              "GeeksForGeeks",
            ];
            return (
              <span
                key={idx}
                className={highlightWords.includes(word) ? highlight : ""}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>

        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 bg-purple-950 rounded-full font-semibold shadow-lg 
             transition-all duration-300 
             hover:scale-110 hover:bg-transparent hover:text-purple-400 hover:bg-[radial-gradient(circle,rgba(139,92,246,0.9)_5%,rgba(26,11,46,0)_110%)]
             hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
        >
          View Projects
        </button>
      </div>

      {/* Right side - image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center group">
          <div
            className="absolute w-[280px] h-[280px] rounded-full 
                  bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(26,11,46,0)_70%)] 
                  blur-2xl opacity-60 scale-100 
                  transition-all duration-200
                  group-hover:scale-125 group-hover:opacity-100 
                  group-hover:bg-[radial-gradient(circle,rgba(139,92,246,0.9)_0%,rgba(26,11,46,0)_90%)]"
          ></div>
          <img
            src="/pngpic.png"
            alt="Sheilendra Singh"
            className="w-full h-full rounded-full object-cover relative z-10 transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

import { FaPlane } from "react-icons/fa";
import { useState } from "react";
import "./Education.css";
export default function Education() {
  const [open, setOpen] = useState(null);
  const education = [
    {
      title: "B.Tech.",
      institute: "GIET, RTU",
      year: "2020-24",
      description:
        "Successfully completed Bachelor’s Degree in Computer Science and Engineerig from Gurukul Institute of Engineering & Technology, RTU with 8.52 CGPA. Exploring domains like Web Development, Problem Solving, MERN Stack, and more. Participated in Workshops, Cultural Events, and built projects.",
      side: "left",
    },
    {
      title: "XIIth",
      institute: "BSER, Ajmer",
      year: "2018-19",
      description:
        "Successfully completed Senior Secondary Education from Tilak Senior Secondary School, Kota with Board of Secondary Education Rajasthan. Stream of Science-Mathematics with 91.2%. Completed Practicals in Physics & Chemistry.",
      side: "right",
    },
    {
      title: "Xth",
      institute: "BSER, Ajmer",
      year: "2016-17",
      description:
        "Successfully completed Secondary Education from Tilak Senior Secondary School, Kota with Board of Secondary Education Rajasthan with 91.5%s",
      side: "left",
    },
  ];
  return (
    <section className="pt-24 flex-col  md:flex-row items-center justify-center min-h-[calc(100vh-80px)] bg-[#1a0b2e] text-white px-8 z-0">
      <div className="relative max-w-5xl w-full m-auto">
        {/* Vertical Line */}
        <div className="absolute min-h-[cal(100vh-5rem)] left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 rounded-lg">
          <FaPlane className="absolute text-blue-600 text-2xl  plane-animation" />
        </div>

        {education.map((item, index) => (
          <div
            key={index}
            className={`flex w-full mb-6 ${
              item.side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-5/12 bg-gradient-to-b from-blue-950 to bg-purple-950  rounded-lg p-4 border-t-4  min-h-[180px] md:w-5/12 md:min-h-[220px] ${
                item.side === "left" ? "border-black" : "border-black"
              }`}
              onClick={() => setOpen(index)}
            >
              <h3 className="text-lg font-bold text-blue-500">{item.title}</h3>
              <h4 className="text-md font-semibold text-orange-600">
                {item.institute}
              </h4>
              <p className="text-sm italic mb-2">{item.year}</p>
              <p className="text-sm text-white leading-relaxed md:line-clamp-none line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {open !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 md:hidden ">
            <div className="bg-white text-black rounded-xl p-6 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
                onClick={() => setOpen(null)}
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-blue-600">
                {education[open].title}
              </h3>
              <h4 className="text-md font-semibold text-orange-600">
                {education[open].institute}
              </h4>
              <p className="text-sm italic mb-2">{education[open].year}</p>
              <p className="text-sm">{education[open].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

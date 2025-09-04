// export default function Projects() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#1a0b2e] text-white px-8"></section>
//   );
// }
export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#1a0b2e] to-purple-900 py-20 px-6 md:px-20">
      <div className="space-y-20 ">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-1/3 m-auto mb-24">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase text-purple-400 mb-2">
              <a href="https://chatless-1.onrender.com">Featured Product</a>
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              ChatLess <span className="text-sm">workng on it</span>
            </h3>
            <p className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-200 text-sm leading-relaxed shadow-lg">
              <a href="https://github.com/SheilendraSingh/ChatLess">
                <p>
                  1. ChatLess is a lightweight messaging platform built with
                  React and Node.js, focusing on fast, distraction-free
                  communication.
                </p>{" "}
                <p>
                  2. Developed with real-time messaging using Socket.IO,
                  ChatLess ensures seamless and efficient conversations.{" "}
                </p>
                <p>
                  3. Optimized for performance, ChatLess handles multiple users
                  with minimal latency and a clean UI.
                </p>
                <p>
                  4. Features include user authentication, persistent chat
                  history, and intuitive notifications – all crafted with a
                  modern tech stack.
                </p>
              </a>{" "}
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-1/3 m-auto">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase text-purple-400 mb-2">
              <a href="https://portfolio-sheilendra.netlify.app/">
                Featured Product
              </a>
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Fusic <span className="text-sm">workng on it</span>
            </h3>
            <p className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-200 text-sm leading-relaxed shadow-lg">
              <a href="https://github.com/SheilendraSingh/Fusic">
                <p>
                  1. Fusic is a full-stack music streaming web app built with
                  React, Node.js, and MongoDB.
                </p>{" "}
                <p>
                  2.It allows users to upload, stream, and manage their music
                  library effortlessly.{" "}
                </p>
                <p>
                  3. Real-time updates and interactive playlists are implemented
                  using WebSockets for smooth playback and collaboration.
                </p>
                <p>
                  4. The app leverages Cloudinary for media storage and
                  optimized delivery, ensuring fast and reliable audio
                  streaming.
                </p>
                <p>
                  5. Fusic integrates user authentication, search functionality,
                  and dynamic playlists for a personalized listening experience.
                </p>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

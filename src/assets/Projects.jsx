// export default function Projects() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#1a0b2e] text-white px-8"></section>
//   );
// }
export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#1a0b2e] to-purple-900 py-20 px-6 md:px-20">
      <div className="space-y-20 mt-32">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-1/3 m-auto mb-32">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase text-purple-400 mb-2">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">ChatLess</h3>
            <p className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-200 text-sm leading-relaxed shadow-lg">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-1/3 m-auto">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase text-purple-400 mb-2">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Another Project
            </h3>
            <p className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-200 text-sm leading-relaxed shadow-lg">
              Another app showcasing financial insights and dashboards. Users
              can visualize transactions, manage goals, and track expenses with
              ease using interactive charts and modern UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

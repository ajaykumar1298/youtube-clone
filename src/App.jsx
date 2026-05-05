import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/youtube/videos?page=" + page,
      );
      setVideos(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="text-xl font-bold text-red-500">YouTube-clone</div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-center items-center gap-2 flex-wrap mb-6">
          <button
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-red-600 transition disabled:opacity-40"
            disabled={!videos?.previousPage || loading}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <span className="text-lg font-semibold">{page}</span>

          <button
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-red-600 transition disabled:opacity-40"
            disabled={!videos?.nextPage || loading}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>

        {/*  Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos?.data?.map((video, index) => {
            const snippet = video?.items?.snippet || video?.snippet;

            return (
              <div
                key={video.id || index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
              >
                {/* Thumbnail */}
                <img
                  src={snippet?.thumbnails?.high?.url}
                  alt={snippet?.title}
                  className="w-full h-48 object-cover"
                />

                {/* Info */}
                <div className="p-4">
                  <h2 className="text-sm font-semibold line-clamp-2 mb-2">
                    {snippet?.title}
                  </h2>

                  <p className="text-xs text-gray-400">
                    {snippet?.channelTitle}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(snippet?.publishedAt).toDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Loader */}
        {loading && (
          <p className="text-center mt-6 text-gray-400">Loading videos...</p>
        )}
      </div>
    </div>
  );
}

export default App;

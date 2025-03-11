import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-300 to-blue-500 shadow-xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-green-700 via-amber-500 to-green-800 bg-clip-text text-center">
        MuslimHub
      </h1>
      <div className="w-full max-w-xs sm:max-w-md mt-6">
        <img src="/image/Img1.png" alt="quran" className="rounded-xl w-full" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
        <button
          onClick={() => navigate("/surah")}
          className="p-4 sm:p-5 col-span-2 w-full bg-green-600 text-white text-lg sm:text-xl font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-green-700"
        >
          📖 Baca Quran
        </button>
        <button
          onClick={() => navigate("/jadwalsalat")}
          className="p-3 bg-yellow-500 text-white text-md sm:text-lg font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-600"
        >
          🕌 Jadwal Salat
        </button>
        <button
          onClick={() => navigate("/doa")}
          className="p-3 bg-indigo-500 text-white text-md sm:text-lg font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-600"
        >
          🤲 Doa Harian
        </button>
      </div>
    </div>
  );
}

export default Home;

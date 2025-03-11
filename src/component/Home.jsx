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
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        <button
          onClick={() => navigate("/surah")}
          className="p-3 bg-green-600 text-white text-md sm:text-lg font-semibold rounded-xl hover:cursor-pointer shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 ring-2 ring-green-400 ring-opacity-50"
        >
          📖 Baca Quran
        </button>
        <button
          onClick={() => navigate("/jadwalsalat")}
          className="p-3 bg-yellow-500 text-white text-md sm:text-lg font-semibold hover:cursor-pointer rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-600 ring-2 ring-yellow-300 ring-opacity-50"
        >
          🕌 Jadwal Salat
        </button>
        <button
          onClick={() => navigate("/doa")}
          className="p-3 bg-indigo-500 text-white text-md sm:text-lg font-semibold hover:cursor-pointer rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 ring-2 ring-indigo-300 ring-opacity-50"
        >
          🤲 Doa Harian
        </button>
        <button
          onClick={() => navigate("/asmaulHusna")}
          className="p-3 bg-indigo-500 text-white text-md sm:text-lg hover:cursor-pointer font-semibold rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 ring-2 ring-indigo-300 ring-opacity-50"
        >
          ✨ Asmaul Husna
        </button>
      </div>
    </div>
  );
}

export default Home;

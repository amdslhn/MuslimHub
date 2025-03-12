import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AsmaulHusna() {
  const [AsmaulHusna, setAsmaulHusna] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://asmaul-husna-api.vercel.app/api/all`)
      .then((res) => res.json())
      .then((data) => setAsmaulHusna(data.data));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white px-4 pt-28 pb-10 flex flex-col items-center">
      {/* Header */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-b-3xl z-50 shadow-lg">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer hover:text-gray-200 transition"
        >
          <span className="text-xl">⬅️</span> <span>Kembali</span>
        </div>
        <h2 className="mt-2 text-3xl font-extrabold tracking-wide">Asmaul Husna</h2>
      </div>

      {/* List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {AsmaulHusna.map((item) => (
          <div
            key={item.urutan}
            className="bg-white border border-blue-200 hover:border-indigo-300 shadow-sm hover:shadow-md rounded-2xl px-5 py-4 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-700 font-bold text-lg">{item.urutan}. {item.latin}</span>
              <span className="text-3xl font-arabic text-gray-800 text-right">{item.arab}</span>
            </div>
            <p className="text-gray-700 text-sm italic">{item.arti}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AsmaulHusna;

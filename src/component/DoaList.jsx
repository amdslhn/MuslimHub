import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoaList() {
  const [doaHarian, setDoaHarian] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://open-api.my.id/api/doa")
      .then((res) => res.json())
      .then((data) => setDoaHarian(data));
  }, []);

  const handleClick = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white flex flex-col items-center px-4 pt-28 pb-10">
      {/* Header */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-b-3xl z-50 shadow-lg">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer hover:text-gray-200 transition"
        >
          <span className="text-xl">⬅️</span> <span>Kembali</span>
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-wide">Pilih Doa Harian</h1>
      </div>

      {/* List Doa */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {doaHarian.map((doa) => (
          <div
            key={doa.id}
            onClick={() => handleClick(doa.id)}
            className="group bg-white border border-blue-500 hover:border-indigo-500 hover:bg-indigo-50 shadow-md hover:shadow-lg rounded-2xl px-5 py-4 flex items-center gap-4 cursor-pointer transition-all duration-300"
          >
            <div className="bg-blue-600 group-hover:bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg transition">
              {doa.id}
            </div>
            <p className="text-lg font-semibold text-slate-800 group-hover:text-indigo-700 transition">
              {doa.judul}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoaList;

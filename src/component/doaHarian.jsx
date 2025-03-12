import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DoaHarian() {
  const [doa, setDoa] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://open-api.my.id/api/doa/${id}`)
      .then((res) => res.json())
      .then((data) => setDoa(data));
  }, [id]);

  return (
    <div className="w-full min-h-screen max-w-3xl mx-auto px-4 pt-28 pb-10">
      {/* Header */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 shadow-lg rounded-b-3xl z-50">
        <div 
          onClick={() => navigate("/doa")} 
          className="flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer hover:text-gray-200 transition"
        >
          <span className="text-xl">⬅️</span> <span>Kembali</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4">
          <div className="border-2 border-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold bg-white text-blue-700 shadow-md">
            {doa.id}
          </div>
          <h1 className="text-2xl font-extrabold tracking-wide">{doa.judul}</h1>
        </div>
      </div>

      {/* Konten Doa */}
      <div className="mt-6 bg-white p-6 rounded-2xl shadow-xl space-y-6">
        <div className="text-4xl leading-relaxed text-right noto text-gray-900">
          {doa.arab}
        </div>
        <div className="text-lg italic text-gray-700">{doa.latin}</div>
        <div className="text-lg text-gray-800">{doa.terjemah}</div>
      </div>
    </div>
  );
}

export default DoaHarian;

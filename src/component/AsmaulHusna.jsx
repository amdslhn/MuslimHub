import { useEffect, useState } from "react";

function AsmaulHusna() {
  const [AsmaulHusna, setAsmaulHusna] = useState([]);

  useEffect(() => {
    fetch(`https://asmaul-husna-api.vercel.app/api/all`)
      .then((res) => res.json())
      .then((data) => setAsmaulHusna(data.data));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <div onClick={() => navigate("/")} className="flex font-semibold pb-2 hover:cursor-pointer hover:text-blue-700">⬅️Back</div>
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Asmaul Husna</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AsmaulHusna.map((item) => (
          <div
            key={item.urutan}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
          >
            <p className="text-xl font-bold text-blue-700">{item.urutan}. {item.latin}</p>
            <p className="text-3xl text-gray-900 font-semibold text-right mb-2">{item.arab}</p>
            <p className="text-gray-700 text-sm italic">{item.arti}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AsmaulHusna;

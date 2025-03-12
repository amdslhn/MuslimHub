import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Surah() {
  const [surah, setSurah] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, []);

  const convertToArabicNumeric = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => arabicNumbers[digit])
      .join("");
  };

  const handleClick = (nomor) => {
    navigate(`/surah/${nomor}`);
  };

  return (
    <div className="m-4 max-w-[1200px] mx-auto">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1170px] bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-4 shadow-lg rounded-b-2xl z-50">
        <div 
          onClick={() => navigate("/")} 
          className="flex items-center gap-2 text-lg font-semibold cursor-pointer text-white hover:text-gray-200 transition duration-300 px-4 py-2 w-fit rounded-lg bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg mx-auto"
        >
          <span className="text-xl">⬅️</span>
          <span>Kembali</span>
        </div>
        <h1 className="text-4xl font-extrabold mt-2">📖 Daftar Surah</h1>
      </div>
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {surah.map((surat) => (
          <div 
            key={surat.nomor} 
            onClick={() => handleClick(surat.nomor)} 
            className="cursor-pointer bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-xl p-6 flex items-center gap-6 transform hover:scale-105 transition-all duration-300"
          >
            {/* Nomor Surah */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white noto w-14 h-14 flex items-center justify-center text-3xl font-bold rounded-full shadow-md">
              {convertToArabicNumeric(surat.nomor)}
            </div>

            {/* Detail Surah */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{surat.namaLatin} - {surat.nama}</h2>
              <p className="text-gray-600 text-lg">{surat.jumlahAyat} Ayat</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Surah;

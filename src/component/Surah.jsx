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
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-4 shadow-lg rounded-b-2xl z-50">
        <h1 className="text-3xl font-bold">Daftar Surah</h1>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {surah.map((surat) => (
          <div 
            key={surat.nomor} 
            onClick={() => handleClick(surat.nomor)} 
            className="cursor-pointer bg-white border border-gray-300 shadow-lg hover:shadow-xl rounded-xl p-5 flex items-center gap-4 transform hover:scale-105 transition duration-300"
          >
            <div className="bg-blue-500 text-white noto w-12 h-12 flex items-center justify-center text-2xl font-semibold rounded-full">
              {convertToArabicNumeric(surat.nomor)}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">{surat.namaLatin} - {surat.nama}</h2>
              <p className="text-gray-600">{surat.jumlahAyat} Ayat</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Surah;
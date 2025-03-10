import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Surah() {
  const [surah, setSurah] = useState([]);
  const navigate= useNavigate();

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
    <div className="m-2 max-w-[1200px] mx-auto">
      <div className="text-3xl font-bold">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] rounded-b-2xl bg-blue-400 text-center py-4 shadow-md z-50">
      <h1 className="text-slate-900">Daftar Surah</h1>
      </div>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center shadow-md  pt-8">
        {surah.map((surat) => (
          <div key={surat.nomor} className="w-full">
            <div onClick ={() => handleClick(surat.nomor)} className="hover:cursor-pointer hover:scale-105 border-1 bg-slate-100 border-sky-600 rounded-2xl">
            <div className="flex pl-3 pt-1 items-center">
              <div className=" border-1 w-10 h-10 text-center pt-2 rounded-full">
                <div className="noto text-xl">{convertToArabicNumeric(surat.nomor)}</div>
              </div>
              <div className="pl-3">{surat.namaLatin} <span> - {surat.nama}</span>
              <span className="block">{surat.jumlahAyat} Ayat</span></div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Surah;





 
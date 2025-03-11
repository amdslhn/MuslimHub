import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Qori from "./Qori";

function Ayat() {
  const [surah, setSurah] = useState([]);
  const { nomor } = useParams();
  const [ayat, setAyat] = useState([]);
  const [qori, setQori] = useState("01");

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, [nomor]);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => setAyat(data.data.ayat));
  }, [nomor]);
  
  const convertToArabicNumeric = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => arabicNumbers[digit])
      .join("");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full lg:max-w-[850px] bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-5 shadow-xl rounded-b-2xl z-50">
        <div className="flex items-center space-x-4 px-6">
          <div className="border-2 border-white w-14 h-14 flex items-center justify-center rounded-full text-xl font-bold bg-white text-blue-600">
            {surah.nomor}
          </div>
          <h1 className="text-3xl font-bold tracking-wide">
            {surah.namaLatin} - {surah.nama}
          </h1>
        </div>
        <p className="text-base mt-2 font-light">Arti: {surah.arti}</p>
        <p className="text-base font-light mb-2">Tempat turun: {surah.tempatTurun}</p>
        <Qori setQori={setQori} />
      </div>

      <div className="mt-44 space-y-8">
        {ayat.map((ayat) => (
          <div key={ayat.nomorAyat} className="border noto border-indigo-400 rounded-2xl shadow-lg p-6 bg-gray-50">
            <div className="text-right text-4xl font-arabic leading-relaxed text-black">
              {ayat.teksArab} <span className="text-lg text-black">({convertToArabicNumeric(ayat.nomorAyat)})</span>
            </div>
            <audio src={ayat.audio[qori]} controls className="mt-4" />
            <div className="italic text-lg text-gray-600 mt-4">{ayat.teksLatin}</div>
            <p className="text-lg text-gray-800 mt-3 leading-relaxed">{ayat.teksIndonesia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ayat;
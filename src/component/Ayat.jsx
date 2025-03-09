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
    <div className="max-w-[1200px] mx-auto">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-blue-500 text-center py-2 shadow-md z-50 rounded-b-xl">
        <div className="flex pl-2 items-center ">
          <div className="border-2 border-green-300 w-10 h-10 text-center rounded-full shadow-md">
            <p className="bg-gradient-to-br from-green-200 to-green-300 bg-clip-text text-transparent font-bold text-2xl">
              {surah.nomor}
            </p>
          </div>
          <h1 className="pl-2 bg-gradient-to-br from-green-200 to-green-300 bg-clip-text text-transparent text-3xl font-bold noto">
            {surah.namaLatin}-{surah.nama}
          </h1>
        </div>
        <div className="noto text-lg text-start pl-2 pt-1 bg-gradient-to-br from-green-50 via-amber-100 to-green-200 bg-clip-text text-transparent
        ">
          
            <p>Arti : {surah.arti}</p>
  
              <div>Tempat turun : {surah.tempatTurun}</div>
          <Qori setQori={setQori} />
        
          </div>
      </div>

      <div className="mt-39 space-y-4">
        {ayat.map((ayat) => (
          <div key={ayat.nomorAyat} className="border-2 border-blue-500 rounded-xl p-3 ">
                <div className="text-3xl/15 text-right p-2 noto">
              {ayat.teksArab} <span>({convertToArabicNumeric(ayat.nomorAyat)})</span>
            
            </div>
            <div>
                <audio src={ayat.audio[qori]} controls className="mb-4"></audio>
            </div>
            <div className="italic text-lg mb-4">{ayat.teksLatin}</div>
            <p className="text-lg">{ayat.teksIndonesia}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ayat;

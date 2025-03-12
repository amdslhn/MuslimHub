import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Qori from "./Qori";

function Ayat() {
  const [surah, setSurah] = useState([]);
  const { nomor } = useParams();
  const [ayat, setAyat] = useState([]);
  const [qori, setQori] = useState("01");
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (currentPlaying) {
      const handleEnded = () => setCurrentPlaying(null);
      currentPlaying.addEventListener("ended", handleEnded);
      return () => currentPlaying.removeEventListener("ended", handleEnded);
    }
  }, [currentPlaying]);

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
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full lg:max-w-[850px] bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center pt-2 pb-1 shadow-lg rounded-b-2xl z-50">
        <div 
          onClick={() => navigate("/surah")} 
          className="flex items-center gap-2 text-lg font-semibold cursor-pointer text-white hover:text-gray-200 transition duration-300 px-4 py-2 w-fit rounded-lg bg-blue-800 hover:bg-blue-900 shadow-md hover:shadow-lg mx-auto"
        >
          <span className="text-xl">⬅️</span>
          <span>Kembali</span>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="border-2 border-white w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold bg-white text-blue-700 shadow-md">
            {surah.nomor}
          </div>
          <h1 className="text-3xl font-extrabold tracking-wide">
            {surah.namaLatin} - {surah.nama}
          </h1>
        </div>
        <p className="text-lg mt-1 lg:mt-0 font-light">Arti: {surah.arti}</p>
        <p className="text-lg font-light">Tempat turun: {surah.tempatTurun}</p>
        <Qori setQori={setQori} />
      </div>
      <div className="mt-47 lg:mt-50 space-y-8">
        {ayat.map((ayat) => (
          <div 
            key={ayat.nomorAyat} 
            className="border border-indigo-400 rounded-2xl shadow-lg p-6 bg-gray-50 hover:bg-white transition-all duration-300 transform"
          >
            <div className="text-right text-4xl noto leading-relaxed text-black">
              {ayat.teksArab} <span className="text-lg text-gray-700">({convertToArabicNumeric(ayat.nomorAyat)})</span>
            </div>

            <div className="mt-4 flex gap-4 items-center">
              <audio id={`audio-${ayat.nomorAyat}`} src={ayat.audio[qori]} />
              <button
                onClick={() => {
                  const audio = document.getElementById(`audio-${ayat.nomorAyat}`);
                  if (currentPlaying && currentPlaying !== audio) {
                    currentPlaying.pause();
                    currentPlaying.currentTime = 0;
                  }

                  if (audio.paused) {
                    audio.play();
                    setCurrentPlaying(audio);
                  } else {
                    audio.pause();
                    setCurrentPlaying(null);
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg shadow"
              >
                {currentPlaying && currentPlaying.id === `audio-${ayat.nomorAyat}` && !currentPlaying.paused ? "⏸️ Pause" : "▶️ Play"}
              </button>
            </div>

            <div className="italic text-lg text-gray-600 mt-4">{ayat.teksLatin}</div>
            <p className="text-lg text-gray-800 mt-3 leading-relaxed">{ayat.teksIndonesia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ayat;

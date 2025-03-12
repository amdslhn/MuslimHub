import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function thisMonth(m) {
  return m < 10 ? `0${m}` : m;
}

function date() {
  return getDay < 10 ? `0${getDay}` : getDay;
}

function convertMonth(m) {
  return [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ][m - 1];
}

const todayDate = `${getYear}-${thisMonth(getMonth)}-${date()}`;

function JadwalSalat() {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("pekanbaru");
  const [JadwalSalat, setJadwalSalat] = useState([]);
  const [currentYear, setCurrentYear] = useState(getYear);
  const [currentMonth, setCurrentMonth] = useState(getMonth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json")
      .then((response) => response.json())
      .then((data) => setCity(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/${selectedCity}/${currentYear}/${thisMonth(currentMonth)}.json`
    )
      .then((response) => response.json())
      .then((data) => setJadwalSalat(data));
  }, [selectedCity, currentYear, currentMonth]);

  const handlePreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleCurrentMonth = () => {
    setCurrentMonth(getMonth);
    setCurrentYear(getYear);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl mt-8">
      <div 
        onClick={() => navigate("/")} 
        className="text-blue-700 hover:text-blue-900 font-semibold mb-4 flex items-center gap-2 cursor-pointer w-fit"
      >
        <span className="text-xl">⬅️</span> <span>Kembali</span>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <label htmlFor="kota" className="font-semibold text-gray-700">Pilih Kota:</label>
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="kota"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {city.map((kota, index) => (
              <option key={index}>{kota}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            onClick={handlePreviousMonth}
          >
            ⬅️ Bulan Sebelumnya
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
            onClick={handleCurrentMonth}
          >
            📅 Bulan Ini
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-lg mb-4 shadow-lg">
        <h2 className="text-2xl font-bold">Jadwal Sholat - {selectedCity}</h2>
        <p className="text-lg">{convertMonth(currentMonth)} {currentYear}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm md:text-base border border-gray-300 shadow-sm overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              {["Tanggal", "Imsak", "Subuh", "Terbit", "Dhuha", "Dzuhur", "Ashar", "Maghrib", "Isya"].map((item, idx) => (
                <th key={idx} className="px-3 py-2 border border-black whitespace-nowrap">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {JadwalSalat.map((jadwal) => (
              <tr
                key={jadwal.tanggal}
                className={`transition-all duration-200 ${
                  jadwal.tanggal === todayDate
                    ? "bg-yellow-200 font-semibold text-gray-900"
                    : "hover:bg-gray-100"
                }`}
              >
                <td className="border p-2">{jadwal.tanggal}</td>
                <td className="border p-2">{jadwal.imsyak}</td>
                <td className="border p-2">{jadwal.shubuh}</td>
                <td className="border p-2">{jadwal.terbit}</td>
                <td className="border p-2">{jadwal.dhuha}</td>
                <td className="border p-2">{jadwal.dzuhur}</td>
                <td className="border p-2">{jadwal.ashr}</td>
                <td className="border p-2">{jadwal.magrib}</td>
                <td className="border p-2">{jadwal.isya}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JadwalSalat;

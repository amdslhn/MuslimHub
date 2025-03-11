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
    <div className="w-full max-w-3xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg">
      <div onClick={() => navigate("/")} className="flex font-semibold pb-2 hover:cursor-pointer hover:text-blue-700">⬅️Back</div>
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="kota" className="font-semibold">Pilih Kota:</label>
        <select
          className="border rounded-lg p-2 shadow-md"
          id="kota"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {city.map((kota, index) => (
            <option key={index}>{kota}</option>
          ))}
        </select>
      </div>
      
      <div className="text-center bg-blue-600 text-white py-3 rounded-lg shadow-md">
        <div className="flex justify-between items-center -mt-3 mb-2">
          <button
            className="px-3 py-1 bg-white shadow-2xl font-semibold text-blue-600 hover:cursor-pointer rounded-b-md hover:bg-blue-100"
            onClick={handlePreviousMonth}
          >
            ⬅️ Bulan Sebelumnya
          </button>
          <button
            className="px-3 py-1 bg-white shadow-2xl font-semibold hover:cursor-pointer text-blue-600 rounded-b-md hover:bg-blue-100"
            onClick={handleCurrentMonth}
          >
            📅 Bulan Ini
          </button>
        </div>
        <h2 className="text-xl font-bold">Jadwal Sholat - {selectedCity}</h2>
        <p className="text-lg">{convertMonth(currentMonth)} {currentYear}</p>
      </div>
      
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-black p-2">Tanggal</th>
              <th className="border border-black p-2">Imsak</th>
              <th className="border border-black p-2">Subuh</th>
              <th className="border border-black p-2">Terbit</th>
              <th className="border border-black p-2">Dhuha</th>
              <th className="border border-black p-2">Dzuhur</th>
              <th className="border border-black p-2">Ashar</th>
              <th className="border border-black p-2">Maghrib</th>
              <th className="border border-black p-2">Isya</th>
            </tr>
          </thead>
          <tbody>
            {JadwalSalat.map((jadwal) => (
              <tr
                key={jadwal.tanggal}
                className={`hover:bg-gray-200 ${jadwal.tanggal === todayDate ? "bg-yellow-300 font-bold" : ""}`}
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
import { useEffect, useState } from "react";

const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth = getDate.getMonth() + 1;
const getDay = getDate.getDate();
function thisMonth() {
  if (getMonth < 10) {
    thisMonth = `0${getMonth}`;
  } else {
    thisMonth = getMonth;
  }
  return thisMonth;
}
function date() {
  if (getDay < 10) {
    date = `0${getDay}`;
  } else {
    date = getDay;
  }
  return date;
}


function convertMonth(m) {
  return ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][m - 1];
}


const today = `${getYear}/${thisMonth()}`;
const todayDate = `${getYear}-${thisMonth}-${date()}`;
console.log(todayDate);

function JadwalSalat() {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("pekanbaru");
  const [JadwalSalat, setJadwalSalat] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json"
    )
      .then((response) => response.json())
      .then((data) => setCity(data));
  }, []);
  useEffect(() => {
    fetch(
      `https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/${selectedCity}/${today}.json`
    )
      .then((response) => response.json())
      .then((data) => setJadwalSalat(data));
  }, [selectedCity]);

  return (
    <div className="w-full h-full max-w-[1200px] mx-auto">
      <div className="p-3 justify-end flex">
        <label htmlFor="kota">Pilih Kota :</label>
        <select
          className="w-30"
          name="kota"
          id="kota"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {city.map((kota, index) => (
            <option key={index}>{kota}</option>
          ))}
        </select>
      </div>
      <div className="w-screen h-screen max-w-[1200px]">
        <div className="text-center bg-blue-500 text-white mb-1 py-2 rounded-b-2xl">
          Jadwal Sholat 
          <div className="text-2xl font-bold">{selectedCity}</div> 
          <p className="">{convertMonth(getMonth)} <span>{getYear}</span></p>
        </div>
        <div className="overflow-x-auto">
        <table className="w-full text-center table-fixed min-w-[600px] text-xs">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-black p-1 w-20">Tanggal</th>
              <th className="border border-black p-1 w-16">Imsak</th>
              <th className="border border-black p-1 w-16">Subuh</th>
              <th className="border border-black p-1 w-16">Terbit</th>
              <th className="border border-black p-1 w-16">Dhuha</th>
              <th className="border border-black p-1 w-16">Dzuhur</th>
              <th className="border border-black p-1 w-16">Ashar</th>
              <th className="border border-black p-1 w-16">Maghrib</th>
              <th className="border border-black p-1 w-16">Isya</th>
            </tr>
          </thead>
          <tbody>
            {JadwalSalat.map((jadwal, index) => (
              <tr key={index} className={`hover:bg-gray-100 ${jadwal.tanggal === todayDate ? 'bg-yellow-300 font-bold' : ''}`}>
                <td className="border p-1 whitespace-nowrap">{jadwal.tanggal}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.imsyak}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.shubuh}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.terbit}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.dhuha}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.dzuhur}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.ashr}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.magrib}</td>
                <td className="border p-1 whitespace-nowrap">{jadwal.isya}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default JadwalSalat;

import { useEffect, useState } from "react";

const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth = getDate.getMonth() + 1;
function thisMonth() {
  if (getMonth < 10) {
    thisMonth = `0${getMonth}`;
  } else {
    thisMonth = getMonth;
  }
  return thisMonth;
}

const today = `${getYear}/${thisMonth()}`;
console.log(today);

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
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Imsak</th>
              <th className="border p-2">Subuh</th>
              <th className="border p-2">Terbit</th>
              <th className="border p-2">Dhuha</th>
              <th className="border p-2">Dzuhur</th>
              <th className="border p-2">Ashar</th>
              <th className="border p-2">Maghrib</th>
              <th className="border p-2">Isya</th>
            </tr>
          </thead>
          <tbody>
            {JadwalSalat.map((jadwal, index) => (
              <tr key={index} className="hover:bg-gray-100">
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

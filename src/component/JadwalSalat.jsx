import { useEffect, useState } from "react";

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
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ][m - 1];
}

const todayDate = `${getYear}-${thisMonth(getMonth)}-${date()}`;

function JadwalSalat() {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("pekanbaru");
  const [JadwalSalat, setJadwalSalat] = useState([]);
  const [currentYear, setCurrentYear] = useState(getYear);
  const [currentMonth, setCurrentMonth] = useState(getMonth);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json"
    )
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
    <div className="w-full h-full max-w-[1200px] mx-auto">
      <div className="p-3 justify-end flex">
        <div>
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
      </div>
      <div className="w-screen h-screen max-w-[1200px]">
        <div className="text-center bg-blue-500 text-white mb-1 py-2 rounded-b-2xl">
          <div className="flex justify-between">
            <div className="hover:cursor-pointer pl-2">
              <a className="" onClick={handlePreviousMonth}>
                <p className="">⬅️lihat bulan sebelumnya</p>
              </a>
            </div>
            <div>
              <div className="hover:cursor-pointer px-2 border border-white rounded-full">
                <a className="" onClick={handleCurrentMonth}>
                  <p className="">lihat jadwal bulan ini</p>
                </a>
              </div>
            </div>
          </div>
          <div>Jadwal Sholat</div>

          <div className="text-2xl font-bold">{selectedCity}</div>
          <p>
            {convertMonth(currentMonth)} <span>{currentYear}</span>
          </p>
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
              {JadwalSalat.map((jadwal) => (
                <tr
                  key={jadwal.tanggal}
                  className={`hover:bg-gray-100 ${
                    jadwal.tanggal === todayDate
                      ? "bg-yellow-300 font-bold"
                      : ""
                  }`}
                >
                  <td className="border p-1 ">{jadwal.tanggal}</td>
                  <td className="border p-1 ">{jadwal.imsyak}</td>
                  <td className="border p-1 ">{jadwal.shubuh}</td>
                  <td className="border p-1 ">{jadwal.terbit}</td>
                  <td className="border p-1 ">{jadwal.dhuha}</td>
                  <td className="border p-1 ">{jadwal.dzuhur}</td>
                  <td className="border p-1 ">{jadwal.ashr}</td>
                  <td className="border p-1 ">{jadwal.magrib}</td>
                  <td className="border p-1 ">{jadwal.isya}</td>
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

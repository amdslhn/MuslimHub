import { useState } from "react";

const Qori = ({ setQori }) => {
  const [selectedQori, setSelectedQori] = useState("01");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedQori(value);
    setQori(value);
  };

  return (
    <div className="flex flex-row sm:flex-row sm:items-center justify-end gap-2 px-4">
      <label htmlFor="qori" className="text-white mt-1 font-medium">
        Pilih Qori:
      </label>
      <select
        id="qori"
        className="rounded-xl border border-white bg-white text-blue-800 font-semibold px-4 py-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
        onChange={handleSelectChange}
        value={selectedQori}
      >
        <option value="01">Abdullah Al-Juhany</option>
        <option value="02">Abdul Muhsin Al-Qasim</option>
        <option value="03">Abdurrahman As-Sudais</option>
        <option value="04">Ibrahim Al-Dossari</option>
        <option value="05">Misyari Rasyid Al-Afasi</option>
      </select>
    </div>
  );
};

export default Qori;

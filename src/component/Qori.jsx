import { useState } from "react";

const Qori = ({ setQori }) => {
  const [selectedQori, setSelectedQori] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedQori(value);
    setQori(value);
  };

  return (
    <div className="flex w-full gap-2 justify-end">
      <label htmlFor="qori" className="py-1 px-2">
        Qori:
      </label>
      <select
        id="qori"
        className="w-50 min-w-[150px] rounded-2xl py-1 px-2 bg-slate-200 shadow-xl border border-sky-400 text-black text-center"
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

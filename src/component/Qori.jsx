import { useState } from "react";

const Qori = ({ setQori }) => {
  const [selectedQori, setSelectedQori] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedQori(value);
    setQori(value);
  };

  return (
    <div className="flex flex-wrap items-center w-full gap-2">
      <select
        id="qori"
        className="w-30 rounded-2xl py-1 px-2 bg-slate-200 shadow-xl border border-sky-400 text-black"
        onChange={handleSelectChange}
        value={selectedQori}
      >
        <option value="" hidden>Pilih Qori</option>
        <option value="01">Abdullah Al-Juhany</option>
        <option value="02">Abdul Muhsin Al-Qasim</option>
        <option value="03">Abdurrahman As-Sudais</option>
        <option value="04">Ibrahim Al-Dossari</option>
        <option value="05">Misyari Rasyid Al-Afasi</option>
      </select>
      {selectedQori && (
        <div className="text-black font-semibold">
          {selectedQori === "01" && "Abdullah Al-Juhany"}
          {selectedQori === "02" && "Abdul Muhsin Al-Qasim"}
          {selectedQori === "03" && "Abdurrahman As-Sudais"}
          {selectedQori === "04" && "Ibrahim Al-Dossari"}
          {selectedQori === "05" && "Misyari Rasyid Al-Afasi"}
        </div>
      )}
    </div>
  );
};

export default Qori;

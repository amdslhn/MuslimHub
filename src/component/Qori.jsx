const Qori = ({ setQori }) => {
  return (
    <div className="flex flex-wrap">
      <div className="mr-2">
        <label htmlFor="qori">Qori:</label>
      </div>
      <select
        id="qori"
        className=" w-32 rounded-2xl py-1 px-2 bg-slate-200 shadow-xl border border-black text-black"
        onChange={(e) => setQori(e.target.value)}
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

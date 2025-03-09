const Qori = ({ setQori}) => {
  return (
    <div className="text-black flex justify-end -mr-9 lg:-mr-6">
      <label htmlFor="qori" className="py-1 px-1">Qori :</label>
      <select id="qori" className=" rounded-2xl py-1 bg-slate-200 shadow-2xl border-1 border-sky-400"onChange={(e) => setQori(e.target.value)}>
        <option value={"01"}>Abdullah-Al-Juhany</option>
        <option value={"02"}>Abdul-Muhsin-Al-Qasim</option>
        <option value={"03"}>Abdurrahman-as-Sudais</option>
        <option value={"04"}>Ibrahim-Al-Dossari</option>
        <option value={"05"}>Misyari-Rasyid-Al-Afasi</option>
      </select>
    </div>
  );
};

export default Qori;

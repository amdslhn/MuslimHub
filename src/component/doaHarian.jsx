import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DoaHarian() {
  const [doa, setDoa] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://open-api.my.id/api/doa/${id}`)
      .then((res) => res.json())
      .then((data) => setDoa(data));
  }, [id]);
  return (
    <div className="w-screen min-h-screen max-w-3xl mx-auto justify-between flex flex-col sm:h-full lg:h-screen ">
      <div className="fixed w-full max-w-3xl text-center bg-blue-500 rounded-b-3xl z-50">
      <div onClick={() => navigate("/doa")} className="flex font-semibold pb-2 hover:cursor-pointer hover:text-slate-200">⬅️Back</div>
        <div className="pl-3 text-gray-200 text-3xl flex flex-row gap-3 font-bold justify-center pb-5">
            <div className="-my-2">
          <div className="border-2 w-12 h-12 pt-0.5 border-slate-100 rounded-full">
            <p>{doa.id}</p>
            </div>
          </div>
          <div>{doa.judul}</div>
        </div>
      </div>
      <div className="p-3 bg-slate-100 shadow-xl rounded-b-4xl">
        <div className="text-4xl/15 noto pt-30 text-right">{doa.arab}</div>
        <div className="text-xl mt-4 noto italic">{doa.latin}</div>
        <div className="text-xl justify-start mt-4 noto">{doa.terjemah}</div>
    </div>
    </div>
  );
}
export default DoaHarian;

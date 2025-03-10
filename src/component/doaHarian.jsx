import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DoaHarian() {
  const [doa, setDoa] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://open-api.my.id/api/doa/${id}`)
      .then((res) => res.json())
      .then((data) => setDoa(data));
  }, [id]);
  return (
    <div className="w-screen min-h-screen max-w-3xl mx-auto justify-between flex flex-col bg-slate-200 sm:h-full lg:h-screen shadow-xl ">
      <div className="fixed w-full max-w-3xl text-center bg-blue-500 rounded-b-3xl z-50">
        <div className="pl-3 text-gray-200 text-3xl flex flex-row gap-3 font-bold items-center justify-center py-4">
          <div className="border-2 w-10 h-10 pr-0.5 border-slate-100 rounded-full">
            <p>{doa.id}</p>
          </div>
          <div>{doa.judul}</div>
        </div>
      </div>
      <div className="p-3">
        <div className="text-4xl/15 noto pt-30 text-right">{doa.arab}</div>
        <div className="text-xl mt-4 noto italic">{doa.latin}</div>
        <div className="text-xl justify-start mt-4 noto">{doa.terjemah}</div>
    </div>
    <div className="flex overflow-hidden justify-between items-end">
        <div className="hidden lg:flex w-60 h-60">
            <img src="/image/img2.png" alt="" />
        </div>
        <div className="hidden lg:flex w-60 h-60">
            <img src="/image/img3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default DoaHarian;

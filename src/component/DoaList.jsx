import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoaList() {
    const[doaHarian, setDoaHarian] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://open-api.my.id/api/doa")
        .then((res) => res.json())
        .then((data) => setDoaHarian(data));
    }, []);

    const handleClick = (id)=>{
        navigate(`${id}`)
    }

    return (
        <div className="w-screen bg-slate-100 shadow-xl max-w-[1200px] m-auto flex flex-col">
            <div className="fixed w-full max-w-[1200px] text-center bg-blue-500 rounded-b-3xl z-50">
            <h1 className="text-slate-200 text-3xl font-bold py-3">
                Pilih Doa
            </h1>
            </div>
            <div key={doaHarian.id}className="grid noto pt-16 pb-10 lg:pt-25 grid-cols-1 lg:grid-cols-3 gap-4 mx-auto ">
            {doaHarian.map((doaHarian) => (
                <div onClick={() =>handleClick(doaHarian.id)}className="border text-slate-800 hover:bg-white hover:scale-105 hover:cursor-pointer rounded-full border-blue-500 shadow-md flex">
                    <div className="border border-blue-500 w-7 h-7 text-center pt-0.5 rotate-45 ml-3 my-auto">
                        <p className="-rotate-45 font-semibold">{doaHarian.id}</p>
                    </div>
                <p className="p-4 text-lg">
                    {doaHarian.judul}
                </p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default DoaList;
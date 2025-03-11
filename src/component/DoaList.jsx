import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoaList() {
    const [doaHarian, setDoaHarian] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://open-api.my.id/api/doa")
            .then((res) => res.json())
            .then((data) => setDoaHarian(data));
    }, []);

    const handleClick = (id) => {
        navigate(`${id}`);
    };

    return (
        <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center p-4">
            <div className="fixed w-full max-w-[1200px] text-center top-0 bg-blue-500 shadow-lg rounded-b-3xl z-50 pb-2">
            <div onClick={() => navigate("/")} className="flex font-semibold pb-2 hover:cursor-pointer hover:text-slate-200">⬅️Back</div>
                <h1 className="text-white text-3xl pb-6 font-bold">Pilih Doa</h1>
            </div>
            <div className="pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mt-4">
                {doaHarian.map((doa) => (
                    <div
                        key={doa.id}
                        onClick={() => handleClick(doa.id)}
                        className="bg-white border border-blue-500 shadow-lg rounded-xl p-4 flex items-center gap-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                            {doa.id}
                        </div>
                        <p className="text-lg font-medium text-slate-800">{doa.judul}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoaList;

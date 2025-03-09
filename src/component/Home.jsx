import { Link, useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/surah");
  }
  const handleClick2 = () => {
    navigate("/doa");
  }
  return (
    <div className="w-screen h-screen flex-col flex bg-slate-200">
        <div className="text-4xl mx-auto pt-4 font-bold bg-gradient-to-r from bg-green-600 via-amber-500 to-green-800 text-transparent bg-clip-text font-sans">
            MuslimHub
        </div>
        <div className="text-2xl text-slate-800 my-auto mx-auto">
        <div onClick= {handleClick} className="border-1 border-black p-2 w-50 bg-slate-200 hover:bg-slate-300 hover:cursor-pointer hover:scale-105 rounded-3xl text-center shadow-xl">
          Baca Quran
        </div>
        <div onClick= {handleClick2} className="border-1 border-black p-2 w-50 bg-slate-200 hover:bg-slate-300 hover:cursor-pointer hover:scale-105 rounded-3xl text-center mt-2 shadow-xl">
           Doa Harian
        </div>
        </div>
    </div>
  )
}

export default Home

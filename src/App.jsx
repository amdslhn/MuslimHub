import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Quran from "./pages/Quran"
import HomePage from "./pages/HomePage"
import Ayat from "./component/Ayat"
import Doa from "./pages/Doa"
import DoaHarian from "./component/doaHarian"
import Salat from "./pages/Salat"
import AsmaulHusnaPage from "./pages/AsmaulHusnaPage"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surah" element={<Quran />} />
        <Route path="surah/:nomor" element={<Ayat />} />
        <Route path="/doa" element={<Doa />} />
        <Route path="/doa/:id" element={<DoaHarian />} />
        <Route path="/jadwalsalat" element={<Salat />} />
        <Route path="/asmaulHusna" element={<AsmaulHusnaPage />} />
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Componentes/NavBar/NavBar.js";
import Home from "./Componentes/Home/Home.js";
import Colecciones from "./Componentes/Colecciones/Colecciones.js";
import Spiderman from "./Componentes/Spiderman/Spiderman.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Colecciones" element={<Colecciones />} />
          <Route path="/Spiderman" element={<Spiderman />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

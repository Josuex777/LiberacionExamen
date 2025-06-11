import "./Spiderman.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Spiderman() {
  return (
    <div className="bod">
      <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/97e9f5fa6e50c185d249956c6f198a2652a9217e69a59ecd.jpg?w=5000&thumb=false"
        alt=""
      />
      <h1>SPIDERMAN</h1>
      <Link to="/">
        <a href="#!" data-mdb-ripple-init class="btn btn-warning">
          Volver a la pagina Principal
        </a>
      </Link>
    </div>
  );
}

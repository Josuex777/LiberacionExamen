import { Link } from "react-router-dom";
import "./Colecciones.css";
const Colecciones = () => {
  return (
    <div className="Home">
      <img
        src="https://image.api.playstation.com/pr/bam-art/208/219/d3dfaf66-e184-4b71-85d1-286c3fb2325c.jpg?w=5000&thumb=false"
        class="card-img-top"
        alt="Sunset Over the Sea"
        className="imagen"
      />
      <div className="contenido">
        <div className="derec">
          <h3>Selecciones Mensuales</h3>
          <p>Juegos que disfrutamos y que te recomendamos</p>
        </div>
        <div className="izq">
          <button>Ver mas</button>
        </div>
      </div>

      <h3>Mejores 10 juegos de tu país</h3>
      <div className="basicos">
        <img
          src="https://image.api.playstation.com/pr/bam-art/173/959/8089e77b-4dca-4a8f-bdf8-da38c311ba4c.png?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/173/974/9d4201bd-37b1-480b-a25b-c922e899f44d.png?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/199/176/2bd4cd27-f194-4dcf-9b04-b439b22b66df.png?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/195/799/3c14e8b2-8f7a-47c9-adcb-f0961f092ff5.jpg?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/173/823/3adcfe97-24b1-458e-a479-2cdb9634f34e.png?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/206/057/7c0af1d6-ce35-4369-a686-14980cac782c.png?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/173/828/06a74fce-3271-445e-a0d0-2f9c913fbcc4.png?w=620&thumb=false"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/pr/bam-art/174/691/aad27293-3c41-4834-8bd5-adfd885a19c9.png?w=620&thumb=false"
          alt=""
        />
      </div>
      <div>
        <a href="#">Mostrar más</a>
      </div>
    </div>
  );
};
export default Colecciones;

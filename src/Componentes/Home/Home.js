import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { text } from "@fortawesome/fontawesome-svg-core";
const Home = () => {
  return (
    <div className="Home">
      <img
        src="https://blog.es.playstation.com/tachyon/sites/14/2044/05/e1e4ed8e3d63cebbcab35eab07856a0607cd5720-scaled.jpg"
        class="card-img-top"
        alt="Sunset Over the Sea"
        className="imagen"
      />
      <div className="contenido">
        <h3>DAYS OF PLAY</h3>
        <p>¡Days of Play ya está aqui! Consigue ya juegos digitales</p>
      </div>
      <div className="mejores">
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202406/0500/8f15268257b878597757fcc5f2c9545840867bc71fc863b1.png"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/M/MV5BZmQwYTE0MTAtZjEzNy00ZmJkLTg1YmMtNDc4OTZiYjRkNThkXkEyXkFqcGc@._V1_.jpg"
          alt=""
        />
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202409/2013/96a84262e4562c459c213515a9dfd53d82547603b86a2c6a.png"
          alt=""
        />
        <img
          src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/c1d774e9faa8c310bb2ef40fc252f4d81721da5f/header_spanish.jpg?t=1748015354"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T-LYWCIIGV0YKmMAwbTG14AsqGOWU9TXPw&s"
          alt=""
        />
      </div>
      <h3>Mejores 10 juegos de tu país</h3>
      <div className="pais">
        <div>
          <img
            src="https://image.api.playstation.com/vulcan/ap/rnd/202503/2520/f3c135f8ebdc50b782c6f5f02b27130b499e22847f05aee6.png"
            alt=""
          />
          <div>
            <p>EA SPORT FC 25</p>
            <span>US$13.99 </span>
            <span className="linea">US$ 69.99</span>
          </div>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym8OuiumKY6oFBtD57mURYq2jZeExZnCslg&s"
            alt=""
          />
          <div>
            <p>Call of duty</p>
            <span>US$13.99 </span>
            <span className="linea">US$ 69.99</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn1.epicgames.com/offer/fn/FNECO_KeyArt_25_EGS_Launcher_KeyArt_Blade_2560x1440_2560x1440-8d4d2a17f716d09b73db1782346618ce"
            alt=""
          />
          <div>
            <p>Fortnite</p>
            <span>Gratuito </span>
          </div>
        </div>
        <div>
          <img
            src="https://play-lh.googleusercontent.com/t3Dxht17RdZSkZz2I5d4fu001smdebGPN6y2vOklFMJx_IKj1ltQqQlIpn9VQvW4PQ"
            alt=""
          />
          <div>
            <p>eFootball</p>
            <span>Gratuito </span>
          </div>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9N_C5MXsPQsuTPXSP9_y3TOYhTkkgD6vsZQ&s"
            alt=""
          />
          <div>
            <p>Tekken 8</p>
            <span>US$13.99 </span>
            <span className="linea">US$ 69.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

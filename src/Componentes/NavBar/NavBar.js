import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" className="colornav">
      <Container className="cabeza">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <h1>
          <FontAwesomeIcon icon={faPlaystation} />
          PlayStation Store
        </h1>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="enlaces">
            <Link class="nav-link" to={"/"}>
              Más Recientes
            </Link>
            <Link class="nav-link" to={"/Colecciones"}>
              Colecciones
            </Link>
            <Link class="nav-link" to={"/Spiderman"}>
              Ofertas
            </Link>
            <Link class="nav-link" to={"/Login"}>
              Suscripciones
            </Link>
            <Link class="nav-link" to={"/Login"}>
              Explorar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

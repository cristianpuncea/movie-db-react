import Container from "react-bootstrap/Container";
import NavbarBootstrap from "react-bootstrap/Navbar";
import Login from "./components/Login/Login";
import Logo from "./components/Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";

function Navbar() {
  return (
      <NavbarBootstrap expand="lg" variant="dark" bg="secondary" sticky="top">
        <Container fluid="lg">
          <NavMenu />
          <Login />
          <Logo />
        </Container>
      </NavbarBootstrap>
  );
}

export default Navbar;

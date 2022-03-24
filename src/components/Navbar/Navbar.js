import Container from "react-bootstrap/Container";
import NavbarBootstrap from "react-bootstrap/Navbar";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import Logo from "./components/Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";

function Navbar({loginStatus, handleLoginStatus}) {
  return (
      <NavbarBootstrap expand="lg" variant="dark" bg="secondary" sticky="top">
        <Container fluid="lg">
          <NavMenu />
          <LoginBtn loginStatus={loginStatus} handleLoginStatus={handleLoginStatus} />
          <Logo />
        </Container>
      </NavbarBootstrap>
  );
}

export default Navbar;

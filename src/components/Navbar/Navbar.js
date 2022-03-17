import Logo from "./components/Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-lg">
        <NavMenu />
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;

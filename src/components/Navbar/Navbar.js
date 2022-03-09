import Logo from "./components/Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";
import Search from "./components/Search/Search";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <NavMenu />
        <Search />
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;

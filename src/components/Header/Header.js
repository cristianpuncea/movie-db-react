import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <Menu />
      <Search />
      <Login />
    </header>
  );
}

export default Header;

import { useState } from "react";
import MenuBtnList from "./components/MenuBtnList";
import classes from "./NavMenu.module.scss";

function NavMenu() {

  const hamburgerIconInit = `${classes["container-hamburger"]}`;

  const [hamburgerIcon, setHamburgerIcon] = useState(hamburgerIconInit);

  const changeHamburgerIcon = () => {
    if (hamburgerIcon === hamburgerIconInit) {
      setHamburgerIcon(`${hamburgerIcon} ${classes.change}`)
    } else {
    setHamburgerIcon(hamburgerIconInit);
    }
  }

  return (
    <div className={classes.toggleDiv}>
      <button
        type="button"
        className={`btn btn-dark ${classes["menu-btn"]}`}
        data-bs-toggle="collapse"
        data-bs-target="#collapsedMenu"
        aria-expanded="false"
        aria-controls="collapsedMenu"
        onClick={changeHamburgerIcon}
      >
        <div className={hamburgerIcon}>
          <div className={`${classes.bar1}`}></div>
          <div className={classes.bar2}></div>
          <div className={classes.bar3}></div>
        </div>
        <div className={classes["menu-text"]}>Menu</div>
      </button>
      <MenuBtnList />
    </div>
  );
}

export default NavMenu;

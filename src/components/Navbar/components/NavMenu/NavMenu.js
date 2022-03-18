import { useState } from "react";
import MainMenuBtn from "./components/MainMenuBtn/MainMenuBtn";
import MenuBtnList from "./components/MenuBtnList/MenuBtnList";
import Search from "./components/Search/Search";
import classes from "./NavMenu.module.scss";

function NavMenu() {

  const [menuActivation, setMenuActivation] = useState(false);

  return (
    <>
      <div className={classes.toggleDiv}>
        <MainMenuBtn menuActivation={menuActivation} handleMenuActivation={setMenuActivation} />
        <MenuBtnList menuActivation={menuActivation} />
      </div>
      <Search menuActivation={menuActivation} handleMenuActivation={setMenuActivation} />
    </>
  );
}

export default NavMenu;

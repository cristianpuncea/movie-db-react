import { Collapse } from "bootstrap";
import { useEffect, useState } from "react";
import MainMenuBtn from "./components/MainMenuBtn/MainMenuBtn";
import MenuBtnList from "./components/MenuBtnList/MenuBtnList";
import Search from "./components/Search/Search";
import classes from "./NavMenu.module.scss";

function NavMenu() {

  const [menuActivation, setMenuActivation] = useState(false);

  useEffect(() => {
    const myCollapse = document.getElementById("collapsedMenu");
    const bsCollapse = new Collapse(myCollapse, { toggle: false });
    menuActivation ? bsCollapse.show() : bsCollapse.hide();
  }, [menuActivation]);    

  return (
    <>
      <div className={classes.toggleDiv}>
        <MainMenuBtn menuActivation={menuActivation} handleMenuActivation={setMenuActivation} />
        <MenuBtnList />
      </div>
      <Search menuActivation={menuActivation} handleMenuActivation={setMenuActivation} />
    </>
  );
}

export default NavMenu;

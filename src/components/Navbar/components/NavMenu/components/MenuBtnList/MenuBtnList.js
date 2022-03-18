import classes from "./MenuBtnList.module.scss";
import MenuBtns from "../MenuBtns/MenuBtns";
import Collapse from "react-bootstrap/Collapse";

function MenuBtnList({menuActivation}) {
  const menuList = {
    Movies: [
      "Top 250 Movies",
      "Most Popular Movies",
      "Browse Movies by Genre",
      "Coming Soon",
      "Movie News",
    ],
    "TV Shows": [
      "Top 250 Movies",
      "Most Popular TV Shows",
      "Browse TV Shows by Genre",
      "TV News",
    ],
    Actors: ["Born Today", "Most Popular Celebs", "Celebrity News"],
  };

  return (
    <Collapse in={menuActivation} dimension="width">
      <div id="collapsedMenu" className={classes["menu-main-items"]}>
        <MenuBtns menuList={menuList} />
      </div>
    </Collapse>
  );
}

export default MenuBtnList;

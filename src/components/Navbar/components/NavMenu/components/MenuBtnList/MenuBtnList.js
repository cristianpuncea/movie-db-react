import classes from "./MenuBtnList.module.scss";
import MenuBtns from "../MenuBtns/MenuBtns";
import Collapse from "react-bootstrap/Collapse";

function MenuBtnList({ menuActivation }) {
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

  const menuListArray = [
    {
      title: "Movies",
      menuItems: [
        { name: "Top Movies", path: "top" },
        { name: "Most Popular Movies", path: "most-popular" },
        { name: "Browse Movies by Genre", path: "by-genre" },
        { name: "Coming Soon", path: "coming-soon" },
      ],
    },
    {
      title: "TV Shows",
      menuItems: [
        { name: "Top TV Shows", path: "top" },
        { name: "Most Popular TV Shows", path: "most-popular" },
        { name: "Browse TV Shows by Genre", path: "by-genre" },
      ],
    },
    {
      title: "Actors",
      menuItems: [
        { name: "Popular Actors", path: "popular-actors" },
      ],
    },
  ];

  return (
    <Collapse in={menuActivation} dimension="width">
      <div id="collapsedMenu" className={classes["menu-main-items"]}>
        <MenuBtns menuList={menuList} menuListArray={menuListArray} />
      </div>
    </Collapse>
  );
}

export default MenuBtnList;

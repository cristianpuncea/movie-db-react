import classes from "./MenuBtnList.module.scss";
import MenuBtns from "./MenuBtns";

function MenuBtnList() {
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
    <div
      className={`collapse collapse-horizontal ${classes["menu-main-items"]}`}
      id="collapsedMenu"
    >
      <MenuBtns menuList={menuList} />
    </div>
  );
}

export default MenuBtnList;

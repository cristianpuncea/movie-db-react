import { useEffect, useState } from "react";
import classes from "./MainMenuBtn.module.scss";

function MainMenuBtn({ menuActivation, handleMenuActivation }) {
  const hamburgerIconClassInit = classes["container-hamburger"];

  const [hamburgerIconClass, setHamburgerIconClass] = useState(
    hamburgerIconClassInit
  );

  useEffect(() => {
    if (menuActivation) {
      setHamburgerIconClass(`${hamburgerIconClass} ${classes.change}`);
    } else {
      setHamburgerIconClass(hamburgerIconClassInit);
    }
  }, [menuActivation]);

  // const handleHamburgerIconClass = () => {
  //   handleMenuActivation(!menuActivation);
  //   if (hamburgerIconClass === hamburgerIconClassInit) {
  //     setHamburgerIconClass(`${hamburgerIconClass} ${classes.change}`);
  //   } else {
  //     setHamburgerIconClass(hamburgerIconClassInit);
  //   }
  // };

  // const handleHamburgerIconClass = () => {
  //   if (hamburgerIconClass === hamburgerIconClassInit) {
  //     setHamburgerIconClass(`${hamburgerIconClass} ${classes.change}`);
  //   } else {
  //     setHamburgerIconClass(hamburgerIconClassInit);
  //   }
  // };

  return (
    <button
      type="button"
      className={`btn btn-dark ${classes["menu-btn"]}`}
      // data-bs-toggle="collapse"
      // data-bs-target="#collapsedMenu"
      aria-expanded="false"
      aria-controls="collapsedMenu"
      onClick={() => handleMenuActivation(!menuActivation)}
    >
      <div className={hamburgerIconClass}>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
        <div className={classes.bar3}></div>
      </div>
      <div className={classes["menu-text"]}>Menu</div>
    </button>
  );
}

export default MainMenuBtn;

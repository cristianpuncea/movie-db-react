import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./MainMenuBtn.module.scss";

function MainMenuBtn({ menuActivation, handleMenuActivation }) {
  const hamburgerIconClassInit = classes["container-hamburger"];

  const [hamburgerIconClass, setHamburgerIconClass] = useState(
    hamburgerIconClassInit
  );

  useEffect(() => {
    if (menuActivation) {
      setHamburgerIconClass((existingClass) => `${existingClass} ${classes.change}`);
    } else {
      setHamburgerIconClass(() => hamburgerIconClassInit);
    }
  }, [menuActivation, hamburgerIconClassInit]);

  return (
      <Button
        className={classes["menu-btn"]}
        variant="dark"
        aria-controls="collapsedMenu"
        aria-expanded={menuActivation}
        onClick={() => handleMenuActivation(!menuActivation)}
      >
        <div className={hamburgerIconClass}>
          <div className={classes.bar1}></div>
          <div className={classes.bar2}></div>
          <div className={classes.bar3}></div>
        </div>
        <div className={classes["menu-text"]}>Menu</div>
      </Button>
  );
}

export default MainMenuBtn;

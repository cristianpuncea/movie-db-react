import classes from "./Logo.module.scss";
import Image from "react-bootstrap/Image";

function Logo() {
  return (
    <a href="#">
      <div className={classes["logo-container"]}>
          <Image className={classes.logo} src="movie-db-logo-new.png" alt="" />
      </div>
    </a>
  );
}

export default Logo;

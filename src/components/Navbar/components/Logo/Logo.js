import classes from "./Logo.module.scss";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Logo() {
  return (
    // <a href="#">
    //   <div className={classes["logo-container"]}>
    //       <Image className={classes.logo} src="movie-db-logo-new.png" alt="" />
    //   </div>
    // </a>
    <Link to="/">
      <div className={classes["logo-container"]}>
        <Image className={classes.logo} src="/movie-db-logo-new.png" alt="" />
      </div>
    </Link>
  );
}

export default Logo;

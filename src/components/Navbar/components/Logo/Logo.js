import classes from "./Logo.module.scss";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "./movie-db-logo-new.png";

function Logo() {
  return (
    <Link to="/movie-db-react">
      <div className={classes["logo-container"]}>
        <Image className={classes.logo} src={logo} alt="" />
      </div>
    </Link>
  );
}

export default Logo;

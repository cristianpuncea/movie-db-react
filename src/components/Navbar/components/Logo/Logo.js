import classes from "./Logo.module.scss";

function Logo() {
  return (
    <a href="#">
      <div className={classes["logo-container"]}>
          <img className={classes.logo} src="movie-db-logo-new.png" alt="" />
      </div>
    </a>
  );
}

export default Logo;

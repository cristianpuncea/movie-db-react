import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import classes from "./LoginBtn.module.scss"

function LoginBtn({loginStatus, handleLoginStatus}) {
  return (
      <Link to="/login">
        {loginStatus && <Button className={classes["login-btn"]} variant="dark">Account</Button>}
        {!loginStatus && <Button className={classes["login-btn"]} variant="dark">Login</Button>}
      </Link>
  );
}

export default LoginBtn;

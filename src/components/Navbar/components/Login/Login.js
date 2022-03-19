import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import classes from "./Login.module.scss"

function Login() {
  return (
      <Link to="/login">
        <Button className={classes["login-btn"]} variant="dark">Login</Button>
      </Link>
  );
}

export default Login;

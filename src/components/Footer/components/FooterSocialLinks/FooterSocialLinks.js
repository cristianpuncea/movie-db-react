import classes from "./FooterSocialLinks.module.scss";
import Container from "react-bootstrap/Container";

function FooterSocialLinks() {
  return (
    <Container>
        <ul className={classes.social}>
          <li><a href="#"><i className="bi bi-facebook"></i></a></li>
          <li><a href="#"><i className="bi bi-instagram"></i></a></li>
          <li><a href="#"><i className="bi bi-twitch"></i></a></li>
          <li><a href="#"><i className="bi bi-twitter"></i></a></li>
          <li><a href="#"><i className="bi bi-youtube"></i></a></li>
        </ul>
    </Container>
  )
}

export default FooterSocialLinks;
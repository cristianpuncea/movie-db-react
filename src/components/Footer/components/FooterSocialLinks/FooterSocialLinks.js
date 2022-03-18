import classes from "./FooterSocialLinks.module.scss";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function FooterSocialLinks() {
  return (
    <Container>
        <ListGroup as="ul" className={classes.social}>
          <ListGroup.Item as="li"><a href="#"><i className="bi bi-facebook"></i></a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#"><i className="bi bi-instagram"></i></a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#"><i className="bi bi-twitch"></i></a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#"><i className="bi bi-twitter"></i></a></ListGroup.Item>
          <ListGroup.Item as="li"><a href="#"><i className="bi bi-youtube"></i></a></ListGroup.Item>
        </ListGroup>
    </Container>
  )
}

export default FooterSocialLinks;
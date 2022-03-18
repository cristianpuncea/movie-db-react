import FooterNavList from "./components/FooterNavList/FooterNavList";
import FooterSocialLinks from "./components/FooterSocialLinks/FooterSocialLinks";
import classes from "./Footer.module.scss";
import Container from "react-bootstrap/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container className={classes["footer-container"]}>
      <Container>
        <footer className="py-3 my-4">
          <FooterSocialLinks />
          <FooterNavList />
          <p className="text-center text-secondary">
            © {currentYear} Company, Inc
          </p>
        </footer>
      </Container>
    </Container>
  );
}

export default Footer;

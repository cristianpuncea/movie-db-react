import FooterNavList from "./components/FooterNavList/FooterNavList";
import FooterSocialLinks from "./components/FooterSocialLinks/FooterSocialLinks";
import classes from "./Footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes["footer-container"]}>
      <div className="container">
        <footer className="py-3 my-4">
          <FooterSocialLinks />
          <FooterNavList />
          <p className="text-center text-secondary">© {currentYear} Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

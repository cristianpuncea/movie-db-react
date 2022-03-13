import FooterNavList from "./components/FooterNavList";
import classes from "./Footer.module.scss";

function Footer() {
  const navList = {
    // Object with "value:link" pairs for footer navigation
    Home: "#",
    Features: "#",
    Pricing: "#",
    FAQs: "#",
    About: "#",
  };

  return (
    <div className={classes["footer-container"]}>
      <div className="container">
        <footer className="py-3 my-4">
          <FooterNavList navItems={navList} />
          <p className="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

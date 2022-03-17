import classes from "./FooterSocialLinks.module.scss";

function FooterSocialLinks() {
  return (
    <div className="container">
      <ul className={`row ${classes.social}`}>
        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
        <li><a href="#"><i className="bi bi-twitch"></i></a></li>
        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
      </ul>
    </div>
  )
}

export default FooterSocialLinks;
import classes from "./FooterSocialLinks.module.scss";

function FooterSocialLinks() {
  return (
    <div className="container">
      <ul className={`row ${classes.social}`}>
        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
        <li><a href="#"><i class="bi bi-twitch"></i></a></li>
        <li><a href="#"><i class="bi bi-twitter"></i></a></li>
        <li><a href="#"><i class="bi bi-youtube"></i></a></li>
      </ul>
    </div>
  )
}

export default FooterSocialLinks;
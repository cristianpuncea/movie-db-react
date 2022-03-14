import classes from "./FooterNavList.module.scss";

function FooterNavList() {
  // Object with "value:link" pairs for footer navigation
  const navList = [
    {
      title: "Get the MovieDb App",
      url: "#",
      external: true,
    },
    {
      title: "Help",
      url: "#",
      external: true,
    },
    {
      title: "Site Index",
      url: "#",
      external: true,
    },
    {
      title: "Pro Features",
      url: "#",
      external: true,
    },
    {
      title: "Box Office Mojo",
      url: "#",
      external: true,
    },
    {
      title: "Developer",
      url: "#",
      external: true,
    },
    {
      title: "Press Room",
      url: "#",
      external: false,
    },
    {
      title: "Advertising",
      url: "#",
      external: true,
    },
    {
      title: "Jobs",
      url: "#",
      external: true,
    },
    {
      title: "Conditions of Use",
      url: "#",
      external: false,
    },
    {
      title: "Privacy Policy",
      url: "#",
      external: false,
    },
    {
      title: "Interest-Based Ads",
      url: "#",
      external: true,
    },
  ];

  return (
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      {navList.map((item, idx) => {
        return (
          <li className="nav-item" key={idx}>
            <a href={item.url} className={`nav-link px-2 ${classes.link}`}>              
              {item.title}
              {item.external && <i className={`bi bi-box-arrow-up-right ${classes["icon-ext-link"]}`}></i>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterNavList;

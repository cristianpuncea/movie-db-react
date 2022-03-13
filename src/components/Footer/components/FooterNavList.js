function FooterNavList({ navItems }) {
  return (
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      {Object.keys(navItems).map((item, idx) => {
        return (
          <li className="nav-item" key={idx}>
            <a href={navItems[item]} className="nav-link px-2 text-muted">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterNavList;

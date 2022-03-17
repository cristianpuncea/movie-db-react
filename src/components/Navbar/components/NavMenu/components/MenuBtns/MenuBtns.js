function MenuBtns({ menuList }) {
  return (
    <>
      {Object.keys(menuList).map((objKey, idx) => {
        return (
          <div key={idx} className="btn-group">
            <button              
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {objKey}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
              {menuList[objKey].map((item, idx) => {
                return (
                  <li key={idx}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default MenuBtns;

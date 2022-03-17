// import { Collapse } from "bootstrap";
import { useEffect, useState } from "react";
import classes from "./Search.module.scss";

function Search({menuActivation, handleMenuActivation}) {
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search");
  // const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     var myCollapse = document.getElementById('collapsedMenu')
//     var bsCollapse = new Collapse(myCollapse, {toggle: false})
//     if (toggle) {bsCollapse.hide()}
// })

  return (
    <div className="input-group">
      <input
        type="search"
        className={`form-control me-1 ${classes["input-search"]}`}
        placeholder={searchPlaceholder}
        aria-label="Search"
        aria-describedby="search-addon"
        onFocus={() => handleMenuActivation(false)}
        onBlur={() => setSearchPlaceholder("Search")}
        // onClick={() => setToggle(toggle => !toggle)}
        // data-bs-target="#collapsedMenu"
      />
      <button type="button" className="btn btn-dark">
      <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default Search;

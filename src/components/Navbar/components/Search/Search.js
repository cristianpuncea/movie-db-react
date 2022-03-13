import { useState } from "react";
import classes from "./Search.module.scss";

function Search() {
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search");

  return (
    <div className="input-group">
      <input
        type="search"
        className={`form-control me-1 ${classes["input-search"]}`}
        placeholder={searchPlaceholder}
        aria-label="Search"
        aria-describedby="search-addon"
        onFocus={() => setSearchPlaceholder("")}
        onBlur={() => setSearchPlaceholder("Search")}
      />
      <button type="button" className="btn btn-dark">
      <i className="bi bi-search"></i>
      </button>
    </div>

    // <form className={`d-flex`}>
    //   <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
    //   <button className="btn btn-outline-warning" type="submit"><i class="bi bi-search"></i></button>
    // </form>

    // <form className={`d-flex form-control ${classes["search-form"]}`}>
    //   <input className={classes["input-search"]} type="search" placeholder="Search" aria-label="Search" />
    //   <button className="btn btn-outline-warning" type="submit"><i class="bi bi-search"></i></button>
    // </form>
  );
}

export default Search;

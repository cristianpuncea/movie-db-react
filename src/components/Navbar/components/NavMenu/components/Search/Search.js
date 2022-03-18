import { useState } from "react";
import classes from "./Search.module.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Search({ menuActivation, handleMenuActivation }) {
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search");

  return (
    <InputGroup>
      <FormControl
        className={`me-1 ${classes["input-search"]}`}
        placeholder={searchPlaceholder}
        aria-label="Search"
        aria-describedby="search-addon"
        type="search"
        onFocus={() => {
          setSearchPlaceholder("");
          handleMenuActivation(false);
        }}
        onBlur={() => setSearchPlaceholder("Search")}
      />
      <Button variant="dark">
        <i className="bi bi-search"></i>
      </Button>
    </InputGroup>
  );
}

export default Search;

import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import classes from "./MenuBtns.module.scss";

function MenuBtns({ menuListArray }) {
  return (
    <>
      {menuListArray.map((obj, idx) => {
        return (
          <DropdownButton
            as={ButtonGroup}
            title={obj.title}
            key={idx}
            variant="secondary"
            menuVariant="dark"
          >
            {obj.menuItems.map((item, idx) => {
              return (
                <Link
                  to={`/${obj.title.toLowerCase().replace(" ", "-")}/${
                    item.path
                  }`}
                  className={classes["menu-links"]}
                  key={idx}
                >
                  <Dropdown.Item as="li">
                    {item.name}
                  </Dropdown.Item>
                </Link>
              );
            })}
          </DropdownButton>
        );
      })}
    </>
  );
}

export default MenuBtns;

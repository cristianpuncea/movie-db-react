import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function MenuBtns({ menuList }) {
  return (
    <>
      {Object.keys(menuList).map((objKey, idx) => {
        return (
          <DropdownButton
            as={ButtonGroup}
            title={objKey}
            key={idx}
            variant="secondary"
            menuVariant="dark"
          >
            {menuList[objKey].map((item, idx) => {
              return (
              <Dropdown.Item key={idx}>
                {item}
              </Dropdown.Item>
              );
            })}
          </DropdownButton>
        );
      })}
    </>
  );
}

export default MenuBtns;

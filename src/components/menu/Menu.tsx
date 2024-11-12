import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title" >{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link
              to={listItem.url}
              className={`listItem ${activeItem === listItem.id ? "active" : ""}`}
              key={listItem.id}
              onClick={() => handleItemClick(listItem.id)}
            >
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

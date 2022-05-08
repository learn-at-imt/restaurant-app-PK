import { Data } from "../data/data";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {Data.map((menuItem, Key) => {
            return <div>{menuItem.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;

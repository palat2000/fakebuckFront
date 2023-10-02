import MenuItem from "./MenuItem";
import { HouseIcon, UserGroupIcon } from "../icon";
import { useLocation } from "react-router-dom";

const menus = [
  { id: 1, to: "/", Icon: HouseIcon },
  { id: 2, to: "/friend", Icon: UserGroupIcon },
];

function Menu() {
  const { pathname } = useLocation();
  return (
    <nav className="flex justify-center items-center gap-2">
      {menus.map((item) => (
        <MenuItem
          key={item.id}
          to={item.to}
          Icon={item.Icon}
          className={pathname === item.to ? "fill-blue-600" : "fill-gray-300"}
        />
      ))}
    </nav>
  );
}

export default Menu;

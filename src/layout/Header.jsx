import { Link } from "react-router-dom";
import { FacebookIcon } from "../icon/index";
import Menu from "./Menu";

function Header() {
  return (
    <header className="grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0">
      <div className="py-2 justify-self-start">
        <Link to="/">
          <FacebookIcon />
        </Link>
      </div>
      <Menu />
      <div></div>
    </header>
  );
}

export default Header;

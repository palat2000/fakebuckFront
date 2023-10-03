import { Link } from "react-router-dom";

function MenuItem({ to, Icon, active }) {
  return (
    <Link to={to}>
      <div className="px-10 py-2 rounded-md hover:bg-gray-200">
        <Icon className={active ? "fill-blue-600" : "fill-gray-500"} />
      </div>
    </Link>
  );
}

export default MenuItem;

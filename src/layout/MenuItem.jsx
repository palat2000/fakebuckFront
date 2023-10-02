import { Link } from "react-router-dom";

function MenuItem({ to, Icon, className }) {
  return (
    <Link to={to}>
      <div className="px-10 py-2 rounded-md hover:bg-gray-200">
        <Icon className={className} />
      </div>
    </Link>
  );
}

export default MenuItem;

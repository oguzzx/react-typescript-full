import { Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

function HeaderIcons() {
  return (
    <div className="flex  items-center justify-center mx-10 text-xs text-black">
      <ul className="flex items-center justify-center">
        <li className="px-4">
          <Link to="/auth">
            <User size={18} />
          </Link>
        </li>
        <li className="px-2">
          <Link to="#">
            <Search size={18} />
          </Link>
        </li>
        <li className="px-2">
          <Link to="/cart">
            <ShoppingBag size={18} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderIcons;

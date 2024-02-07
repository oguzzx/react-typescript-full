import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <div className="menu flex items-center justify-center">
      {/* home shop blog contact */}
      <ul className="flex  items-center mx-3 justify-center text-lg font-semibold text-black px-4 py-4">
        <li
          className={`px-4 ${
            selectedMenu === "home"
              ? "px-4  border-b-2 border-solid border-blue-500 mx-2"
              : ""
          } `}
        >
          <Link to="/" onClick={() => setSelectedMenu("home")}>
            Home
          </Link>
        </li>
        <li
          className={`px-4 ${
            selectedMenu === "shop"
              ? "p-2 border-b-2 border-solid border-blue-500 mx-2"
              : ""
          } `}
        >
          <Link to="/shop" onClick={() => setSelectedMenu("shop")}>
            Shop
          </Link>
        </li>
        <li
          className={`px-4 ${
            selectedMenu === "blog"
              ? "p-2 border-b-2 border-solid border-blue-500 mx-2"
              : ""
          } `}
        >
          <Link to="/blog" onClick={() => setSelectedMenu("blog")}>
            Blog
          </Link>
        </li>
        <li
          className={`px-4 ${
            selectedMenu === "contact"
              ? "p-2 border-b-2 border-solid border-blue-500 mx-2"
              : ""
          } `}
        >
          <Link to="/contact" onClick={() => setSelectedMenu("contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

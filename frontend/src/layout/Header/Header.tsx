import HeaderIcons from "../../components/HeaderIcons";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Notification from "../../components/Notification";

function Header() {
  return (
    <div className="sticky w-full top-0 bg-white z-10 border-b border-gray-50">
      <Notification />
      <div className="flex justify-between">
        <Logo />
        <Menu />
        <HeaderIcons />
      </div>
    </div>
  );
}

export default Header;

import { useEffect, useState } from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Dialog from "../components/modals/Dialog/Dialog";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
const [isDialogShow, setIsDialogShow] = useState(false);

useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
        ? JSON.parse(localStorage.getItem("dialog") ?? "")
        : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
        setIsDialogShow(dialogStatus);
    }, 2000);
}, []);
  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;

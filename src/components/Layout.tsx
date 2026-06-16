import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, transparentNav = false }: { children: ReactNode; transparentNav?: boolean }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={transparentNav ? "flex-1" : "flex-1 pt-20"}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 bg-[#f6f6f6] h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

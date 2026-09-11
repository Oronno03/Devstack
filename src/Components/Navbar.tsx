import { useEffect, useState } from "react";
import WideNavbar from "./WideNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(innerWidth < 1000);
    });
  }, []);

  return (
    <>
    <div className="mb-6">
      {!isMobile ? <WideNavbar /> : <MobileNavbar />}

    </div>
    <div className="h-0.5 w-full bg-[#F1F5F9] mb-24"></div>
    </>
  );
};

export default Navbar;

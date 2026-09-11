import { useEffect, useState } from "react";
import WideNavbar from "./WideNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(innerWidth < 1000);
    })
  }, [])

  return <div className="mb-24">{!isMobile ? <WideNavbar /> : <MobileNavbar />}</div>;
};

export default Navbar;

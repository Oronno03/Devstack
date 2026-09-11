import logo from "../assets/logo-text.png";

const WideNavbar = () => {
  return (
    <nav className="container flex justify-between mx-auto mt-4 items-center gap-4">
      <img src={logo} alt="" />
      <ul className="flex gap-7.25">
        <li className="text-[#DB2777] font-semibold font-main text-[14px] cursor-pointer">
          Home
        </li>
        {["Technologies", "Projects", "About", "Contact"].map((item) => (
          <li key={item} className="font-semibold font-main text-[14px] text-[#475569] cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        <button className="font-main font-semibold cursor-pointer">Sign In</button>
        <button className="bg-gradient-button text-white px-5 py-2.5 rounded-full font-main font-semibold text-[14px] cursor-pointer">Sign Up</button>
      </div>
    </nav>
  );
};

export default WideNavbar;

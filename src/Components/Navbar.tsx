const Navbar = () => {
  return (
    <nav className="container flex justify-between mx-auto mt-4">
      <img src="a" alt="NAV LOGO" />
      <ul className="flex gap-2">
        {["Home", "ABC", "ABDC", "ABEC"].map(item => <li key={item}>{item}</li>)}
      </ul>
      <div className="flex gap-2">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

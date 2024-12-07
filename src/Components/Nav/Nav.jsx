const Nav = () => {
  return (
    <nav className="bg-white bg-opacity-80 w-[95%] sm:w-[90%] lg:w-[85%] my-5 lg:p-2 mx-auto rounded-full font-sans shadow-md fixed z-50 inset-x-0">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#">
          <h1 className="font-medium text-2xl">iLanding</h1>
        </a>

        {/* Menu */}
        <ul className="hidden lg:flex items-center space-x-5 font-medium">
          <li>
            <a href="#home" className="hover:text-[#3195fd]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#3195fd]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#3195fd]">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#3195fd]">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#3195fd]">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#3195fd]">
              Drop Down
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#3195fd]">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}

        <a href="#">
          <button className="text-md text-white bg-[#3195fd] p-1 px-2 rounded-full">
            Get Started
          </button>
        </a>

        {/* Mobile Menu Icon */}
        <button id="menu-btn" className="block lg:hidden text-3xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className="hidden bg-gray-700 md:hidden space-y-4 px-4 py-6"
      >
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            Drop Down
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#3195fd]">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

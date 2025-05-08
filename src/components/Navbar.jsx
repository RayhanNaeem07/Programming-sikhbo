import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" bg-green-400 text-white py-4 md:py-8 sticky top-0">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <h3>Logo</h3>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 md:space-x-6 ">
          <li> <Link to={'/'} className="hover:text-gray-600">Home</Link> </li>
          <li> <Link to={'products'} className="hover:text-gray-600">Products</Link> </li>
          <li> <Link to={'blogs'} className="hover:text-gray-600">Blogs</Link> </li>
          <li> <Link to={'contact'} className="hover:text-gray-600">Contact</Link> </li>
          <li> <Link to={'about'} className="hover:text-gray-600">About</Link> </li>
        </ul>
        <button className="hidden md:block bg-blue-600 px-4 py-2 rounded cursor-pointer">Login</button>

        {/* Mobile menu collapse */}
        <div
          className={`md:hidden w-full absolute bg-green-500 top-full left-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>About</li>
            <li>
              {" "}
              <button className="">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

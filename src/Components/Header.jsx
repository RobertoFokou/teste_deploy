import React, { useState } from "react";
// import "boxicons/css/boxicons.min.css";
import logo from "../assets/Logo-02.png";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav class="bg-gray-800 bg-opacity-75 fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img src={logo} alt="logo" class="h-8 w-8" />
            </div>

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  href=""
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Accueil
                </a>
                <a
                  href=""
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Destination
                </a>
                <a
                  href=""
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Offres
                </a>
                <a
                  href=""
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-white inline-flex items-center justify-center p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              id="menu-button"
            >
              {!menuOpen && (
                <IoMdMenu class="h-6 w-6 menu-icon" onClick={handleChange} />
              )}
              {menuOpen && (
                <MdOutlineRestaurantMenu
                  class="h-6 w-6 menu-icon"
                  onClick={handleChange}
                />
              )}
              {/* <box-icon name="menu" class="h-6 w-6 menu-icon"></box-icon>
              <box-icon name="x" class="h-6 w-6 close-icon hidden"></box-icon> */}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div class="md:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 sm:px-3"></div>
          <a
            href=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Accueil
          </a>
          <a
            href=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Destination
          </a>
          <a
            href=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Offres
          </a>
          <a
            href=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;

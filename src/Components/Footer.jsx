import React from "react";

// icons imports
import logo from "../assets/images/icon-facebook.svg";
import logo1 from "../assets/images/icon-instagram.svg";
import logo2 from "../assets/images/icon-twitter.svg";
import logo3 from "../assets/images/icon-pinterest.svg";
import log from "../assets/images/logo.svg";

const Footer = () => {
  const menuItems = {
    AboutUs: ["Contacts", "Blog"],
    career: ["support", "Privacy policy"],
  };

  return (
    <footer className="py-16 text-center text-white bg-blue-950 md:text-left">
      <div className="container flex flex-col justify-between px-6 mx-auto md:flex-row">
        {/* Logo */}
        <div className="flex flex-col gap-10 mb-8 md:mb-0">
          <img src={log} alt="logo pc" className="" />
          {/* social icons */}
          <div className="flex items-center justify-center gap-4 mt-8 md:items-start md:justify-start md:mt-0">
            <a
              href="#facebook"
              className="transition-colors duration-200 hover:text-blue-400"
            >
              <img src={logo} alt="fb" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#twitter"
              className="transition-colors duration-200 hover:text-blue-400"
            >
              <img src={logo2} alt="fb" />

              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#pinterest"
              className="transition-colors duration-200 hover:text-red-400"
            >
              <img src={logo3} alt="fb" />
              <span className="sr-only">Pinterest</span>
            </a>
            <a
              href="#instagram"
              className="transition-colors duration-200 hover:text-pink-400"
            >
              <img src={logo1} alt="fb" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {/* Menu Columns */}
        <div className="flex flex-col gap-12 md:flex-row">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-6 md:mb-0">
              <h3 className="mb-4 text-lg font-semibold">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mt-8 md:items-start md:justify-start md:mt-0">
          <div className="flex flex-col items-center gap-7 md:items-end">
            <div>
              <button className="py-2 font-bold text-white px-7 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl ">
                Request invite
              </button>
            </div>
            <div className="text-center ">
              <p className="text-gray-400 ">© Easybank. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

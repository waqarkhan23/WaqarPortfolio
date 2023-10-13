import React from "react";
import "./Navbar.css";
import Logo from "../assets/w-logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    console.log("clicked");
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-gray-300">
      <div>
        <img src={Logo} alt="logo" />
      </div>

      <ul className="hidden md:flex">
        <li className="transform transition duration-300 hover:scale-125">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="transform transition duration-300 hover:scale-125">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="transform transition duration-300 hover:scale-125">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="transform transition duration-300 hover:scale-125">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="transform transition duration-300 hover:scale-125">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile View */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col items-center justify-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}

      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="blank"
              href="https://www.linkedin.com/in/mr-wiki"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-700">
            <a
              target="blank"
              href="https://github.com/waqarkhan23"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#6fc25f]">
            <a
              target="blank"
              href="mailto:waqar72642@gmail.com"
              className="flex justify-between items-center w-full text-gray-300  "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1xJdvkk-5GDlwlcx1fGsEM2HJQUMruDm-/view?usp=drivesdk"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const UIHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(!showNav);

  return (
    <>
      <header>
        <div className="bg-accent text-primary">
          <div className="container">
            <div className="flex justify-between items-center py-2">
              <ul className="flex gap-4">
                <li>
                  <Link className="text-white" to={"#"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={"#"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={"#"}>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={"#"}>
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
              <ul className="flex gap-4">
                <li>
                  <Link className="text-white" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={"/register"}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container">
            <div className="relative">
              <div className="flex justify-between items-center sticky top-0 py-4 bg-primary">
                <h1 className="mb-0">BLOG</h1>
                <div className="flex gap-5">
                  <button
                    type="button"
                    className="size-8 bg-content text-primary flex justify-center items-center rounded-lg text-sm"
                  >
                    <FaSearch />
                  </button>
                  <button
                    type="button"
                    className="text-2xl md:hidden"
                    onClick={handleShowNav}
                  >
                    <FaBars />
                  </button>
                </div>
              </div>
              <nav className={`${showNav ? "show" : ""} md:max-h-full md:absolute md:top-1.5 md:right-12`}>
                <ul className="flex f-col gap-6 md:flex-row font-bold p-4">
                  <li>
                    <Link
                      className="transition-colors hover:text-accent active:text-accent"
                      to="#"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-accent"
                      to="#"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-accent"
                      to="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-accent"
                      to="#"
                    >
                      Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-accent"
                      to="#"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default UIHeader;

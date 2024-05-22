import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const UIFooter = () => {
  return (
    <footer className="bg-header pt-12 pb-6 text-white text-center">
      <div className="container">
        <h2 className="text-6xl mb-8 italic">BLOG</h2>
        <h4 className="text-2xl mb-2">Subscribe Our Newsletter</h4>
        <p className="mb-8">
          Be the first to get notified about new posts subscribe our newsletter.
        </p>
        <form action="" className="relative max-w-[700px] w-full mx-auto mb-12">
          <input type="text" name="" id="" className="w-full p-4 rounded-xl placeholder:opacity-60" placeholder="Your Email Address" />
          <button className="bg-accent px-4 py-2 rounded-xl absolute right-4 ty-a">Subscribe</button>
        </form>

        <ul className="flex justify-center gap-4 my-8">
            <li>
                <Link to={"#"}><FaFacebookF className="text-xl"/></Link>
            </li>
            <li>
                <Link to={"#"}><FaTwitter className="text-xl"/></Link>
            </li>
            <li>
                <Link to={"#"}><FaInstagram className="text-xl"/></Link>
            </li>
            <li>
                <Link to={"#"}><FaYoutube className="text-xl"/></Link>
            </li>
        </ul>

        <div className="border-t border-primary border-opacity-10 pt-6">
            <span className="text-center mb-0 opacity-85 text-sm">&copy; Copyright 2024 Bloge All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default UIFooter;

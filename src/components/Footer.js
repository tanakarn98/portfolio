import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="contact">
      <a
        href="https://twitter.com/tanakarn98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          <FaTwitter />
        </li>
      </a>
      <a
        href="https://www.instagram.com/tanakarn98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          <FaInstagram />
        </li>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100022723070269"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          <FaFacebook />
        </li>
      </a>
      <footer>(c)2020 RINA OHMURA all rights reserved.</footer>
    </div>
  );
};

export default Footer;

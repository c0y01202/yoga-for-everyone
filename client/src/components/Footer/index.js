import React from 'react';
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};
const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-1">
      {/* make this div compatible with css file */}
      <div className="container">
        &copy;{new Date().getFullYear()} by Colt Shulz, John Pena, Claudia
        Chittim & Veronica Kolesnikov
        <div className='icons'>
          <FaPinterest
            color="white"
            size="13%"
            style={{ padding: "4%" }}
            onClick={handleURL(
              "https://www.pinterest.com/search/pins/?q=yoga%20for%20everyone&rs=typed&term_meta[]=yoga%20for%20everyone%7Ctyped"
            )}
          />
          <FaFacebook
            color="white"
            size="13%"
            style={{ padding: "4%" }}
            onClick={handleURL('https://www.facebook.com/search/top?q=yoga%20for%20everyone')}
          />
          <FaInstagram
            color="white"
            size="13%"
            style={{ padding: "4%" }}
            onClick={handleURL("https://www.instagram.com/explore/tags/yogaforeveryone/")}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

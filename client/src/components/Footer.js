import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";


const handleURL = (url) => {
  return () => window.open(url, "_blank");
};
const Footer = () => {
  return (
    
      <>
       <FaPinterest
          color="white"
          size="50px"
          style={{ padding: "3%" }}
          onClick={handleURL(
            "https://www.pinterest.com/search/pins/?q=yoga%20for%20everyone&rs=typed&term_meta[]=yoga%20for%20everyone%7Ctyped"
          )}
        />
        <FaFacebook
          color="white"
          size="50px"
          style={{ padding: "3%" }}
          onClick={handleURL(
            "https://www.facebook.com/search/top?q=yoga%20for%20everyone"
          )}
        />
        <FaInstagram
          color="white"
          size="50px"
          style={{ padding: "3%" }}
          onClick={handleURL(
            "https://www.instagram.com/explore/tags/yogaforeveryone/"
          )}
        />
      </>
       
      
    
  );
};

export default Footer;

// Pinterest: https://www.pinterest.com/search/pins/?q=yoga%20for%20everyone&rs=typed&term_meta[]=yoga%20for%20everyone%7Ctyped
// Facebook: https://www.facebook.com/search/top?q=yoga%20for%20everyone
// Instagram: https://www.instagram.com/explore/tags/yogaforeveryone/

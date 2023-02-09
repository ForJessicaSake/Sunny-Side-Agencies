import facebookImage from "../assets/desktop/icon-facebook.svg";
import instagramImage from "../assets/desktop/icon-instagram.svg";
import twitterImage from "../assets/desktop/icon-twitter.svg";
import pinterestImage from "../assets/desktop/icon-pinterest.svg";


const Footer = () => {
  return (
    <footer className="flex flex-col bg-Green h-80 items-center justify-center cursor-pointer">
    <nav className="flex flex-col items-center justify-center">
        <h1 className="text-3xl pb-10 font-extrabold text-DarkGreen font-textFont">Sunnyside</h1>
        <ul className="font-textFont flex justify-between w-64 pb-12">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </nav>
        <figure className="flex w-44 justify-between pb-6">
        <img src={facebookImage} alt="facebook"/>
        <img src={instagramImage} alt="instagram"/>
        <img src={twitterImage} alt="twitter"/>
        <img src={pinterestImage} alt="pinterest"/>
        </figure>
    </footer>
  );
};

export default Footer;

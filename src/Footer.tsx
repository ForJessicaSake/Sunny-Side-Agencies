import facebookImage from "./icon-facebook.svg";
import instagramImage from "./icon-instagram.svg";
import twitterImage from "./icon-twitter.svg";
import pinterestImage from "./icon-pinterest.svg";


const Footer = () => {
  return (
    <footer className="flex flex-col bg-Green h-72 items-center justify-center">
    <nav className="flex flex-col items-center justify-center">
        <h1 className="text-3xl pb-10">Sunnyside</h1>
        <ul className="flex justify-between w-64 pb-16">
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
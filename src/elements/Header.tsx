import roundedCitrus from "../assets/desktop/roundcitrus.jpg";
import arrowImage from "../assets/desktop/icon-arrow-down.svg"
const Header = () => {
  return (
    <section className="relative flex flex-col  justify-center items-center bg-Blue lg:pt-0 pt-10">
      <h1 className="font-Headingfront absolute lg:top-24 top-6 leading-10 text-4xl w-96 lg:w-full text-center lg:text-5xl text-White font-extrabold tracking-widest">WE ARE CREATIVES</h1>
      <img src={arrowImage} alt="orange" className="absolute lg:h-20 h-16" />
      <img src={roundedCitrus} alt="orange" className="lg:w-8/12 w-full " />
    </section>
  );
};

export default Header;

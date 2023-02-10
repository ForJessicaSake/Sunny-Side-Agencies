import roundedCitrus from "../assets/desktop/roundcitrus.jpg";
import arrowImage from "../assets/desktop/icon-arrow-down.svg";
const Header: React.FC = () => {
  return (
    <section className="relative flex flex-col  justify-center items-center bg-Blue lg:pt-0 pt-10">
      <h1 className="font-Headingfront absolute lg:top-24 top-8 leading-10 text-4xl w-80 lg:w-full text-center lg:text-5xl text-White tracking-widest">
        WE ARE CREATIVES
      </h1>
      <img
        src={arrowImage}
        alt="orange"
        className="absolute lg:h-20 h-16 animate-bounce"
      />
      <img
        src={roundedCitrus}
        alt="orange"
        className="lg:w-8/12 w-full lg:h-full md:h-full h-72"
      />
    </section>
  );
};

export default Header;

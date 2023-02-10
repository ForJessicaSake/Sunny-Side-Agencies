import { navigation } from "../atoms/Atom";
import { useAtom } from "jotai";
import menu from "../assets/desktop/icon-hamburger.svg";

const Navbar: React.FC = () => {
  const [state, setState] = useAtom(navigation);

  const handleClose = () => {
    setState(!state);
  };

  return (
    <nav className="font-textFont bg-Blue cursor-pointer flex justify-between lg:px-6 py-6 items-center">
      <h2 className="text-xl lg:text-2xl ml-4 font-extrabold text-White font-Headingfront">
        Sunnyside
      </h2>
      <img
        src={menu}
        alt="menu"
        className=" mr-4 w-7 h-5 lg:hidden"
        onClick={handleClose}
      />
      <ul
        onClick={handleClose}
        className={`${
          state ? "block" : "hidden"
        } lg:static absolute lg:top-0 top-28 lg:h-0 h-96 pb-10 lg:pb-0 flex lg:flex-row flex-col bg-Blue z-50 lg:text-sm text-base lg:flex items-center justify-between lg:w-96 w-full text-White`}
      >
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <button className="w-28 h-11 font-extrabold bg-White text-Heading text-xs border-White border-2 rounded-full font-Headingfront">
          CONTACT
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

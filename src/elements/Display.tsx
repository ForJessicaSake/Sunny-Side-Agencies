import bottleImage from "../assets/desktop/bottles.jpg";
import coneImage from "../assets/desktop/cone.jpg";
import sugarImage from "../assets/desktop/sugar.jpg";
import orangeImage from "../assets/desktop/orange.jpg";


const Display = () => {
  return (
    <figure className="lg:flex grid grid-cols-2">
        <img src={bottleImage} alt="bottle" className="lg:w-96 lg:h-96 w-12/12 "/>
        <img src={orangeImage} alt="orange" className="lg:w-96 lg:h-96 w-12/12"/>
        <img src={coneImage} alt="cone" className="lg:w-96 lg:h-96 w-12/12"/>
        <img src={sugarImage} alt="sugarcubes" className="lg:w-96 lg:h-96 w-12/12"/>
    </figure>
  )
};

export default Display;

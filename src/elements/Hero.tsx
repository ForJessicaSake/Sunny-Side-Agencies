import eggImage from "../assets/desktop/egg.jpg";
import cupImage from "../assets/desktop/cup.jpg"
import CalltoAction from "../custom/CalltoAction";
const Hero = () => {
  return (
    <div>
      <section className="w-full flex flex-col lg:flex-row lg:flex-row-reverse items-center justify-center lg:text-start text-center lg:flex-row lg:justify-between border-2">
        <figure className=" lg:w-6/12 w-12/12 ">
          <img src={eggImage} alt="egg" className="w-12/12 " />
        </figure>
        <figcaption className=" w-6/12 flex flex-col lg:pl-16 lg:justify-start lg:items-start justify-center items-center">
          <h1 className="pt-14 text-4xl lg:w-80 leading-snug w-80 font-bold pb-7">Transform your brand</h1>
          <p className="pb-7 text-lg lg:text-base lg:font-normal w-80 lg:w-96 leading-8 tracking-wider font-semibold">
            We are a full service creative agency secializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <CalltoAction text="LEARN MORE" />
        </figcaption>
      </section>
      <section className="flex flex-col lg:flex-row  items-center justify-center lg:text-start text-center lg:justify-between">
      <figure className=" lg:w-6/12 w-12/12 ">
          <img src={cupImage} alt="cup" className="w-12/12" />
        </figure>
        <figcaption className=" w-6/12 flex flex-col lg:pl-16 lg:justify-start lg:items-start justify-center items-center">
          <h1 className="pt-14 text-4xl lg:w-96 w-80 leading-snug font-bold pb-7">Stand out to the right audience</h1>
          <p className="pb-7 text-lg lg:text-base lg:font-normal lg:w-96 w-80 leading-8 tracking-wider font-semibold">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <CalltoAction text="LEARN MORE" />
        </figcaption>
      </section>
    </div>
  );
};

export default Hero;

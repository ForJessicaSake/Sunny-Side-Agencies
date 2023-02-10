import eggImage from "../assets/desktop/egg.jpg";
import cupImage from "../assets/desktop/cup.jpg";
import CalltoAction from "../custom/CalltoAction";
const Hero: React.FC = () => {
  return (
    <div>
      <section
        id="about"
        className="w-full flex flex-col lg:flex-row lg:flex-row-reverse items-center justify-center lg:text-start text-center lg:flex-row lg:justify-between"
      >
        <figure className=" lg:w-6/12 w-full ">
          <img src={eggImage} alt="egg" className="w-full" />
        </figure>
        <figcaption className=" w-6/12 flex flex-col lg:pl-16 lg:justify-start lg:items-start justify-center items-center">
          <h1 className="font-Headingfront text-Heading pt-14 text-4xl lg:w-80 leading-snug w-80 font-extrabold pb-7">
            Transform your brand
          </h1>
          <p className="font-textFont lg:px-0 px-6 text-Text pb-7 text-base lg:text-base lg:font-normal w-96 lg:w-96 leading-8 tracking-widest font-semibold">
            We are a full service creative agency secializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <section>
            <CalltoAction text="LEARN MORE" />
            <figure className="-mt-2 bg-babyYellow h-2 w-42 rounded-full mb-10"></figure>
          </section>
        </figcaption>
      </section>
      <section
        id="services"
        className="flex flex-col lg:flex-row  items-center justify-center lg:text-start text-center lg:justify-between"
      >
        <figure className=" lg:w-6/12 w-full ">
          <img src={cupImage} alt="cup" className="w-full" />
        </figure>
        <figcaption className=" w-6/12 flex flex-col lg:pl-16 lg:justify-start lg:items-start justify-center items-center">
          <h1 className="font-Headingfront text-Heading pt-14 text-4xl lg:w-96 w-80 leading-snug font-extrabold pb-7">
            Stand out to the right audience
          </h1>
          <p className="font-textFont lg:px-0 px-6 text-Text pb-7 text-base lg:text-base lg:font-normal lg:w-hero w-96 leading-8 tracking-wider font-semibold">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <section>
            <CalltoAction text="LEARN MORE" />
            <figure className="-mt-2 bg-babyPink h-2 w-42 rounded-full mb-10"></figure>
          </section>
        </figcaption>
      </section>
    </div>
  );
};

export default Hero;

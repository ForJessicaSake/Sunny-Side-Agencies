type Props = {
  image: any;
  heading: string;
  text: string;
};

const Card = ({ image, heading, text }: Props) => {
  return (
    <section className="relative lg:w-6/12 w-full flex justify-start flex-col items-center text-center text-DarkGreen">
      <figure className="w-full">
        <img
          src={image}
          alt="fruit"
          className="lg:h-full md:h-full h-96 w-full"
        />
      </figure>
      <figcaption className="absolute top-52 md:top-96 lg:top-56 xl:top-72 2xl:top-96 z-50 flex lg:text-center flex-col xl:w-9/12 2xl:w-7/12 lg:w-11/12 md:w-7/12 w-12/12 px-8">
        <h1 className="font-Headingfront lg:mt-0 md:mt-10 mt-0 xl:mt-0 text-Heading lg:text-2xl text-2xl font-bold lg:pb-6 pb-2 pt-2">
          {heading}
        </h1>
        <p className="font-textFont text-Heading leading-6 lg:leading-8 lg:text-base md:text-base text-sm pb-2">
          {text}
        </p>
      </figcaption>
    </section>
  );
};

export default Card;

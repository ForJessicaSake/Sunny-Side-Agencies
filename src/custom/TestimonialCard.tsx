type Props = {
  image: any;
  testimonial: string;
  name: string;
  jobTitle: string;
};

const TestimonialCard = ({ image, testimonial, name, jobTitle }: Props) => {
  return (
    <section className="pb-14 lg:pb-0 flex flex-col justify-center items-center text-center">
      <figure>
        <img src={image} alt="avartar" className="h-20 mb-10 w-20 rounded-full" />
      </figure>
      <figcaption>
        <p className="w-80 pb-10 text-Heading leading-7 font-medium">{testimonial}</p>
        <h2 className="text-2xl text-Heading font-bold pb-4">{name}</h2>
        <p className="text-Text">{jobTitle}</p>
      </figcaption>
    </section>
  );
};

export default TestimonialCard;

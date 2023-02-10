import TestimonialCard from "../custom/TestimonialCard";
import emilyAvatar from "../assets/desktop/image-emily.jpg";
import jennieAvatar from "../assets/desktop/image-jennie.jpg";
import thomasAvatar from "../assets/desktop/image-thomas.jpg";

const Testimonial: React.FC = () => {
  return (
    <section className="flex flex-col text-center items-center xl:px-24 lg:px-10 px-24 lg:py-28 py-14">
      <h1 className="text-Text tracking-wider font-Headingfront lg:text-2xl text-lg w-96 font-bold lg:mb-20 mb-14">
        CLIENT TESTIMONIALS
      </h1>
      <section className="flex flex-col lg:flex-row lg:justify-between w-full">
        <TestimonialCard
          image={emilyAvatar}
          testimonial="We put our trust in unnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          jobTitle="Marketing Director"
        />
        <TestimonialCard
          image={thomasAvatar}
          testimonial="Sunnyside's enthusiam coupled with their  keen interest in our brand's success made it a satisfying and enjoyable experience."
          name="Thomas S."
          jobTitle="Chief Operating Officer"
        />
        <TestimonialCard
          image={jennieAvatar}
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          jobTitle="Business Owner"
        />
      </section>
    </section>
  );
};

export default Testimonial;

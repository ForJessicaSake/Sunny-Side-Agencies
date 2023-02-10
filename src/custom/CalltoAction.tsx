type Props = {
  text: string;
};

const CalltoAction = ({ text }: Props) => {
  return (
    <section className="lg:text-lg text-base font-extrabold cursor-pointer">
      <h3 className="font-Headingfront text-Heading">{text}</h3>
    </section>
  );
};

export default CalltoAction;

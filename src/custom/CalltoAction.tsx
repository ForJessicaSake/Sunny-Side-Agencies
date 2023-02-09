type Props = {
  text: string;
};

const CalltoAction = ({ text }: Props) => {
  return (
    <section className="text-lg font-extrabold cursor-pointer">
      <h3 className="font-Headingfront text-Heading">{text}</h3>
    </section>
  );
};

export default CalltoAction;

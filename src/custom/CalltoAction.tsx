type Props = {
  text: string;
};

const CalltoAction = ({ text }: Props) => {
  return (
    <section className="text-lg font-extrabold">
      <h3 className="font-Headingfront text-Heading">{text}</h3>
    </section>
  );
};

export default CalltoAction;

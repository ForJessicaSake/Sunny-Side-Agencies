type Props = {
  text: string;
};

const CalltoAction = ({ text }: Props) => {
  return (
    <section className="pb-7 text-lg font-bold">
      <h3 className="font-Headingfront text-Heading">{text}</h3>
    </section>
  );
};

export default CalltoAction;

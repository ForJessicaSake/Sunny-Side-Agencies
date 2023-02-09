type Props = {
  text: string;
};

const CalltoAction = ({ text }: Props) => {
  return (
    <section className="pb-7 text-xl font-bold">
      <h3>{text}</h3>
    </section>
  );
};

export default CalltoAction;

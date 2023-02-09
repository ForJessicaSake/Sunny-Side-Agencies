import orangeImage from "./citrus.jpg";
import cherryImage from "./cherry.jpg";
import Card from "./Card";
const Fruit = () => {
  return (
    <section className=" flex lg:flex-row flex-col">
        <Card image={cherryImage} heading="Graphic Design" text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention." />
        <Card image={orangeImage} heading="Photography" text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
      </section>
  );
};

export default Fruit;

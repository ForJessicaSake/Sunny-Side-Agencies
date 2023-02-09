import Display from "../elements/Display";
import Footer from "../elements/Footer";
import Fruit from "../elements/Fruit";
import Header from "../elements/Header";
import Hero from "../elements/Hero";
import Testimonial from "../elements/Testimonal";

const Home: React.FC = () => {
  return (
    <section className="overflow-x-hidden">
      <Header />
      <Hero />
      <Fruit />
      <Testimonial />
      <Display />
      <Footer />
    </section>
  );
};

export default Home;

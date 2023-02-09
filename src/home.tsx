import Display from "./Display";
import Footer from "./Footer";
import Fruit from "./Fruit";
import Header from "./Header";
import Hero from "./Hero";
import Testimonial from "./Testimonal";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <section className="overflow-x-hidden">
      <Navbar />
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

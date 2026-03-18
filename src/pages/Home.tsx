import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Facilities from '../components/Facilities';
import Membership from '../components/Membership';
import Trainers from '../components/Trainers';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <CTA />
      <Facilities />
      <Membership />
      <Trainers />
      <Contact />
    </main>
  );
};

export default Home;

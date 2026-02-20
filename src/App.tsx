import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Advantages } from './sections/Advantages';
import { Testimonials } from './sections/Testimonials';
import { ContactForm } from './sections/ContactForm';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

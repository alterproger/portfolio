import { Footer } from '@/components/components';
import {
  About,
  Contact,
  Hero,
  Qualification,
  Services,
  Skills,
  Testimonials,
} from '@/sections/sections';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

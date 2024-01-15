import {
  About,
  Contact,
  Hero,
  Qualification,
  Services,
  Skills,
  Testimonials,
  Work,
} from "@/sections/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
    </main>
  );
}

import {
  About,
  Hero,
  Qualification,
  Services,
  Skills,
} from '@/sections/sections';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Qualification />
    </main>
  );
}

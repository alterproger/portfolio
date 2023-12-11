import { SectionSubtitle, SectionTitle } from '@/components/components';
import { TestimonialsSlider } from './components/components';

const Testimonials = () => {
  return (
    <section className="container section">
      <SectionTitle>My clients say</SectionTitle>
      <SectionSubtitle>Testimonials</SectionSubtitle>

      <TestimonialsSlider />
    </section>
  );
};

export { Testimonials };

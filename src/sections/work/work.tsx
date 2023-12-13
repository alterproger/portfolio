import { SectionSubtitle, SectionTitle } from '@/components/components';
import { Works } from './components/components';

const Work = () => {
  return (
    <section
      className="section"
      id="portfolio"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent works</SectionSubtitle>

      <Works />
    </section>
  );
};

export { Work };

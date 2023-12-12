import { useEffect, useState } from 'react';

const useScroll = (scrollYOffset: number) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollYOffset) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYOffset]);

  return { isInView };
};

export { useScroll };

import Image, { type StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';

import '@/assets/styles/swiper.css';

const AUTOPLAY_DELAY = 3000;

type Properties = {
  images: StaticImageData[];
};

const ImageSlider: React.FC<Properties> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={images.length > 1}
      className={styles['slider']}
      grabCursor
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: AUTOPLAY_DELAY,
      }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            className={styles['img']}
            src={image}
            alt={`Project image ${index + 1}`}
            width={640}
            height={420}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { ImageSlider };

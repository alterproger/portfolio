'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { TESTIMONIALS } from '../../libs/constants';
import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const TestimonialsSlider = () => {
  return (
    <Swiper
      className={styles['container']}
      loop
      grabCursor
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
    >
      {TESTIMONIALS.map(({ id, description, image, title }) => (
        <SwiperSlide
          key={id}
          className={styles['card']}
        >
          <Image
            className={styles['img']}
            src={image}
            alt={`Image of ${title}`}
            width={128}
            height={128}
          />
          <h3 className={styles['name']}>{title}</h3>
          <p className={styles['description']}>{description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { TestimonialsSlider };

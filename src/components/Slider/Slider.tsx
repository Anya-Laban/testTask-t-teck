import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '../Slide/Slide';
import { useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import s from './Slider.module.css';
import { slides } from '../../constants';

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <div className={s.slider}>
      <div className={s.content}>
        <div className={s.slidesBox}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <Slide slide={slide} isActive={activeIndex === index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={s.sliderControls}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${s.dot} ${activeIndex === index ? s.activeDot : ''}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

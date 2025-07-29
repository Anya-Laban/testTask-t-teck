import type { Slide as SlideType } from "../../types/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "../Slide/Slide";
import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import s from "./Slider.module.css";

const slides: SlideType[] = [
  {
    id: 1,
    title: "With our advanced financial technologies",
    subTitle:
      "your brokerage business will be up and running within the shortest time the industry have to offer.",
    linkLearnMore: "/",
    slideImg: {
      bgSrc: `${import.meta.env.BASE_URL}slide1-bg.svg`,
      src: `${import.meta.env.BASE_URL}slide1-img.png`,
      alt: "Titan Slide Image",
    },
  },
  {
    id: 2,
    title: "Looking to open a brokerage?",
    subTitle: "Get your business plan ready with our experts.",
    linkLearnMore: "/",
    slideImg: {
      bgSrc: `${import.meta.env.BASE_URL}slide2-bg.svg`,
      src: `${import.meta.env.BASE_URL}slide2-img.png`,
      alt: "Titan Slide Image",
    },
  },
  {
    id: 3,
    title: "Are you an established company?",
    subTitle:
      "Time to make changes and get better technological solution and pricing!",
    linkLearnMore: "/",
    slideImg: {
      bgSrc: `${import.meta.env.BASE_URL}slide3-bg.svg`,
      src: `${import.meta.env.BASE_URL}slide3-img.png`,
      alt: "Titan Slide Image",
    },
  },
];

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
              className={`${s.dot} ${activeIndex === index ? s.activeDot : ""}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

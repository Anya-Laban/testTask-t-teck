import React from 'react';
import s from './Slide.module.css';
import type { Slide as SlideType } from '../../types/Slide';
import { slidesImagesData } from '../../constants';

type Props = {
  slide: SlideType;
  isActive: boolean;
};

export const Slide: React.FC<Props> = ({ slide, isActive }) => {
  const { id, title, subTitle, linkLearnMore, slideImg } = slide;
  const slideData = slidesImagesData.find((d) => d.idSlide === id);

  return (
    <div className={s.slide}>
      <div className={s.container}>
        <div className={s.textContent}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.subtitle}>{subTitle}</p>
          <a className={s.learnMore} href={linkLearnMore}>
            Learn more
          </a>
        </div>

        <div className={s.slideImg} style={{ backgroundImage: `url(${slideImg.bgSrc})` }}>
          {slideData ? (
            <div
              className={s.slideImgBox}
              style={{
                width: slideData.width,
                height: slideData.height,
                position: 'relative',
              }}
            >
              {slideData.images.map((img, index) => {
                const deltaX = parseInt(img.firstLeft) - parseInt(img.left);
                const deltaY = parseInt(img.firstTop) - parseInt(img.top);

                return (
                  <img
                    key={index}
                    src={img.src}
                    className={`${s.animatedItem} ${isActive ? s.active : ''}`}
                    style={{
                      top: img.top,
                      left: img.left,
                      width: img.width,
                      height: img.height,
                      transform: isActive
                        ? 'translate(0, 0)'
                        : `translate(${deltaX}px, ${deltaY}px)`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                    alt={`slide-${slide.id}-img-${index}`}
                  />
                );
              })}
            </div>
          ) : (
            <img src={slide.slideImg.src} alt={slide.slideImg.alt} />
          )}
        </div>
      </div>
    </div>
  );
};

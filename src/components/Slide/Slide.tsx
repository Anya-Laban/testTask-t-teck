import React from "react";
import s from "./Slide.module.css";
import type { SlideImageData, Slide as SlideType } from "../../types/Slide";

type Props = {
  slide: SlideType;
  isActive: boolean;
};



const slidesImagesData: SlideImageData[] = [
  {
    idSlide: 1,
    width: "447px",
    height: "424px",
    images: [
      {
        src: `${import.meta.env.BASE_URL}slide1/image-1.png`,
        width: "340px",
        height: "319px",
        top: "50px",
        left: "155px",
        firstTop: "-400px",
        firstLeft: "300px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-2.png`,
        width: "157px",
        height: "121px",
        top: "110px",
        left: "138px",
        firstTop: "-300px",
        firstLeft: "100px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-3.png`,
        width: "34px",
        height: "23px",
        top: "285px",
        left: "265px",
        firstTop: "500px",
        firstLeft: "350px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-4.png`,
        width: "32px",
        height: "23px",
        top: "300px",
        left: "215px",
        firstTop: "550px",
        firstLeft: "100px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-5.png`,
        width: "37px",
        height: "34px",
        top: "360px",
        left: "320px",
        firstTop: "600px",
        firstLeft: "400px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-6.png`,
        width: "114px",
        height: "190px",
        top: "215px",
        left: "345px",
        firstTop: "100px",
        firstLeft: "600px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-7.png`,
        width: "35px",
        height: "24px",
        top: "390px",
        left: "45px",
        firstTop: "600px",
        firstLeft: "-100px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-8.png`,
        width: "28px",
        height: "19px",
        top: "275px",
        left: "110px",
        firstTop: "500px",
        firstLeft: "-50px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-9.png`,
        width: "51px",
        height: "164px",
        top: "250px",
        left: "170px",
        firstTop: "-200px",
        firstLeft: "-200px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide1/image-10.png`,
        width: "36px",
        height: "25px",
        top: "440px",
        left: "260px",
        firstTop: "700px",
        firstLeft: "300px",
      },
    ],
  },
  {
    idSlide: 2,
    width: "525px",
    height: "493px",
    images: [
      {
        src: `${import.meta.env.BASE_URL}slide2/image-1.png`,
        width: "368px",
        height: "382px",
        top: "45px",
        left: "240px",
        firstTop: "-300px",
        firstLeft: "240px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide2/image-2.png`,
        width: "114px",
        height: "82px",
        top: "340px",
        left: "220px",
        firstTop: "600px",
        firstLeft: "100px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide2/image-3.png`,
        width: "94.5px",
        height: "133px",
        top: "220px",
        left: "265px",
        firstTop: "100px",
        firstLeft: "-200px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide2/image-4.png`,
        width: "183px",
        height: "109px",
        top: "430px",
        left: "45px",
        firstTop: "700px",
        firstLeft: "0px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide2/image-5.png`,
        width: "170px",
        height: "230px",
        top: "245px",
        left: "370px",
        firstTop: "-200px",
        firstLeft: "500px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide2/image-6.png`,
        width: "85px",
        height: "191px",
        top: "145px",
        left: "145px",
        firstTop: "-150px",
        firstLeft: "-150px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide2/image-7.png`,
        width: "116px",
        height: "69px",
        top: "450px",
        left: "155px",
        firstTop: "700px",
        firstLeft: "300px",
      },
    ],
  },
  {
    idSlide: 3,
    width: "420px",
    height: "446px",
    images: [
      {
        src: `${import.meta.env.BASE_URL}slide3/item-1.png`,
        width: "83px",
        height: "140px",
        top: "0px",
        left: "265px",
        firstTop: "-120px",
        firstLeft: "265px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide3/item-2.png`,
        width: "63px",
        height: "72px",
        top: "50px",
        left: "150px",
        firstTop: "50px",
        firstLeft: "-100px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide3/item-3.png`,
        width: "99px",
        height: "164px",
        top: "135px",
        left: "215px",
        firstTop: "300px",
        firstLeft: "500px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide3/item-2.png`,
        width: "63px",
        height: "72px",
        top: "190px",
        left: "80px",
        firstTop: "500px",
        firstLeft: "-80px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide3/item-4.png`,
        width: "106px",
        height: "165px",
        top: "265px",
        left: "105px",
        firstTop: "265px",
        firstLeft: "-150px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide3/item-5.png`,
        width: "99px",
        height: "209px",
        top: "175px",
        left: "330px",
        firstTop: "600px",
        firstLeft: "330px",
      },
      {
        src: `${import.meta.env.BASE_URL}slide3/item-2.png`,
        width: "63px",
        height: "72px",
        top: "395px",
        left: "250px",
        firstTop: "800px",
        firstLeft: "600px",
      },
    ],
  },
];

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

        <div
          className={s.slideImg}
          style={{ backgroundImage: `url(${slideImg.bgSrc})` }}
        >
          {slideData ? (
            <div
              className={s.slideImgBox}
              style={{
                width: slideData.width,
                height: slideData.height,
                position: "relative",
              }}
            >
              {slideData.images.map((img, index) => {
                const deltaX = parseInt(img.firstLeft) - parseInt(img.left);
                const deltaY = parseInt(img.firstTop) - parseInt(img.top);

                return (
                  <img
                    key={index}
                    src={img.src}
                    className={`${s.animatedItem} ${isActive ? s.active : ""}`}
                    style={{
                      top: img.top,
                      left: img.left,
                      width: img.width,
                      height: img.height,
                      transform: isActive
                        ? "translate(0, 0)"
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

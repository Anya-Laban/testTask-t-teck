export type Slide = {
  id: number;
  title: string;
  subTitle: string;
  linkLearnMore: string;
  slideImg: {
    bgSrc: string;
    src: string;
    alt: string;
  };
};

export type SlideImageItem = {
  src: string;
  width: string;
  height: string;
  top: string;
  left: string;
  firstTop: string;
  firstLeft: string;
};

export type SlideImageData = {
  idSlide: number;
  width: string;
  height: string;
  images: SlideImageItem[];
};
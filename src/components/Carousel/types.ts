import { StaticImageData } from "next/image";
import { SwiperOptions } from "swiper/types";

export interface SlideItem {
  src: StaticImageData;
  brand?: string;
  model?: string;
  emphasis?: string;
  bgImage?: boolean;
}

export type Breakpoints = SwiperOptions["breakpoints"];

export interface CarouselProps {
  slides: SlideItem[];
  spaceBetween?: number;
  slidesPerView?: number;
  autoplayDelay?: number;
  loop?: boolean;
  textEmpty?: boolean;
  breakpoints?: Breakpoints;
}

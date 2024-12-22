import { StaticImageData } from "next/image";

export interface SlideItem {
  src: StaticImageData;
  brand?: string;
  model?: string;
  emphasis?: string;
  bgImage?: boolean;
}

export interface CarouselProps {
  slides: SlideItem[];
  spaceBetween?: number;
  slidesPerView?: number;
  autoplayDelay?: number;
  loop?: boolean;
  textEmpty?: boolean;
}

import { StaticImageData } from "next/image";

export interface SlideItem {
  src: StaticImageData;
  brand: string;
  model?: string;
  emphasis: string;
  bgImage?: boolean;
}

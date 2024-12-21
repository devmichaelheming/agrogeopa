import { StaticImageData } from "next/image";

export interface InformationItem {
  title: string;
  icon: StaticImageData | string;
}

export interface DroneItemProps {
  title: string;
  src: StaticImageData;
  subtitle: string;
  description: string;
  information: InformationItem[];
}

import AssistanceIMG from "~/assets/images/assistance2.png";
import SuportIMG from "~/assets/images/suport2.png";
import T25 from "~/assets/images/T25.png";
import T50 from "~/assets/images/T50.png";
import Carousel from "~/components/Carousel";
import { SlideItem } from "~/components/Carousel/types";
import Banner from "~/components/Sections/Banner";
import { SectionCarousel } from "~/styles/styles";
import React, { FC, ReactElement } from "react";

const slides: SlideItem[] = [
  {
    src: T25,
    brand: "DRONE DJI",
    model: "AGRAS",
    emphasis: "T25",
  },
  {
    src: AssistanceIMG,
    brand: "Assistência",
    emphasis: "Técnica",
    bgImage: true,
  },
  {
    src: T50,
    brand: "DRONE DJI",
    model: "AGRAS",
    emphasis: "T50",
  },
  {
    src: SuportIMG,
    brand: "Suporte",
    emphasis: "Pós venda",
    bgImage: true,
  },
];

const pages: FC = (): ReactElement => {
  return (
    <>
      <Banner />

      <SectionCarousel>
        <Carousel slides={slides} slidesToShow={5} interval={300000} />
      </SectionCarousel>
    </>
  );
};

export default pages;

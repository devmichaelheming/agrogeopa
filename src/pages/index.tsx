import {
  AssistanceIMG,
  SuportIMG,
  T25IMG,
  T50IMG,
  Location1IMG,
  Location2IMG,
  Location3IMG,
  Location4IMG,
  Location5IMG,
} from "~/assets/images";
import Carousel from "~/components/Carousel";
import Popup from "~/components/Popup";
import Banner from "~/components/Sections/Banner";
import Benefits from "~/components/Sections/Benefits";
import Footer from "~/components/Sections/Footer";
import InfoDrones from "~/components/Sections/InfoDrones";
import React, { FC, ReactElement } from "react";

const droneSlides = [
  {
    src: T25IMG,
    brand: "DRONE DJI",
    model: "AGRAS",
    emphasis: "T25",
  },
  {
    src: AssistanceIMG,
    brand: "Assistência",
    emphasis: "Técnica",
  },
  {
    src: T50IMG,
    brand: "DRONE DJI",
    model: "AGRAS",
    emphasis: "T50",
  },
  {
    src: SuportIMG,
    brand: "Suporte",
    emphasis: "Pós venda",
  },
  {
    src: T25IMG,
    brand: "DRONE DJI",
    model: "AGRAS",
    emphasis: "T25",
  },
];

const anotherSlides = [
  {
    src: Location1IMG,
  },
  {
    src: Location2IMG,
  },
  {
    src: Location5IMG,
  },
  {
    src: Location3IMG,
  },
  {
    src: Location4IMG,
  },
];

const pages: FC = (): ReactElement => {
  return (
    <>
      <Banner />

      <Carousel slides={droneSlides} />

      <Benefits />

      <InfoDrones />

      <Carousel
        slides={anotherSlides}
        slidesPerView={2}
        autoplayDelay={3000}
        textEmpty
      />

      <Footer />

      <Popup />
    </>
  );
};

export default pages;

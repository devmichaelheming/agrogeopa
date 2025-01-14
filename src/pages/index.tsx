import {
  AssistanceIMG,
  SuportIMG,
  T25IMG,
  T50IMG,
  Location1IMG,
  Location2IMG,
  TrainingIMG,
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
    src: TrainingIMG,
    brand: "Treinamento de",
    emphasis: "Pilotos",
  },
];

const anotherSlides = [
  {
    src: Location1IMG,
  },
  {
    src: Location2IMG,
  },
];

const pages: FC = (): ReactElement => {
  return (
    <>
      <Banner />

      <Carousel
        slides={droneSlides}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
        }}
      />

      <Benefits />

      <InfoDrones />

      <Carousel
        slides={anotherSlides}
        slidesPerView={2}
        autoplayDelay={3000}
        textEmpty
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
        }}
      />

      <Footer />

      <Popup />
    </>
  );
};

export default pages;

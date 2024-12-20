import AssistanceIMG from "~/assets/images/assistance2.png";
import SuportIMG from "~/assets/images/suport2.png";
import T25IMG from "~/assets/images/T25.png";
import T50IMG from "~/assets/images/T50.png";
import React, { FC, ReactElement } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import S from "./styles";
import { SlideItem } from "./types";

const slides: SlideItem[] = [
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

const CarouselComponent: FC = (): ReactElement => {
  return (
    <S.CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={8}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay
        scrollbar={{ draggable: true }}
        grabCursor={true}
        loop
        breakpoints={{
          400: {
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.Card>
              <S.StyledImage
                src={slide.src}
                alt={slide.brand}
                layout="responsive"
                priority
              />

              <S.SectionTitle>
                <S.SlideTitleBrand>{slide.brand}</S.SlideTitleBrand>
                <S.SectionModel>
                  {slide.model && (
                    <S.SlideTitleModel>{slide.model}</S.SlideTitleModel>
                  )}
                  <S.SlideTitleModelEmphasis>
                    {slide.emphasis}
                  </S.SlideTitleModelEmphasis>
                </S.SectionModel>
              </S.SectionTitle>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselContainer>
  );
};

export default CarouselComponent;

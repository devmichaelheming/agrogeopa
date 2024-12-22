import React, { FC, ReactElement } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import S from "./styles";
import { CarouselProps } from "./types";

const Carousel: FC<CarouselProps> = ({
  slides,
  spaceBetween = 8,
  slidesPerView = 4,
  autoplayDelay = 2000,
  loop = true,
  textEmpty = false,
}): ReactElement => {
  return (
    <S.CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        loop={loop}
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.Card>
              <S.StyledImage
                src={slide.src}
                alt={slide.brand || `img-carousel-${index}`}
                layout="responsive"
                priority
              />
              {!textEmpty && (
                <S.SectionTitle>
                  {slide.brand && (
                    <S.SlideTitleBrand>{slide.brand}</S.SlideTitleBrand>
                  )}
                  <S.SectionModel>
                    {slide.model && (
                      <S.SlideTitleModel>{slide.model}</S.SlideTitleModel>
                    )}
                    {slide.emphasis && (
                      <S.SlideTitleModelEmphasis>
                        {slide.emphasis}
                      </S.SlideTitleModelEmphasis>
                    )}
                  </S.SectionModel>
                </S.SectionTitle>
              )}
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselContainer>
  );
};

export default Carousel;
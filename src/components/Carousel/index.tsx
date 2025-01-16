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
  breakpoints,
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
        breakpoints={breakpoints}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.Card>
              <S.StyledImage
                src={slide.src}
                alt={slide.brand || `img-carousel-${index}`}
                layout="responsive"
                loading="lazy"
                priority={false}
                placeholder="blur"
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

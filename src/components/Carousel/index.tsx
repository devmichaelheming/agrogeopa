import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import S from "./styles";
import { CarouselProps } from "./types";

const Carousel: React.FC<CarouselProps> = ({
  slides,
  slidesToShow,
  interval = 3000,
}) => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(slidesToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(slidesToShow);

  const slideWidth = 100 / slidesPerView;
  const slidesRef = useRef([...slides, ...slides, ...slides]);

  const translateX = -(currentIndex * slideWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); // Exibe 1 slide em telas pequenas
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2); // Exibe 2 slides em telas médias
      } else {
        setSlidesPerView(slidesToShow); // Exibe o número original de slides em telas grandes
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama a função de resize inicialmente

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  useEffect(() => {
    const totalSlides = slides.length;

    if (currentIndex >= slidesRef.current.length - slidesPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slidesPerView);
      }, 500);
    }

    if (currentIndex < slidesPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides + slidesPerView - 1);
      }, 500);
    }
  }, [currentIndex, slides.length, slidesPerView]);

  return (
    <S.CarouselContainer>
      <S.SlidesWrapper translateX={translateX} transition={isTransitioning}>
        {slidesRef.current.map((slide, index) => (
          <S.Slide
            key={index}
            width={slideWidth}
            ref={ref}
            bgimage={slide.bgImage || false}
            src={slide.src}
          >
            {!slide.bgImage && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ y: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  layout="responsive"
                />
              </motion.div>
            )}

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
          </S.Slide>
        ))}
      </S.SlidesWrapper>
    </S.CarouselContainer>
  );
};

export default Carousel;

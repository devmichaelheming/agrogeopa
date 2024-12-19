import { StaticImageData } from "next/image";
import styled, { css } from "styled-components";

const Slide = styled.div<{
  width: number;
  bgImage: boolean;
  src: StaticImageData;
}>`
  flex: 0 0 ${(props) => props.width}%;
  box-sizing: border-box;
  height: 440px;
  padding: 0 18px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 57, 29, 1) 33%,
    rgba(0, 98, 49, 1) 67%,
    rgba(0, 133, 66, 1) 99%
  );
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  border: 4px solid rgb(2, 43, 23);
  position: relative;

  ${({ bgImage, src }) =>
    bgImage &&
    css`
      background-image: url(${src.src});

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `};

  img {
    border-radius: 8px;
    transition: 0.3s ease;
    padding-bottom: 80px;

    &:hover {
      transform: translateY(-40px);
      transition: 0.3s ease;
    }
  }

  /* Media Queries para responsividade */
  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SlidesWrapper = styled.div<{ translateX: number; transition: boolean }>`
  display: flex;
  transition: ${(props) =>
    props.transition ? "transform 0.5s ease-in-out" : "none"};
  transform: translateX(${(props) => props.translateX}%);
  gap: 12px;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  row-gap: 14px;

  background-color: #000000a3;
  padding: 6px 0 12px 0;

  position: absolute;
  bottom: 12px;
  left: 0;
`;

const SlideTitleBrand = styled.div`
  color: #fff;
  font-size: 38px;
  font-weight: 600;
  line-height: 28px;
`;

const SlideTitleModel = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 28px;
`;

const SectionModel = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  column-gap: 6px;
`;

const SlideTitleModelEmphasis = styled.div`
  color: #008542;
  font-size: 52px;
  font-weight: 700;
  line-height: 28px;
`;

export default {
  Slide,
  CarouselContainer,
  SlidesWrapper,
  SectionTitle,
  SlideTitleBrand,
  SlideTitleModel,
  SectionModel,
  SlideTitleModelEmphasis,
};

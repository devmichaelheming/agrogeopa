import Image from "next/image";
import styled from "styled-components";

const CarouselContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 20px;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media (max-width: 1024px) {
    height: 380px;
  }

  @media (max-width: 576px) {
    height: 275px;
  }

  @media (max-width: 575px) {
    height: 400px;
  }

  @media (max-width: 390px) {
    height: 350px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProductName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: bold;
  font-size: 1.1rem;
`;

const CustomPrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  color: #ffffff; /* Cor da seta */
  font-size: 30px;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
  transition: color 0.3s;

  &:hover {
    color: #ff7f50; /* Cor da seta ao passar o mouse */
  }
`;

const CustomNextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  color: #ffffff; /* Cor da seta */
  font-size: 30px;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
  transition: color 0.3s;

  &:hover {
    color: #ff7f50;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  row-gap: 14px;

  background-color: #000000a3;
  padding: 12px 0 12px 0;

  position: absolute;
  bottom: 12px;
  left: 0;
`;

const SlideTitleBrand = styled.div`
  color: #fff;
  font-size: 38px;
  font-weight: 600;
  line-height: 30px;

  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 22px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
    line-height: 20px;
  }
`;

const SlideTitleModel = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 28px;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
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

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    font-size: 38px;
  }
`;

export default {
  Card,
  ProductName,
  CarouselContainer,
  StyledImage,
  CustomPrevButton,
  CustomNextButton,
  SectionTitle,
  SlideTitleBrand,
  SlideTitleModel,
  SectionModel,
  SlideTitleModelEmphasis,
};

import styled, { keyframes } from "styled-components";

const floating = keyframes`
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SectionDrone = styled.div`
  background: rgb(0, 133, 66);
  background: linear-gradient(180deg, rgba(0, 133, 66, 1) 34%, #000 30%);
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  text-align: center;

  .img-logo {
    width: 520px;
    height: 250px;
    object-fit: cover;

    animation: ${floating} 3s ease-in-out infinite;

    @media (max-width: 768px) {
      width: 490px;
      height: 220px;
    }

    @media (max-width: 576px) {
      width: 390px;
      height: 170px;
    }

    @media (max-width: 430px) {
      width: 320px;
      height: 140px;
    }
  }

  @media (max-width: 1024px) {
    min-height: 740px;
  }

  @media (max-width: 576px) {
    min-height: 620px;
    background: linear-gradient(180deg, rgba(0, 133, 66, 1) 38%, #000 30%);
    padding-bottom: 40px;
  }
`;

export const SectionInformation = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    min-height: 440px;
  }
`;

export const TitleSectionDrone = styled.div`
  font-size: 54px;
  font-weight: 700;
  padding-bottom: 20px;
  color: rgb(1, 20, 10);
  width: 60%;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 576px) {
    width: 90%;
    font-size: 44px;
  }
`;

export const SubTitleSectionDrone = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 12px;
  color: rgb(211, 232, 221);
  padding-top: 28px;
  width: 60%;

  @media (max-width: 576px) {
    width: 90%;
    font-size: 20px;
  }
`;

export const DescriptionSectionDrone = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  width: 60%;

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    width: 90%;
    font-size: 14px;
  }

  @media (max-width: 430px) {
    text-align: justify;
  }
`;

export const SectionInfoItens = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 44px;
  column-gap: 34px;
  padding: 80px 0 40px 0;

  @media (max-width: 1280px) {
    width: 80%;
  }

  @media (max-width: 1024px) {
    width: 96%;
  }

  @media (max-width: 800px) {
    row-gap: 34px;
    column-gap: 24px;
  }

  .motion-div {
    @media (max-width: 576px) {
      width: 40%;
    }

    @media (max-width: 576px) {
      width: 45%;
    }
  }
`;

export default {
  Container,
  SectionDrone,
  SectionInformation,
  TitleSectionDrone,
  SubTitleSectionDrone,
  DescriptionSectionDrone,
  SectionInfoItens,
};

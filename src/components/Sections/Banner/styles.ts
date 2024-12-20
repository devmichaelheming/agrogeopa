import styled, { keyframes } from "styled-components";

const floating = keyframes`
  0%, 100% {
    transform: translateY(60px);
  }
  50% {
    transform: translateY(-60px);
  }
`;

const floatingTablet = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(60px);
  }
`;

const floatingMobile = keyframes`
  0%, 100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(40px);
  }
`;

const floatingMobileSmall = keyframes`
  0%, 100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .img-banner {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-banner-mobile {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
  }

  @media (max-width: 800px) {
    .img-banner {
      display: none;
    }

    .img-banner-mobile {
      display: block;
      width: 100%;
    }
  }
`;

export const SectionDrone = styled.div`
  position: absolute;
  top: 20%;
  left: 45%;

  @media (max-width: 1600px) {
    left: 42%;
  }

  @media (max-width: 1280px) {
    left: 44%;
  }

  @media (max-width: 1024px) {
    top: 20%;
    left: 42%;
  }

  @media (max-width: 800px) {
    width: 100%;
    left: 0;
    height: 50%;
    top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 430px) {
    top: 34px;
  }

  .img-t50 {
    width: 520px;
    height: 250px;
    object-fit: cover;

    @media (max-width: 1600px) {
      width: 480px;
      height: 220px;
    }

    @media (max-width: 1440px) {
      width: 420px;
      height: 200px;
    }

    @media (max-width: 1280px) {
      width: 380px;
      height: 180px;
    }

    @media (max-width: 1024px) {
      width: 340px;
      height: 140px;
    }

    @media (max-width: 800px) {
      width: 480px;
      height: 220px;
    }

    @media (max-width: 576px) {
      width: 340px;
      height: 160px;
    }

    @media (max-width: 500px) {
      width: 340px;
      height: 160px;
    }

    @media (max-width: 430px) {
      width: 280px;
      height: 130px;
    }
  }

  animation: ${floating} 5s ease-in-out infinite;

  @media (max-width: 1024px) {
    animation: ${floatingTablet} 5s ease-in-out infinite;
  }

  @media (max-width: 576px) {
    animation: ${floatingMobile} 5s ease-in-out infinite;
  }

  @media (max-width: 430px) {
    animation: ${floatingMobileSmall} 3.5s ease-in-out infinite;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 7vh;
  left: 21vh;
  transform: translateX(-50%);

  @media (max-width: 1920px) {
    left: 28vh;
  }

  @media (max-width: 1600px) {
    bottom: 5vh;
  }

  @media (max-width: 1440px) {
    bottom: 4vh;
    left: 24vh;
  }

  @media (max-width: 1280px) {
    left: 23vh;
    bottom: 3vh;
  }

  @media (max-width: 1024px) {
    left: 21vh;
    bottom: 2vh;
  }

  @media (max-width: 800px) {
    left: 50%;
    bottom: 20%;
  }

  @media (max-width: 576px) {
    left: 50%;
    bottom: 19%;
  }
`;

export const ButtonAction = styled.button`
  border: none;
  background-color: rgb(2, 100, 51);
  padding: 1rem 3rem;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateX(20px);
    background-color: rgb(4, 164, 84);
    transition: 0.3s ease;
  }

  @media (max-width: 1440px) {
    font-size: 0.8rem;
    padding: 1rem 3rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 1rem 5rem;
  }

  @media (max-width: 576px) {
    white-space: nowrap;
  }

  @media (max-width: 500px) {
    padding: 0.8rem 5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 430px) {
    padding: 0.6rem 4rem;
    font-size: 0.8rem;
  }
`;

export default {
  Banner,
  SectionDrone,
  ButtonWrapper,
  ButtonAction,
};

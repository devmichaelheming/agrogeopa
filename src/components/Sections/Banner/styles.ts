import PersonIMG from "~/assets/images/person3.png";
import SojaIMG from "~/assets/images/soja-web.jpg";
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
  background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 17%,
      rgba(0, 0, 0, 0.7315301120448179) 34%,
      rgba(0, 0, 0, 1) 66%
    ),
    url(${SojaIMG.src});

  width: 100%;
  height: calc(80vh);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;

    background-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7315301120448179) 34%,
        rgba(0, 0, 0, 1) 76%
      ),
      url(${SojaIMG.src});
    height: calc(100vh);
  }

  @media (max-width: 768px) {
    align-items: center;

    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0.6979166666666667) 30%,
        rgba(0, 0, 0, 0.3841911764705882) 50%,
        rgba(0, 0, 0, 0.7) 70%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${SojaIMG.src});
  }

  @media (max-width: 576px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7763480392156863) 40%,
        rgba(0, 0, 0, 1) 70%
      ),
      url(${SojaIMG.src});

    height: calc(100vh);
  }

  @media (max-width: 430px) {
    height: calc(90vh);
  }
`;

export const BannerPerson = styled.div`
  background-image: url(${PersonIMG.src});

  width: 350px;
  height: 720px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: absolute;
  bottom: 0;

  @media (max-width: 1600px) {
    height: 700px;
  }

  @media (max-width: 1440px) {
    height: 600px;
  }

  @media (max-width: 1024px) {
    height: 470px;
    background-size: 75%;
  }

  @media (max-width: 768px) {
    height: 445px;
    background-size: 70%;
  }
`;

export const SectionBanner = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: flex-end;
  }

  .descriptionAndLogo {
    width: 80%;

    @media (max-width: 1440px) {
      width: 60%;
    }

    @media (max-width: 1280px) {
      width: 40%;
    }

    @media (max-width: 1024px) {
      width: 100%;
      height: 40%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      row-gap: 8px;
    }

    @media (max-width: 576px) {
      row-gap: 8px;
      height: 50%;
      justify-content: space-evenly;
    }

    @media (max-width: 430px) {
      height: 60%;
    }
  }

  @media (max-width: 576px) {
    justify-content: space-between;
  }

  .img-logo {
    width: 330px;
    height: 150px;

    @media (max-width: 1024px) {
      width: 270px;
      height: 90px;
    }

    @media (max-width: 430px) {
      width: 250px;
      height: 70px;
    }
  }
`;

export const SectionTitle = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: 1600px) {
    width: 80%;
  }

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    align-items: center;
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 32px;
  color: #fff;
  font-weight: 600;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 1280px) {
    font-size: 22px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }

  @media (max-width: 430px) {
    font-size: 16px;
  }

  span {
    font-size: 42px;
    color: #008542;
    font-weight: 700;

    @media (max-width: 1280px) {
      width: 100%;
      font-size: 32px;
    }

    @media (max-width: 576px) {
      font-size: 26px;
    }

    @media (max-width: 430px) {
      font-size: 20px;
    }
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 400;

  flex-direction: column;
  display: flex;
  row-gap: 8px;

  @media (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ButtonAction = styled.button`
  border: none;
  background-color: rgb(2, 100, 51);
  padding: 12px 22px;
  height: 64px;
  width: 360px;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 18px;
  transition: 0.3s ease;

  &:hover {
    transform: translateX(20px);
    background-color: rgb(4, 164, 84);
    transition: 0.3s ease;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    height: 52px;
    width: 94%;
    margin-top: 8px;
  }
`;

export const SectionDrone = styled.div`
  position: absolute;
  top: 20%;
  left: 45%;

  @media (max-width: 1440px) {
    left: 48%;
  }

  @media (max-width: 1280px) {
    left: 44%;
  }

  @media (max-width: 1024px) {
    top: 10%;
    left: 62%;
  }

  @media (max-width: 768px) {
    top: 6%;
    left: 62%;
  }

  @media (max-width: 576px) {
    width: 100%;
    left: 0;
    height: 50%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 576px) {
    height: 40%;
  }

  /* @media (max-width: 430px) {
    top: 15%;
    left: 10%;
  } */

  .img-t50 {
    width: 520px;
    height: 250px;

    @media (max-width: 1440px) {
      width: 360px;
      height: 150px;
    }

    @media (max-width: 1024px) {
      width: 340px;
      height: 140px;
    }

    @media (max-width: 768px) {
      width: 260px;
      height: 100px;
    }

    @media (max-width: 576px) {
      width: 400px;
      height: 200px;
    }

    @media (max-width: 500px) {
      width: 360px;
      height: 150px;
    }

    @media (max-width: 430px) {
      width: 340px;
      height: 140px;
    }
  }

  animation: ${floating} 5s ease-in-out infinite;

  @media (max-width: 1024px) {
    animation: ${floatingTablet} 5s ease-in-out infinite;
  }

  @media (max-width: 576px) {
    animation: ${floatingMobile} 4s ease-in-out infinite;
  }

  @media (max-width: 430px) {
    animation: ${floatingMobileSmall} 3.5s ease-in-out infinite;
  }
`;

export const SectionPerson = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: 57%;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export default {
  Banner,
  BannerPerson,
  SectionBanner,
  SectionTitle,
  Title,
  SubTitle,
  ButtonAction,
  SectionDrone,
  SectionPerson,
};

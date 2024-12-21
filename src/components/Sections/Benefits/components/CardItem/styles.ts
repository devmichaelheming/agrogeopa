import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 280px;
  background-color: #131313;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
    background-color: rgb(41, 41, 41);
  }

  padding: 14px 24px;

  @media (max-width: 576px) {
    width: 100%;
    height: 280px;
  }
`;

export const Title = styled.div`
  color: #008542;
  font-weight: 600;
  font-size: 20px;
  padding: 48px 0 8px 0;
  text-align: initial;
  width: 100%;
`;

export const Description = styled.div`
  color: rgb(214, 214, 214);
  font-weight: 500;
  text-align: initial;
  width: 100%;
`;

export const SectionIcone = styled.div`
  background: rgb(0, 133, 66);
  background: linear-gradient(
    34deg,
    rgba(0, 133, 66, 1) 26%,
    rgba(3, 73, 38, 1) 80%
  );
  width: 82px;
  height: 82px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -24px;
  left: 24px;

  svg {
    font-size: 42px;
  }
`;

export default {
  Container,
  Title,
  Description,
  SectionIcone,
};
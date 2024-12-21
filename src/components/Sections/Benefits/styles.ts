import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 96%;
  }
`;

export const Title = styled.div`
  font-size: 38px;
  color: #008542;
  font-weight: 600;
  padding: 60px 0 60px 0;
  text-align: center;
`;

export const SectionCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 44px;
  column-gap: 34px;

  @media (max-width: 800px) {
    row-gap: 34px;
    column-gap: 24px;
  }

  @media (max-width: 576px) {
    row-gap: 44px;

    .motion-div {
      width: 100%;
    }
  }
`;

export const ButtonAction = styled.button`
  border: none;
  background-color: rgb(2, 100, 51);
  width: 400px;
  height: 64px;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s ease;
  margin-top: 40px;

  &:hover {
    transform: translateY(-10px);
    background-color: rgb(4, 164, 84);
    transition: 0.3s ease;
  }
`;

export default {
  Container,
  Title,
  SectionCards,
  ButtonAction,
};

import styled from "styled-components";
import { Link } from "react-router-dom";
export const ResultBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10vw [col-start]);
  justify-content: space-around;
  justify-items: center;
  background: #b5b5b5;
  border-radius: 30px;
  gap: 20px;
`;
export const Card = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 30px;
  width: 19vw;
  height: 21.5vh;
  gap: 10px;
  background: #bfbfbf;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const AvatarCard = styled.img`
  height: 100px;
  width: 100px;
`;
export const TextBlock = styled.div``;
export const NameCard = styled.h4``;
export const LinkUser = styled(Link)`
  display: ${(props) => props.$hidden};
`;
export const TextCard = styled.p`
  display: ${(props) => props.$hidden};
  margin: 0;
`;

import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const UpOrDown = styled.p`
  display: flex;
  justify-content: center;
  background: #ffdab9;
  width: 150px;
  border-radius: 20px;
`;

export const FiltersOption = styled.p`
  display: flex;
  justify-content: center;
  background: ${(props) => (props.$bgColor ? "#f35252" : "grey")};
  width: 150px;
  border-radius: 20px;
`;

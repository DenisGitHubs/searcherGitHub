import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h3`
  text-align: center;
`;
export const Error = styled.p`
  color: red;
  text-align: center;
`;
export const SearchBlock = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 30px;
`;

export const SearchIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`;

export const Input = styled.input`
  height: 30px;
  background: #f1f1f1;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 5px;
`;

export const ButtonSearch = styled.button`
  height: 30px;
  background: #d9d9d9;
  border-radius: 20px;
  &:hover {
    background: #b5b3b3;
  }
`;

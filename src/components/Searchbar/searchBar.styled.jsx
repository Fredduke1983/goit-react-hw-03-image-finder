import styled from '@emotion/styled';

const SearchBarStyle = styled.header`
  height: 100px;
  background-color: #00a3ff;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  box-shadow: 0px 1px 5px 5px grey;
`;

const SubmitBtn = styled.button`
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export { SearchBarStyle, SubmitBtn };

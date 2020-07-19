import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 20px;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.3;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    padding: 10px;
    background-color: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "gray"};
  }
`;

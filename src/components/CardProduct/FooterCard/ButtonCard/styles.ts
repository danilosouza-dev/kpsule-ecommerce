import styled from "styled-components";

export const ButtonCardContainer = styled.button`
  width: 10.75rem;
  height: 1.75rem;
  font-size: 1rem;
  font-weight: 700;
  background: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 30px;
  
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme["green-500"]};
  }
`
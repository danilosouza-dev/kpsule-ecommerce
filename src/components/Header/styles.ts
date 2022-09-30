import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 72px;
  background: ${(props) => props.theme["blue-gradient"]};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
export const HeaderWapper = styled.div`
  max-width: 90rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 1rem 2rem;

  @media screen and (max-width: 428px) {
    padding: 1rem 1rem;
  }
`
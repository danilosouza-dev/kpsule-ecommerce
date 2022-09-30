import styled from "styled-components";

export const CardProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  box-shadow: 0px 6px 6px #C6C9D6;

  padding: 1rem 1.0625rem;

  @media (min-width: 280px) {
    width: 100%;
  }

  @media (min-width: 428px){
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: 48%;
  }

  @media screen and (min-width: 800px) {
    width: 30%;
  }
  
`

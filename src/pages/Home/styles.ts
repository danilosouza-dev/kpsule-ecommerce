import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 90rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  padding: 1rem 2rem;
  margin: 0 auto;

  @media screen and (max-width: 428px) {
    padding: 0 1rem 1rem;
  }
  
`
export const TitleHome = styled.div`
  max-width: 90rem;
  padding: 0 2rem 1rem;
  margin: 6.25rem auto 1.875rem;

 h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
  }

 h3 {
    font-size: 1rem;
    font-weight: 400;

    strong {
      color: ${(props) => props.theme["blue-500"]};
    }
  }

  @media screen and (max-width: 428px) {
    padding: 0 1rem 1rem;
  }

  @media screen and (min-width: 600px) {
    margin: 6.25rem auto 1.875rem;

    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`
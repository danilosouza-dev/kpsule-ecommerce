import styled from "styled-components";

export const InfoProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & .title-card {

    & > span {
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 0.25rem;
    }

    & > h1 {
      font-size: 1.125rem;
      line-height: 1.375rem;
    }

    & > h2 {
      font-size: 1rem;
      font-weight: 400;

      strong {
        color: ${(props) => props.theme["green-300"]};
      }
    }
  }
`
import styled from "styled-components";

export const HeaderCardContainer = styled.header`
    display: flex;
    gap: 0.375rem;
    margin-bottom: 0.8125rem;

    & > .capsule-amount {
      width: 2.875rem;
      height: 1.5rem;
      background: ${(props) => props.theme["gray-100"]};
      border-radius: 0.25rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img.capsule {
        width: 0.5rem;
      }

      span {
          display: inline-block;
       }
     }

     img.imgIcon {
      width: 1.5rem;

      background: ${(props) => props.theme      ["blue-gradient"]};
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 4px;
    }
`
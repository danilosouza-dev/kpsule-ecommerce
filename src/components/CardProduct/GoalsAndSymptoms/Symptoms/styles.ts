import styled from "styled-components";

export const SymptomsContainer = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;

  & > div > h1 {
    font-size: 1rem;
    display: flex;
    gap: 0.5rem;

    .number-of-symptoms {
      width: 1rem ;
      height: 1rem ;

      font-size: 0.625rem;

      background: ${(props) => props.theme["green-gradient"]};
      color: ${(props) => props.theme.white};
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      border-radius: 50%;
      box-shadow: 0px 2px 2px rgba(84, 89, 118, 0.46);
    }
  }

  & > div > h2 {
    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme["gray-500"]};
    opacity: 0.6;
  }

  & > .symptoms-score-full-border {
    background: conic-gradient(
        ${(props) => props.theme["green-300"]}  90deg, 
        ${(props) => props.theme["blue-500"]} 180deg, 
        ${(props) => props.theme["blue-500"]} 180deg, 
        ${(props) => props.theme["green-300"]}  360deg, 
        transparent 0deg);
  }

  & > .symptoms-score-75-border {
    background: conic-gradient(
        ${(props) => props.theme["green-300"]}  90deg, 
        ${(props) => props.theme["blue-500"]} 135deg, 
        ${(props) => props.theme["blue-500"]} 135deg, 
        ${(props) => props.theme["green-300"]}  270deg, 
        transparent 0deg);
  }

  & > .symptoms-score-50-border {
    background: conic-gradient(
        ${(props) => props.theme["green-300"]}  45deg, 
        ${(props) => props.theme["blue-500"]} 180deg,  
        transparent 0deg);
  }

  & > .symptoms-score-25-border {
    background: conic-gradient(
        ${(props) => props.theme["green-300"]}  45deg, 
        ${(props) => props.theme["blue-500"]} 90deg,  
        transparent 0deg);
  }

  & > .symptoms-score {
      width: 3rem ;
      height: 3rem ;

      color: #000;

      display: flex;
      justify-content: center; 
      align-items: center;

      border-radius: 50%;

      & .circle-white-symptoms {
        background: #fff;
        width: 2.75rem ;
        height: 2.75rem ;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #bdbdbd;
        border-radius: 50%;
      }
    }
`

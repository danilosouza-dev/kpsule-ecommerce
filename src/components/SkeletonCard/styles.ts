import styled from "styled-components";

export const SkeletonContainer = styled.div`

.header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: start;
    align-items: center;
  }
}

.info-product {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.goals-and-symptoms {
  background: ${(props) => props.theme["gray-100"] };

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0.625rem 1rem;
  margin: 1.5rem 0;

  border-radius: 8px ;

  .goals {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .goals-circle {
    margin-bottom: 12px;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

`


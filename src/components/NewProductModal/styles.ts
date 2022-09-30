import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;

& > img {
  width: 8.125rem;
  margin-bottom: -1.19375rem;
}

& > h2 {
  font-size: 1.125rem;
  text-align: center;
  span {
    color: ${(props) => props.theme['green-500']};
  }
}

& > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & .btn-popup {
  font-weight: 700;

  width: 10.3125rem;
  height: 2.75rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-300']};

  border: none;
  border-radius: 1.8125rem;
  transition: 0.3s;
  cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["green-500"]};
    }
  }
}


`

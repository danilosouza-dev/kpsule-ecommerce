import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px transparent;
  }
  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-500']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

  }
  .react-modal-content  {
     width: 100%;
     max-width: 36rem;
     background: ${(props) => props.theme.white};

     margin: 0 1rem;
     padding: 2rem 1.8125rem;

     position: relative;

     border-radius: 8px;

     box-shadow: 0px 6px 6px #C6C9D6;
  }

  .btn-close-product-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.1);
    }
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
`
import styled from "styled-components";

interface CartProgressProps {
  cartProgress: number
}

export const CartButtonContainer = styled.div<CartProgressProps>`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.125rem;

    text-decoration: none;

    .number-of-products-in-cart {
      width: 1.5rem ;
      height: 1.5rem ;

      background: ${(props) => props.theme["green-gradient"]};
      color: ${(props) => props.theme.white};
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      border-radius: 50%;
      box-shadow: 0px 2px 2px rgba(84, 89, 118, 0.46);
    }

    .cart-button {
      width: 2.5rem ;
      height: 2.5rem ;

      background: 
        conic-gradient(
          ${
            (props) => props.cartProgress === 1 ? 
            "#21E7C5 45deg, #00AAFF 90deg, transparent 0deg" : 
            (props) => props.cartProgress === 2 ? 
            "#21E7C5 45deg, #00AAFF 180deg, transparent 0deg" : 
            (props) => props.cartProgress === 3 ? 
            "#21E7C5 90deg, #00AAFF 135deg, #00AAFF 135deg, #21E7C5 270deg, transparent 0deg" : 
            (props) => props.cartProgress >= 4 ? 
            "#21E7C5 90deg, #00AAFF 180deg, #00AAFF 180deg, #21E7C5 360deg, transparent 0deg" :
            "transparent, transparent"
        });
      
      color: #000;
 
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      z-index: 0;

      .circle-white-cart {
        background: #fff;
        width: 2rem ;
        height: 2rem ;

        position: absolute;

        border-radius: 50%;

        z-index: -1;
        img {
          position: absolute;
          z-index: 1;
        }
      }
    }
  }
`
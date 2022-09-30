import logoKpsule from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import { CartButton } from "../CartButton";

import { HeaderContainer, HeaderWapper } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWapper>
        <span>
          <NavLink to="/" title="home">
            <img src={logoKpsule} alt="logo kpsule" />
          </NavLink>
        </span>
        <CartButton />
      </HeaderWapper>
    </HeaderContainer>
  )
}
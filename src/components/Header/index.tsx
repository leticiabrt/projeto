import * as S from "./styles"
import Logo from "../../assets/truck.svg"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Lista</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}
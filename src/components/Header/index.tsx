import * as S from "./styles"

export function Header() {
  return (
    <S.Header>

      <S.NavBar>
        
        <ul>
          <li>
            <a href="/contato">Fale Conosco</a>
          </li>
          <li>
            <a href="/presenca">Presença</a>
          </li>
          <li>
            <a href="/perfil">Meu Perfil</a>
          </li>
          <li>
            <a href="/cadastro">Cadastrar</a>
          </li>
          <li>
            <a href="/checkin">Checkin</a>
          </li>
          <li>
            <a href="/treinos">Treinos CEFET-MG</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>

  )
}
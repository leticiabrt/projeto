import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
import Logo from "../../assets/header.png"

export const Header = styled.header`
  /* Cabeçalho */
  display: flex;
  height: 22rem;
  width: 100%;
  background-image: url(${Logo});
`

export const NavBar = styled.nav`
  /* Navegação */
  
  width: 100%;
  height: 5rem;
  background-color: #D49EFF;
  margin-top: 22rem;
  border-top: 0.2rem solid #8C21B1;
  border-bottom: 0.2rem solid #8C21B1;
  border-right: 0.2rem solid #8C21B1;

  ul {
    display: flex;
  justify-content: space-around;
  align-items: center; 
  
    li {
      padding: 1.5rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width:100%;
      border-left: 0.2rem solid #8C21B1;
      a {
        text-decoration: none;
        color: black;
        font-size: 150%;
      }
    }
    li:hover {
      background-color: #8C21B1;
    }
  }

`
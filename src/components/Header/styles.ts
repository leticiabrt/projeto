import styled from "styled-components"
import Logo from "../../assets/maiorr.png"

export const Header = styled.header`
  /* Cabeçalho */
  display: flex;
  height: 15rem;
  width: 100%;
  background-image: url(${Logo});
  margin-bottom:5rem;

  `

export const NavBar = styled.nav`
  /* Navegação */
  
  width: 100%;
  height: 5rem;
  background-color: #FFDE59;
  margin-top: 15rem;
  border-top: 0.2rem solid #D4B531;
  border-bottom: 0.2rem solid #D4B531;
  border-right: 0.2rem solid #D4B531;

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
      border-left: 0.2rem solid #D4B531;
      a {
        text-decoration: none;
        color: black;
        font-size: 150%;
      }
    }
    li:hover {
      background-color: #D4B531;
    }
  }

`
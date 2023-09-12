import styled from 'styled-components'

export const Section = styled.section`
  background-color: #F6EABB;
  min-height: calc(100vh - 9rem);
  width: 100%;
  height: 100%;
  font-size: large;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: normal;

  p{
    margin: 3rem;
    font-family: 'Lalezar', cursive;
    text-align: center;
    font-size: 30px;
  }

  img{
    width: 70%;
  }

  table tr th, table tr td{
    border: 0.1rem solid ;
    padding: 1rem;
    text-align: center;
    background-color: #FFF09F;
    margin: 5rem;
}

table {
    border-collapse: collapse;
}

.tabela-com-rolagem {
  width: 29rem; /* Largura do elemento de rolagem */
  height: 30rem; /* Altura do elemento de rolagem */
  overflow: auto; /* Ativa a rolagem quando o conteúdo da tabela exceder a altura definida */
}

`
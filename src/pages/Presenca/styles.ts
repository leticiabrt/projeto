import styled from 'styled-components'

export const Section = styled.section`
  background-color: #9DF1E7;
  position: absolute;
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
    padding: 0.45rem;
    text-align: center;
    background-color: #9DE2F1;
    margin: 5em;
}

table {
    border-collapse: collapse;
}

.tabela-com-rolagem {
  width: 36rem; /* Largura do elemento de rolagem */
  height: 30rem; /* Altura do elemento de rolagem */
  overflow: auto; /* Ativa a rolagem quando o conteúdo da tabela exceder a altura definida */
}

`
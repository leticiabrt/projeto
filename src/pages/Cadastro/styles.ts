import styled from 'styled-components'

export const Section = styled.section`
  background-color: #F6EABB;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: large;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  align-content: normal;
  
  form{
    display: flex;
    align-items: center;
    margin-left: 10rem;
    margin-top: 0;
    font-family: 'Roboto Slab', serif;
    font-size: larger;
  }

  p{
    margin: 10rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-family: 'Roboto Slab', serif;
    text-align: justify;
    font-size: larger;
    align-items: center;
  }

  button{
    background-color: #FFDE59;
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 0.2rem solid #D4B531;
    margin: 0.5rem;
    font-size: large;
    color: black;
  }

  input{
    width: 25rem;
    height: 2rem;
  } 
  input[type="radio"]{
    height: 1rem;
    width: 3rem;
  }

`
import styled from 'styled-components'

export const Section = styled.section`
  background-color: #9DF1E7;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
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
    background-color: #D49EFF;
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    margin: 0.5rem;
    font-size: large;
    color: white;
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
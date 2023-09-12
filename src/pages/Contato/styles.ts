import styled from 'styled-components'

export const Section = styled.section`
  background-color: #F6EABB;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 9rem);

  h1{
    font-family: 'Lalezar', cursive;
    font-size: 30px;
    padding-left: 2rem;
    padding-top: 4rem;
  }

  img[alt="whats"]{
    width: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
  }

  img{
    width: 5rem;
    margin-left: 2rem;
  }

  h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
    text-align: justify;
    margin-left: 2rem;
    margin-top: 1rem;
  }


  .teste  .accordion {
  background-color: #FFF09F;
  color: black;
  cursor: pointer;
  padding: 1rem;
  width: 96%;
  text-align: left;
  transition: 0.4s;
  margin-left: 2rem;
  font-size: 18px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.teste .active, .accordion:hover {
  background-color: #FFDE59;
}

/* Style the accordion panel. Note: hidden by default */
.teste .panel {
  padding: 18px;
  display: none;
  overflow: hidden;
  padding: 1rem;
  margin-left: 2rem;
  font-size: 18px;
  
}
.accordion:after {
  content: '+'; /* Unicode character for "plus" sign (+) */
  font-size: 15px;
  color: black;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "-"; /* Unicode character for "minus" sign (-) */
}
`

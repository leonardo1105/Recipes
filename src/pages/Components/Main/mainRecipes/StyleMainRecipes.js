import styled from "styled-components";

export const Main = styled.section`
  margin: 1em auto;
  max-width: 1920px;
  width: 100%;
  max-height: 3400px;
  height: 100%;
  background-color: #F2F4F1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10em;
`
export const H2 = styled.h2`
  margin-top: 6em;
  margin-bottom: 1em;
`
export const RowH2 = styled.div`
  width: 60px;
  border-radius: 2em;
  border: solid black 2px;
`
export const BoxFigure = styled.div`
  margin-top: 2em;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const Figure = styled.figure`
  max-height: 900px;
  max-width: 300px;
  width: 300px;
  margin-top: 2em;
  transition: 1s all;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
  figcaption{
    width: 286px;
    height: 200px;
    transition: 1s all;
    border-left: solid #FFFFFF 4px;
    border-top: solid #FFFFFF 1px;
    border-right: solid #FFFFFF 2px;
    box-shadow: 0px 7px 6px #00000029;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img{
    width: 286px;
    height: 250px;
  }
  @media only screen and (max-width: 650px){
    :hover{
      transform: scale(1.0);
    }
  }
`
export const RowH3 = styled.div`
  width: 30px;
  height: 1px;
  border-radius: 2em;
  border: solid black 1px;
`


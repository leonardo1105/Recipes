import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 2em;
  height: 20%;
  margin: 3em auto;
  z-index: 9;
  position: fixed;
  display: none;
  @media only screen and (max-width: 485px){
    display: flex;
  } 
`
export const Figure = styled.figure`
  display: none;
  @media only screen and (max-width: 485px){
    display: flex;
    right: 0.5em;
    top: 1em;
    position: fixed;
    button{
      position: relative;
      width: 50px;
      height: 50px;
      border: none;
      background-color: rgba(0,0,0,0);
    }
    img{
      position: relative;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0);
    }
  }
`
export const Ul = styled.ul`
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  z-index: 999;
  justify-content: space-around;
  border: solid black;
  align-items: center;
  li{
    padding: 2.4em;
    text-align: center;
    width: 100%;
    z-index: 999;
    background-color: rgba(210, 112, 85,0.7);
    :hover{
      background-color: #d27055;
    }
  }
`
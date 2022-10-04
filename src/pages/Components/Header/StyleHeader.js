import styled from "styled-components"
import BackGround from "../../../image/header/BackGround.png"

export const Header = styled.header`
  margin: 1em auto;
  max-width: 1920px;
  width: 97%;
  max-height: 1374px;
  height: 100vh;
  background-image: url(${BackGround});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Hurme Geometric Sans 1, SemiBold;
  h1{
   display: flex;
   justify-content: center;
   align-items: center;
   height: 80%;
   font-size: 6rem;
  }
  @media only screen and (max-width: 485px){
    background-position: right;
    h1{
      font-size: 2rem;
      height: 100%;
    }
  }

`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1852px;
  padding: 2em;
  height: 20%;
  margin: 0 auto;
  img{
    width: 40px;
  }
  @media only screen and (max-width: 485px){
    display: none;
  }
`
export const Ul = styled.ul`
  max-width: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 1rem;
  justify-content: space-around;
  align-items: center;
  li{
    padding: 0.5em;
    text-align: center;
    transition: 0.2s all;
    border:3px solid rgba(0,0,0,0);
    :hover{
      border: solid black;
    }
  }
  a{
    text-decoration: none;
    color: #000000;
    width: 30%;
  }
  @media only screen and (min-width: 486px) and (max-width: 800px){
    justify-content: space-around;
    max-width: 80%;
    a{
      width: 35%;
    }
  }
`


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
  padding-bottom: 10em;
  background:white;
  @media only screen and (max-width:738px){
    flex-direction: column;
  }
`
export const Colher=styled.img`
  width:100%;
`
export const CaixaImg=styled.figure`
  width:50%;
  height:100%;
  margin-top:-1rem;
  @media only screen and (max-width:738px){
    width:100%;
  }
`
export const CaixaConteudo=styled.section`
  width:50%;
  display:flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width:738px){
      width:65%;
    }
  h2{
    margin-top:-4.5rem;
    margin-bottom:1rem;
    font-family: 'Roboto';
    color:#373737;
    letter-spacing: 2px;
    font-weight: 500;
    @media only screen and (max-width:990px){
      font-size:1.3rem;
    }
    @media only screen and (max-width:826px){
      margin-top:1.5rem;
    }
    
  }

  p{
    width:60%;
    line-height: 25px;
    font-family: 'Roboto';
    color:#373737;
    font-weight:300;
    @media only screen and (max-width:1185px){
      width:80%;
      font-size:0.9rem;
    }
    @media only screen and (max-width:990px){
      width:90%;
    }
    @media only screen and (max-width:826px){
      font-size:0.8rem;
    }
  }
`

export const Linha=styled.div`
  width: 71px;
  height: 3px;
  background:#373737;
  margin-bottom:4.5rem;
  @media only screen and (max-width:1185px){
    margin-bottom:3.5rem;
  }
  @media only screen and (max-width:990px){
    margin-bottom:2rem;
  }
`


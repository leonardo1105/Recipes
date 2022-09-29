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
`
export const Colher=styled.img`
  width:100%;
  
`

export const CaixaImg=styled.figure`
  width:50%;
  height:100%;
  margin-top:-1rem;
`
export const CaixaConteudo=styled.section`
  width:50%;
  display:flex;
  flex-direction: column;
  align-items: center;

  h2{
    margin-top:-4.5rem;
    margin-bottom:1rem;
    font-family: 'Roboto';
    color:#373737;
    letter-spacing: 2px;
    font-weight: 500;
  }

  p{
    width:28.5rem;
    line-height: 25px;
    font-family: 'Roboto';
    color:#373737;
    font-weight:300;
  }
`

export const Linha=styled.div`
  width: 71px;
  height: 3px;
  background:#373737;
  margin-bottom:4.5rem;
`


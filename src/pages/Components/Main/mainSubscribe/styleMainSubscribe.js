import styled from "styled-components";

export const Form=styled.form`
    background:#DFE4DE;
    height: 400px;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    h2{
        font-weight:500;
    }
    
    div{
        display:flex;
        flex-direction: column;
        align-items:center;
        width:500px;
        height:220px;
        justify-content: space-evenly;
    }

    p{
        letter-spacing: 1px;
        font-weight:400;
    }
`

export const Input=styled.input` 
    width: 500px;
    height:60px;
    background-color:#EFF1EE;
    padding-left: 1.5rem;
    outline:none;
    border:none;
    @media only screen and (max-width:860px){
        width:60vw;
        height:50px;
        min-width:230px;
    }
`

export const Button=styled.button` 
    
    :hover{
        background:#373737;
        color:#DFE4DE;
    }
    transition:0.2s all;
    padding:10px 30px;
    background:none;
    border: 3px solid #373737;
    font-weight:500;
    letter-spacing: 3px;
    cursor:pointer;
    @media only screen and (max-width:420px){
        width:60vw;
        min-width:230px;
        padding:13px 30px;
    }
`
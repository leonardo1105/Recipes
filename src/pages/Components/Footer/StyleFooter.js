import styled from "styled-components";

export const Footer=styled.footer`
    padding-top:50px;
    background:#F2F4F1;
    
`
export const FooterContainer=styled.div` 
    display:flex;
    justify-content: space-around;
    @media only screen and (max-width:584px){
        flex-direction: column-reverse;
        align-items: center;
    }
    ul{
        display:flex;
        width:40%;
        justify-content: space-evenly;
        letter-spacing: 2px;
        font-size:0.9rem;
        @media only screen and (max-width:584px){
            flex-direction: column;
            align-items:center ;
            height:200px;
        }
        a{
            text-decoration: none;  
        }
        a:hover{
            transition:0.5s all;
        }
    }
    div{
        width:30%;
        min-width:164px;
    }
`
export const ImgContainer=styled.figure` 
    display:flex;
    width:60%;
    justify-content: space-evenly;
    @media only screen and (max-width:830px){
        width:90%;
        margin:0 auto;
    }
    @media only screen and (max-width:550px){
        width:100%;
    }
    img{
        width:35px;
    }
`

export const TextContainer=styled.div` 
    width:100%;
    background-color: #446061;
    margin-top:50px;
    padding:10px;
    display:flex;
    justify-content: center;
    p{
        width:900px;
        color:#FFFFFF;
        font-size:0.7rem;
        font-weight:200;
        @media only screen and (max-width:901px){
            text-align: center;
            width:100%;
        }
        @media only screen and (max-width:500px){
            font-size:0.4rem;
    }       
    }
    
    
`
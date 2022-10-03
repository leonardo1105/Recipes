import React from 'react';
import Facebook from '../../../image/footer/Facebook Ellipse.svg'
import Instagram from '../../../image/footer/Instagram Ellipse.svg'
import Pinterest from '../../../image/footer/Pinterest Ellipse.svg'
import Twitter from '../../../image/footer/Twitter ellipse.svg'
import * as S from './StyleFooter'

export default function Footer(){
  return(
    <S.Footer>
      <S.FooterContainer>
        <div>
        <S.ImgContainer>
          <img src={Instagram} alt="Logo do Instagram" />
          <img src={Twitter} alt="Logo do Twitter" />
          <img src={Facebook} alt="Logo do Facebook" />
          <img src={Pinterest} alt="Logo do Pinterest" />
        </S.ImgContainer>
        </div>

        <ul>
          <a href="#s.main"><li>ABOUT</li></a>
          <a href="#recipes"><li>RECIPES</li></a>
          <a href="#s.form"><li>SUBSCRIBE</li></a>
        </ul>
      </S.FooterContainer>
    <S.TextContainer>
      <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
    </S.TextContainer>
    </S.Footer>
  )
}
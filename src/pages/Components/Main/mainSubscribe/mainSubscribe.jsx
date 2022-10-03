import React from 'react';
import * as S from './styleMainSubscribe'

export default function Subscribe(){
  return(
    <S.Form id='s.form'>
      <div>
        <h2>SUBSCRIBE</h2>
        <p>Sign up for newsletter</p>
        <S.Input placeholder='Your email' type="email"/>
        <S.Button value="submit">SUBMIT</S.Button>
      </div>
    </S.Form>
  )
}
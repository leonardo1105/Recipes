import React from "react"
import RC from "../../../image/header/RC.svg"
import { Modal } from "../Modal/Modal.jsx"
import * as S from "./StyleHeader.js"

export function Header() {

  return (
    <S.Header>
      <S.Nav>
        <img src={RC} alt="RC Logo" />
        <S.Ul>
          <a href="#s.main"><li>ABOUT</li></a>
          <a href="#recipes"><li>RECIPES</li></a>
          <a href="#s.form"><li>SUBSCRIBE</li></a>
        </S.Ul>
      </S.Nav>
      <Modal />
      <h1>RECIPES</h1>
    </S.Header>
  )
}
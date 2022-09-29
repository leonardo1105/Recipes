import React from "react"
import { Link } from "react-router-dom"
import RC from "../../../image/header/RC.svg"
import { Modal } from "../Modal/Modal.jsx"
import * as S from "./StyleHeader.js"

export function Header() {

  return (
    <S.Header>
      <S.Nav>
        <img src={RC} alt="RC Logo" />
        <S.Ul>
          <Link to="#"><li>ABOUT</li></Link>
          <Link to="#"><li>RECIPES</li></Link>
          <Link to="#"><li>SUBSCRIBE</li></Link>
        </S.Ul>
      </S.Nav>
      <Modal />
      <h1>RECIPES</h1>
    </S.Header>
  )
}
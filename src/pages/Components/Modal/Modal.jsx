import React, { useState } from "react"
import Menu from "../../../image/header/Menu.png"
import X from "../../../image/header/X.png"
import * as S from "./StyleModal.js"

export function Modal() {
  const [status, setStatus] = useState(false)
  const Lista = () => {
    return (
      <S.Nav>
        <S.Ul>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li>SUBSCRIBE</li>
        </S.Ul>
      </S.Nav>
    )
  }

  return (
    <>
      <S.Figure>
        <button onClick={() => { setStatus(!status) }}>{status ? <img src={X} alt="Close" /> : <img src={Menu} alt="Menu" />}</button>
      </S.Figure>
      {status && Lista()}

    </>
  )
}
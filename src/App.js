import React from "react"
import * as S from "./Global/GlobalStyle"
import Routers from "../src/services/Routers.js"

export default function App() {

  return (
    <>
      <S.GlobalStyle />
      <Routers />
    </>
  )
}
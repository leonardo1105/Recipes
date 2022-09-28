import React from "react"
import Cake from "../../../../image/main/Bolo.png"
import Pizza from "../../../../image/main/Pizza.png"
import Vitamin from "../../../../image/main/Vitamin.png"
import * as S from "./StyleMainRecipes.js"
export function MainRecipes() {

  return (
    <S.Main>
      <S.H2>LATEST RECIPES</S.H2>
      <S.RowH2></S.RowH2>
      <S.BoxFigure>
        <S.Figure>
          <img src={Cake} alt="Red Velvet Cake" />
          <figcaption>
            <S.RowH3></S.RowH3>
            <h3>Red Velvet Cake</h3>
          </figcaption>
        </S.Figure>
        <S.Figure>
          <img src={Pizza} alt="Margueritha Pizza" />
          <figcaption>
            <S.RowH3></S.RowH3>
            <h3>Margueritha Pizza</h3>
          </figcaption>
        </S.Figure>
        <S.Figure>
          <img src={Vitamin} alt="Papaya Vitamin" />
          <figcaption>
            <S.RowH3></S.RowH3>
            <h3>Papaya Vitamin</h3>
          </figcaption>
        </S.Figure>
      </S.BoxFigure>
    </S.Main>
  )
}
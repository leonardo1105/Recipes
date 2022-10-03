import React from "react"
import * as S from "./StyleMainAbout.js"
import Colher from '../../../../image/main/Colher.png'

export function MainAbout() {

  return (
    <S.Main id="s.main">
      <S.CaixaImg>
        <S.Colher src={Colher} alt='Colher'/>
      </S.CaixaImg>
      <S.CaixaConteudo>
        <h2>ABOUT</h2>
        <S.Linha></S.Linha>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
      </S.CaixaConteudo>
    </S.Main>
  )
}
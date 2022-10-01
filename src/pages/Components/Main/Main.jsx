import React from "react"
import { MainRecipes } from "./mainRecipes/MainRecipes.jsx"
import { MainAbout } from "./mainAbout/MainAbout.jsx"
import MainSubscribe from './mainSubscribe/mainSubscribe.jsx'

export function Main() {

  return (
    <>
      <MainRecipes />
      <MainAbout />
      <MainSubscribe/>
    </>
  )
}
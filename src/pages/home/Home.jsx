import React from "react"
import { Link } from "react-router-dom"
export function Home() {

  return (
    <>
      <header>
        <ul>
          <li><Link>ABOUT</Link></li>
          <li><Link>RECIPES</Link></li>
          <li><Link>SUBSCRIBE</Link></li>
        </ul>
      </header>
    </>
  )
}
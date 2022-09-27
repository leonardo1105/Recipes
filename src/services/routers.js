import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/home.jsx"
import { Error } from "../pages/error.jsx"

export default function Rotas() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
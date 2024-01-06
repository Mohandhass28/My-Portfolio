import "./App.scss"
import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import Skills from "./Components/Skills"
import About from "./Components/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="skills" element={<Skills />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Languajes from "./data/Languajes"
import LanguajesList from "./components/Languajes/LanguajesList"
import Layout from "./components/Shared/Layout"
import Home from "./Pages/Home"
import Education from "./Pages/Education"
import Experience from "./Pages/Experience"
import Portfolios from "./Pages/Portfolios"
import Skills from "./Pages/Skills"

function App() {
    const [languajes, setLanguajes] = useState(Languajes)

    return (
      <Router> 
        <Routes>
          {/* <LanguajesList languajes={ languajes } /> */}
          <Route path="/" Component={Home}/>
          <Route path="/education" Component={Education}/>
          <Route path="/experience" Component={Experience}/>
          <Route path="/portfolio" Component={Portfolios}/>
          <Route path="/skills" Component={Skills} />
        </Routes>
      </Router>
    )
}

export default App
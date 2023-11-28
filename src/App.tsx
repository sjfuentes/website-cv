import React from "react"
import { useState } from "react"
import Languajes from "./data/Languajes"
import LanguajesList from "./components/Languajes/LanguajesList"
import Example from "./Layout"

function App() {
    const [languajes, setLanguajes] = useState(Languajes)

    return (
      <> 
        <Example/>
          <LanguajesList languajes={ languajes } />
        </>
    )
}

export default App
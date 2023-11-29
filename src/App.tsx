import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Education from "./Pages/Education"
import Experience from "./Pages/Experience"
import Portfolios from "./Pages/Portfolios"
import Skills from "./Pages/Skills"

function App() {
    return (
      <Router> 
        <Routes>
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
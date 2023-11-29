import { useState } from "react"
import Languajes from '../data/Languajes'
import LanguajesList from '../components/Languajes/LanguajesList'
import Layout from '../components/Shared/Layout'

function Skills() {
  const [languajes, setLanguajes] = useState(Languajes)
  return (
    <>
      <Layout title='Skills'/>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <LanguajesList languajes={ languajes } />
        </div>
      </main>
    </>
  )
}

export default Skills

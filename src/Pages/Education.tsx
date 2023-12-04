import { useState } from 'react'
import Layout from '../components/Shared/Layout'
import EducationList from '../components/Education/EducationList'
import Studies from '../data/Studies'

function Education() {
  const [studie, setStudie] = useState(Studies)
  return (
    <>
          <Layout title='Education'/>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <EducationList studies={ studie }/>
          </div>
        </main>
    </>
  )
}

export default Education

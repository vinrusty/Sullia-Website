import React from 'react'
import { Helmet } from 'react-helmet'
import Main from '../components/History/Main'
import TeamSection from '../components/Team/TeamSection'
const Team = () => {
  return (
    <>
        <Helmet>
            <title>Team Sullia</title>
        </Helmet>
        <div>
            <Main title="Team" preTitle="About Sullia" />
            <TeamSection />
        </div>
    </>
  )
}

export default Team
import React from 'react'
import { Helmet } from 'react-helmet'
import Main from '../components/History/Main'
import VissionMissionSection from '../components/VisionAndMisson/VissionMissionSection'

const VisionAndMission = () => {
  return (
    <>
        <Helmet>
            <title>Vision and Mission</title>
        </Helmet>
        <div>
            <Main title="Vision and Mission" preTitle="About Sullia" />
            <VissionMissionSection />
        </div>
    </>
  )
}

export default VisionAndMission
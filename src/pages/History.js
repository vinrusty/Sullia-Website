import React from 'react'
import Main from '../components/History/Main'
import HistoryMapSection from '../components/History/HistoryMapSection'
import HistorySection from '../components/History/HistorySection'
import { Helmet } from 'react-helmet'

function History() {
  return (
    <>
      <Helmet>
        <title>History of Sullia</title>
      </Helmet>
      <div>
          <Main title="History" preTitle="About Sullia" />
          <HistoryMapSection />
          <HistorySection title="Heading" alt={false} />
          <HistorySection title="Heading" alt={true} />
      </div>
    </>
  )
}

export default History
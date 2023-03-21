import React from 'react'
import CarouselSection from '../components/Home/CarouselSection'
import EventSection from '../components/Home/EventSection'
import Main from '../components/Home/Main'
import MapSection from '../components/Home/MapSection'
import TriSection from '../components/Home/TriSection'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Akhanda Sullia</title>
      </Helmet>
      <div>
          <Main />
          <CarouselSection />
          <EventSection />
          <TriSection />
          <MapSection />
      </div>
    </>
  )
}

export default Home
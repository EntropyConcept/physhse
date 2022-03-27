import type { NextPage } from 'next'
import TimelineCaf from '../components/Timeline/timelineCaf'
import { AspectRatio } from '@mantine/core'

const Home: NextPage = () => {

  return (
    <div >
      <TimelineCaf></TimelineCaf>
      <hr style={{borderColor: "#d8d8d8"}}/>
      <AspectRatio ratio={1080 / 720} mx="auto" sx={{maxWidth: "1000px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d336.0617759605667!2d37.663725682358425!3d55.76752227730843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b19323c909d%3A0x5e5686427df1af4f!2sMoscow%20State%20Institute%20Of%20Electronics%20And%20Mathematics!5e0!3m2!1sfr!2sru!4v1648382425905!5m2!1sru!2sru" loading="lazy" style={{borderRadius: ".5rem", border: "1px solid #bbb"}}></iframe>
      </AspectRatio>
    </div>
  )
}

export default Home

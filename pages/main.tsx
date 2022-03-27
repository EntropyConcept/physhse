import type { NextPage } from 'next'
import TimelineCaf from '../components/Timeline/timelineCaf'
import { AspectRatio } from '@mantine/core'

const Home: NextPage = () => {

  return (
    <div >
      <TimelineCaf></TimelineCaf>
      <hr style={{borderColor: "#d8d8d8"}}/>
      <AspectRatio ratio={1080 / 720} mx="auto" sx={{maxWidth: "1000px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d577.5546251695266!2d37.66375991035971!3d55.768036387392186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb0c881691c1eb61!2z0KTQsNC60YPQu9GM0YLQtdGCINGE0LjQt9C40LrQuCDQndCY0KMg0JLQqNCt!5e0!3m2!1sru!2sru!4v1648384661716!5m2!1sru!2sru" loading="lazy" style={{borderRadius: ".5rem", border: "1px solid #bbb"}}></iframe>
      </AspectRatio>
    </div>
  )
}

export default Home

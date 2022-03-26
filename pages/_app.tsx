import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header tab={0}></Header>
    <Component {...pageProps} />
  </>
}
export default MyApp

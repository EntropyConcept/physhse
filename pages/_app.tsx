import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header/header'
import Layout from '../components/Layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
export default MyApp

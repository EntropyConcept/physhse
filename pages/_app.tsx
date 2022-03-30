import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  
  return <>
    <Head>
      <title>HSE Physics</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
export default MyApp

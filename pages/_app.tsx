import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import { YMInitializer } from 'react-yandex-metrika';

function MyApp({ Component, pageProps }: AppProps) {
  
  return <>
    <YMInitializer accounts={[88068304]}/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
export default MyApp

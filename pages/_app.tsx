import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import { UserContext } from "../lib/context"
import { useUserData } from "../lib/hooks"

function MyApp({ Component, pageProps }: AppProps) {

  const userData :any = useUserData();

  return <>
    <Head>
      <title>HSE Physics</title>
    </Head>
    <UserContext.Provider value={userData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  </>
}
export default MyApp

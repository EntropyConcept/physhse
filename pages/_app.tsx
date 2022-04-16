import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import { UserContext } from "../lib/context"
import { useUserData } from "../lib/hooks"
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {

  const userData :any = useUserData();

  return <>
    <Head>
      <title>HSE Physics</title>
    </Head>
    <NotificationsProvider>
      <UserContext.Provider value={userData}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </NotificationsProvider>
  </>
}
export default MyApp

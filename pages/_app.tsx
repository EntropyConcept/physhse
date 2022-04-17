import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import { UserContext } from "../lib/context"
import { PathContext } from "../lib/context"
import { useUserData } from "../lib/hooks"
import { NotificationsProvider } from '@mantine/notifications';
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const userData :any = useUserData();
  const [path, setPath] = useState('');

  return <>
    <Head>
      <title>HSE Physics</title>
    </Head>
    
    <NotificationsProvider>
      <PathContext.Provider value={[path, setPath]}>
        <UserContext.Provider value={userData}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </PathContext.Provider>
    </NotificationsProvider>
  </>
}
export default MyApp

import type { NextPage } from 'next'
import Head from 'next/head'
import LoginForm from '../components/LoginForm/loginForm'

const login: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Вход</title>
      </Head>
      <LoginForm></LoginForm>
    </>
  )
}

export default login;

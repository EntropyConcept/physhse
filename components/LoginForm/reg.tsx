import React, { useState } from 'react'
import Head from "next/head"
import form from "./style.module.scss"
import Panel from "../Panel/panel"
import { Divider, Text } from '@mantine/core'
import Button from '../Button/button'
import Link from 'next/link'

export type Props = {

}

const reg = (props:Props) => {
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <form className={form.wrapper}>
        <Panel className={form.panel}>
          <div className={form.title}>Регистрация</div>
          <Text color="red" align='center'>Эта страница пока не используется, так как доступ есть только у почт <b>admin@hse.ru</b> и <b>editor@hse.ru</b></Text>
          <Divider my="sm"></Divider>
          <input type="text" placeholder='Почта @hse.edu' />
          <input type="password" placeholder='Пароль' />
          <input type="password" placeholder='Повтор пароля' />
          <Divider my="sm"></Divider>
          <Button>Зарегистрироваться</Button>
          <Link passHref href="/login"><div className={form.another}>Перейти ко входу</div></Link>
        </Panel>
      </form>
    </>
  )
}

export default reg;

import type { NextPage } from 'next'
import Selector from '../../components/Selector/selector'
import Panel from '../../components/Panel/panel'
import style from "../../styles/other.module.scss"
import { Accordion, Divider } from '@mantine/core'
import Head from "next/head"

const index : NextPage = () => {
  return (
    <>
      <Head>
        <title>Другое</title>
      </Head>
    <div className={style.columns}>
    <div>
      <Selector></Selector>
        <Divider my="sm"/>
        <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
          Сервисы пока в разработке
        </div>
    </div>
      {/* <div className={style.side}>
        <Panel>
        </Panel>
        <Divider my="sm"/>
      </div> */}
    </div>
    </>)
}

export default index;

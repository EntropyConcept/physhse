import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Table from "../components/Table/table"
import Columns from '../components/Columns/columns'
import { Accordion, Divider } from '@mantine/core'
import Panel from '../components/Panel/panel'
import Head from "next/head"
import {getHalfs} from "../lib/firebase"


export async function getStaticProps() {
    let data = await getHalfs(1);
    return {
      props: {
            half1: data.half1,
            half2: data.half2,
      }, 
    }
  }


export type Props= {
    half1: any[],
    half2: any[]
}

const c1 : NextPage<Props> = ({half1, half2})=>{
    return <>
        <Head>
            <title>Курс 1</title>
        </Head>
        <Table top static data={[{name: "Первый семестр"}]}/>
        {/* <Table data={[
            {name: "Математический анализ", link: "/c1/matan"},
            {name: "Математический аппарат"},
            {name: "Линейная алгебра"},
            {name: "Механика"},
            {name: "История"},
        ]} year={1} half={1}/> */}
        <Table data ={half1.map(entry=>{return {name: entry.name, link: "/c1/" + entry.token}})} year={1} half={1}/>
        <Table static data={[{name: "Второй семестр"}]}/>
        {/* <Table bottom data={[
            {name: "Математический анализ"},
            {name: "Аналитические приближенные методы"},
            {name: "Электромагнетизм"},
            {name: "Аналитическая механика"},
            {name: "Питон"},
            {name: "Дифференциальные уравнения"},
        ]} year={1} half={2}/> */}
        <Table bottom data ={half2.map(entry=>{return {name: entry.name, link: "/c1/" + entry.token}})} year={1} half={2}/>
        <Divider my="sm" label="Дополнительно" labelPosition='center'></Divider>
        <Columns cols="20rem" content={[
            <Panel overflow='hidden' padding={0} key="1">
                <Accordion multiple>
                    <Accordion.Item label='Сайты вышки'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Расписание'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Академические возможности'>В процессе обработки</Accordion.Item>
                </Accordion>
            </Panel>,
            <Panel overflow='hidden' padding={0} key="2">
                <Accordion multiple>
                    <Accordion.Item label='Майноры'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Школы'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Другие материалы'>В процессе обработки</Accordion.Item>
                </Accordion>
            </Panel>
        ]}/>
    </>
}

export default c1
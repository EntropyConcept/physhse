import type { NextPage } from 'next'
import Table from "../components/Table/table"
import Columns from '../components/Columns/columns'
import { Accordion } from '@mantine/core'
import Panel from '../components/Panel/panel'

const c2 : NextPage = ()=>{
    return <>
        <Table top static data={[{name: "Первый семестр"}]}/>
        <Table data={[
            {name: "Математический анализ"},
            {name: "Математический аппарат"},
            {name: "Линейная алгебра"},
            {name: "Механика"},
            {name: "История"},
        ]}/>
        <Table static data={[{name: "Второй семестр"}]}/>
        <Table bottom data={[
            {name: "Математический анализ"},
            {name: "Аналитические приближенные методы"},
            {name: "Электромагнетизм"},
            {name: "Аналитическая механика"},
            {name: "Питон"},
            {name: "Дифференциальные уравнения"},
        ]}/>
        <hr />
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

export default c2
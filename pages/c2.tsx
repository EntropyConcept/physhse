import type { NextPage } from 'next'
import React from 'react'
import Table from "../components/Table/table"
import Panel from "../components/Panel/panel"
import Columns from "../components/Columns/columns"
import {Accordion} from "@mantine/core"

const c2 : NextPage = () => {
  return (
    <>
      <Table top static data={[{name: "Первый семестр"}]}/>
        <Table data={[
            {name: "Вычислительная физика"},
            {name: "Математический анализ"},
            {name: "Теория вероятностей"},
            {name: "Теория поля"},
            {name: "ТФКП"},
            {name: "Термодинамика"},
            {name: "Тензоры"},
        ]}/>
        <Table static data={[{name: "Второй семестр"}]}/>
        <Table bottom data={[
            {name: "Химия для физиков"},
            {name: "Квантовая физика"},
            {name: "Математическая физика"},
            {name: "Оптика"},
            {name: "Обработка данных эксперимента"},
            {name: "Право"},
        ]}/>
        <hr />
        <Columns cols="20rem" content={[
            <Panel overflow='hidden' padding={0} key="1">
                <Accordion multiple>
                    <Accordion.Item label='Сайты вышки'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Расписание'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Наука'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Академические возможности'>В процессе обработки</Accordion.Item>
                </Accordion>
            </Panel>,
            <Panel overflow='hidden' padding={0} key="2">
                <Accordion multiple>
                    <Accordion.Item label='Олимпиады'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Выбор кафедры'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Учебные ресурсы'>В процессе обработки</Accordion.Item>
                    <Accordion.Item label='Другие материалы'>В процессе обработки</Accordion.Item>
                </Accordion>
            </Panel>
        ]}/>
    </>
  )
}

export default c2;

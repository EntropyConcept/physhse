import type { NextPage } from "next";
import React from "react";
import Table from "../components/Table/table";
import Panel from "../components/Panel/panel";
import Columns from "../components/Columns/columns";
import { Accordion, Divider } from "@mantine/core";
import Head from "next/head";
import { getHalfs } from "../lib/firebase";

export async function getStaticProps() {
    let data = await getHalfs(2);
    return {
        props: {
            half1: data.half1,
            half2: data.half2,
        },
        revalidate: 1200,
    };
}

export type Props = {
    half1: any[];
    half2: any[];
};

const c2: NextPage<Props> = ({ half1, half2 }) => {
    return (
        <>
            <Head>
                <title>Курс 2</title>
            </Head>
            <Table top static data={[{ name: "Первый семестр" }]} />
            {/* <Table data={[
            {name: "Вычислительная физика"},
            {name: "Математический анализ"},
            {name: "Теория вероятностей"},
            {name: "Теория поля"},
            {name: "ТФКП"},
            {name: "Термодинамика"},
            {name: "Тензоры"},
        ]} year={2} half={1}/> */}
            <Table
                data={half1.map((entry) => {
                    return { name: entry.name, link: "/c2/" + entry.token };
                })}
                year={2}
                half={1}
            />
            <Table static data={[{ name: "Второй семестр" }]} />
            {/* <Table bottom data={[
            {name: "Химия для физиков"},
            {name: "Квантовая физика"},
            {name: "Математическая физика"},
            {name: "Оптика"},
            {name: "Обработка данных эксперимента"},
            {name: "Право"},
        ]} year={2} half={2}/> */}
            <Table
                bottom
                data={half2.map((entry) => {
                    return { name: entry.name, link: "/c2/" + entry.token };
                })}
                year={2}
                half={2}
            />
            <Divider
                my="sm"
                label="Дополнительно"
                labelPosition="center"
            ></Divider>
            <Columns
                cols="20rem"
                content={[
                    <Panel overflow="hidden" padding={0} key="1">
                        <Accordion multiple>
                            <Accordion.Item label="Сайты вышки">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Расписание">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Наука">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Академические возможности">
                                В процессе обработки
                            </Accordion.Item>
                        </Accordion>
                    </Panel>,
                    <Panel overflow="hidden" padding={0} key="2">
                        <Accordion multiple>
                            <Accordion.Item label="Олимпиады">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Выбор кафедры">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Учебные ресурсы">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Другие материалы">
                                В процессе обработки
                            </Accordion.Item>
                        </Accordion>
                    </Panel>,
                ]}
            />
        </>
    );
};

export default c2;

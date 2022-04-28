import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Table from "../../components/Table/table";
import Columns from "../../components/Columns/columns";
import { Accordion, Divider } from "@mantine/core";
import Panel from "../../components/Panel/panel";
import Head from "next/head";
import { getHalfs } from "../../lib/firebase";

export async function getStaticProps() {
    let year1 = await getHalfs(1);
    let year2 = await getHalfs(2);
    let year3 = await getHalfs(3);
    let year4 = await getHalfs(4);
    let other = await getHalfs(0);
    return {
        props: {
            year1: year1,
            year2: year2,
            year3: year3,
            year4: year4,
            other: other
        },
        revalidate: 1200,
    };
}

export type Props = {
    year1: {half1: any[], half2: any[]},
    year2: {half1: any[], half2: any[]},
    year3: {half1: any[], half2: any[]},
    year4: {half1: any[], half2: any[]},
    other: {half1: any[], half2: any[]}
};

const index: NextPage<Props> = ({ year1, year2, year3, year4, other }) => {
    return (
        <>
            <Head>
                <title>Курс 1</title>
            </Head>
            <Table top static data={[{ name: "Первый модуль" }]} />
            <Table
                data={year1.half1.map((entry: any) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={1}
            />
            <Table static data={[{ name: "Второй модуль" }]} />
            <Table
                data={year1.half2.map((entry: any) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={2}
            />
            <Table static data={[{ name: "Третий модуль" }]} />
            <Table
                data={year2.half1.map((entry: any) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={2}
            />
            <Table static data={[{ name: "Четвертый модуль" }]} />
            <Table
                data={year2.half2.map((entry: any) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={2}
            />
            <Table static data={[{ name: "Дополнительно: Математика" }]} />
            <Table
                data={other.half1.map((entry: any) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={2}
            />
            <Table static data={[{ name: "Другое" }]} />
            <Table
                bottom
                data={other.half2.map((entry: any) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
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
                            <Accordion.Item label="Академические возможности">
                                В процессе обработки
                            </Accordion.Item>
                        </Accordion>
                    </Panel>,
                    <Panel overflow="hidden" padding={0} key="2">
                        <Accordion multiple>
                            <Accordion.Item label="Майноры">
                                В процессе обработки
                            </Accordion.Item>
                            <Accordion.Item label="Школы">
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

export default index;

import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Table from "../components/Table/table";
import Columns from "../components/Columns/columns";
import { Accordion, Divider } from "@mantine/core";
import Panel from "../components/Panel/panel";
import Head from "next/head";
import { getHalfs } from "../lib/firebase";

export async function getStaticProps() {
    let data = await getHalfs(0);
    return {
        props: {
            data: data.half1.concat(data.half2),
        },
        revalidate: 1200,
    };
}

export type Props = {
    data: any[];
};

const add: NextPage<Props> = ({ data }) => {
    return (
        <>
            <Head>
                <title>Дополнительно</title>
            </Head>
            <Table top static data={[{ name: "Математика" }]} />
            <Table
                data={data.filter((e)=>e.half == 0).map((entry) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={1}
            />
            <Table static data={[{ name: "Физика" }]} />
            <Table
                data={data.filter((e)=>e.half == 1).map((entry) => {
                    return { name: entry.name, link: "/courses/" + entry.token };
                })}
                year={1}
                half={2}
            />
            <Table static data={[{ name: "Другое" }]} />
            <Table
                bottom
                data={data.filter((e)=>e.half == 2).map((entry) => {
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
                            <Accordion.Item label="Где искать">
                                В процессе обработки
                            </Accordion.Item>
                        </Accordion>
                    </Panel>,
                    <Panel overflow="hidden" padding={0} key="2">
                        <Accordion multiple>
                            <Accordion.Item label="Как выжить">
                                В процессе обработки
                            </Accordion.Item>
                        </Accordion>
                    </Panel>,
                ]}
            />
        </>
    );
};

export default add;

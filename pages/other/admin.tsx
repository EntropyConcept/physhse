import type { NextPage } from "next";
import Selector from "../../components/Selector/selector";
import Panel from "../../components/Panel/panel";
import style from "../../styles/other.module.scss";
import { Accordion, Divider } from "@mantine/core";
import Head from "next/head";
import { Tabs } from "@mantine/core";
import { GitFork, Stack2 } from "tabler-icons-react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import depart from "../../public/departments.json";

const localeText = {
    columnMenuLabel: "Меню",
    columnMenuShowColumns: "Показать колонки",
    columnMenuFilter: "Фильтр",
    columnMenuHideColumn: "Скрыть",
    columnMenuUnsort: "Отменить сортировку",
    columnMenuSortAsc: "Сортировать по возрастанию",
    columnMenuSortDesc: "Сортировать по убыванию",
    footerRowSelected: (count: number) =>
        `${count.toLocaleString()} строка выбрана`,
};

const rowsDepart: GridRowsProp = depart.map((d: any) => {
    return {
        id: d.num,
        name: d.name,
        fullName: d.fullName,
        subject: d.subject,
    };
});

const columnsDepart: GridColDef[] = [
    { field: "fullName", editable: true, headerName: "Название", width: 400 },
    { field: "name", editable: true, headerName: "Аббревиатура", width: 150 },
    {
        field: "subject",
        editable: true,
        headerName: "Предмет изучения",
        width: 300,
    },
];

const Admin: NextPage = () => {
    return (
        <>
            <Head>
                <title>Управление</title>
            </Head>
            <div>
                <Panel padding={0}>
                    <Tabs>
                        <Tabs.Tab
                            label="Курсы"
                            icon={<Stack2 size={16} strokeWidth={1.5} />}
                        ></Tabs.Tab>
                        <Tabs.Tab
                            label="Кафедры"
                            icon={<GitFork size={16} strokeWidth={1.5} />}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <div style={{ flexGrow: 1 }}>
                                    <DataGrid
                                        autoHeight
                                        rows={rowsDepart}
                                        columns={columnsDepart}
                                        rowHeight={40}
                                        localeText={localeText}
                                    />
                                </div>
                            </div>
                        </Tabs.Tab>
                    </Tabs>
                </Panel>
            </div>
        </>
    );
};

export default Admin;

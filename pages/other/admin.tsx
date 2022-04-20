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
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../lib/firebase";
import dayjs from "dayjs";
import "dayjs/locale/ru";

export async function getServerSideProps() {
    const querySnapshot = await getDocs(collection(firestore, "courses"));
    const courses = [] as any[];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.created = data.created.toDate().toJSON();
        courses.push(data);
    });
    courses.sort((a: any, b: any) => {
        return a.deleted < b.deleted ? -1 : 1;
    });
    return {
        props: {
            data: courses,
        },
    };
}

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

type Props = {
    data: any;
};

const Admin: NextPage<Props> = ({ data }) => {
    console.log(data);
    const rowsCourses: GridRowsProp = data.map((d: any) => {
        return {
            id: d.token,
            token: d.token,
            name: d.name,
            year: d.year,
            half: d.half + 2 * (d.year - 1),
            state: d.deleted ? "Скрыт" : "Активен",
            editedBy: d.editedBy,
            created: dayjs(d.created).locale("ru").format("D MMM YYYY, HH:mm"),
        };
    });
    const columnsCourses: GridColDef[] = [
        { field: "name", headerName: "Название", width: 300 },
        { field: "token", headerName: "Токен", width: 100 },
        { field: "state", headerName: "Статус", width: 85 },
        { field: "year", headerName: "Курс", width: 50 },
        { field: "half", headerName: "Семестр", width: 80 },
        { field: "editedBy", headerName: "Редактировал", width: 200 },
        { field: "created", headerName: "Последнее изменение", width: 200 },
    ];
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
                                        rows={rowsCourses}
                                        columns={columnsCourses}
                                        rowHeight={40}
                                        localeText={localeText}
                                        disableSelectionOnClick
                                        sx={{
                                            "& .theme-faded": {
                                                backgroundColor: "#f0f0f0",
                                                color: "#999",
                                            },
                                        }}
                                        getRowClassName={(params) =>
                                            `theme-${
                                                params.row.state == "Скрыт"
                                                    ? "faded"
                                                    : "normal"
                                            }`
                                        }
                                    />
                                </div>
                            </div>
                        </Tabs.Tab>
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
                                        disableSelectionOnClick
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

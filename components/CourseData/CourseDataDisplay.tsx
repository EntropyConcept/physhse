import { NextPage } from "next";
import Link from "next/link";
import { ReactChild, useContext } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import style from "./style.module.scss";
import Panel from "../Panel/panel";
import { Divider, Text, Tabs, Button } from "@mantine/core";
import Entry from "./Entry";
import depart from "../../public/departments.json";
import { FileSpreadsheet, News, ListDetails, Edit } from "tabler-icons-react";
import { UserContext } from "../../lib/context";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { TypographyStylesProvider } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import display from "./display.module.scss";
import {
    FileText,
    FileCode,
    FileZip,
    FilePlus,
    File3d,
    File,
    FileMusic,
} from "tabler-icons-react";
import classNames from "classnames";

export type Props = {
    main: any;
    data: any;
    error: any;
};

interface File {
    name: string;
    extension: string;
    link: string;
    date?: Date;
}

const Files: File[] = [
    {
        name: "Конспект лекций - Марго.pdf",
        extension: "pdf",
        link: "",
        date: new Date(),
    },
    {
        name: "Конспект лекций - МФТИ.pdf",
        extension: "pdf",
        link: "",
        date: new Date(),
    },
];
const MapFileType: any = {
    pdf: <FileText strokeWidth={1} />,
    doc: <FileText strokeWidth={1} />,
    docx: <FileText strokeWidth={1} />,
    txt: <FileText strokeWidth={1} />,
    xls: <FileSpreadsheet strokeWidth={1} />,
    xlsx: <FileSpreadsheet strokeWidth={1} />,
    csv: <FileSpreadsheet strokeWidth={1} />,
    zip: <FileZip strokeWidth={1} />,
    rar: <FileZip strokeWidth={1} />,
    "7z": <FileZip strokeWidth={1} />,
    png: <File3d strokeWidth={1} />,
    jpg: <File3d strokeWidth={1} />,
    jpeg: <File3d strokeWidth={1} />,
    svg: <File3d strokeWidth={1} />,
    mp3: <FileMusic strokeWidth={1} />,
    mp4: <FileMusic strokeWidth={1} />,
    avi: <FileMusic strokeWidth={1} />,
    py: <FileCode strokeWidth={1} />,
    js: <FileCode strokeWidth={1} />,
    html: <FileCode strokeWidth={1} />,
    json: <FileCode strokeWidth={1} />,
};
const MapFileColor: any = {
    pdf: "#ff4f60",
    doc: "#2284ff",
    docx: "#2284ff",
    txt: "#444",
    xls: "#00a699",
    xlsx: "#00a699",
    csv: "#00a699",
    zip: "#ffa500",
    rar: "#ffa500",
    "7z": "#ffa500",
    png: "#8844ff",
    jpg: "#8844ff",
    jpeg: "#8844ff",
    svg: "#8844ff",
    mp3: "#ff8800",
    mp4: "#ff8800",
    avi: "#ff8800",
    py: "#2284ff",
    js: "#ff8800",
    html: "#ff4f60",
    json: "#ff8800",
};

const CourseDataDisplay: NextPage<Props> = ({ main, data, error }) => {
    const { user, username, role } = useContext(UserContext);
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                {user && (
                    <>
                        <Panel
                            style={{ marginBottom: 16 }}
                            className={style.forEditor}
                        >
                            <span>
                                Вы просматриваете данную страницу как студент
                            </span>
                            <Button
                                variant="outline"
                                leftIcon={<Edit size={16} />}
                            >
                                Перейти к редактированию
                            </Button>
                        </Panel>
                    </>
                )}
                <Panel padding={"0 0 1rem 0"}>
                    <Tabs>
                        <Tabs.Tab
                            label="Статья"
                            icon={<News size={18} strokeWidth={1} />}
                        >
                            <Text color="gray" style={{ margin: "0 1rem" }}>
                                Все расходимся, данные по предмету пока не
                                добавили
                            </Text>
                            <Divider m="sm" />
                            <TypographyStylesProvider>
                                {/* <div
                                    dangerouslySetInnerHTML={{
                                        __html: "",
                                    }}
                                ></div> */}
                            </TypographyStylesProvider>
                        </Tabs.Tab>
                        <Tabs.Tab
                            label="Прикреплённые файлы"
                            icon={<FileSpreadsheet size={18} strokeWidth={1} />}
                        >
                            <div className={display.filesWrapper}>
                                {Files.map((file: File, index) => (
                                    <div key={index} className={display.file}>
                                        <div
                                            className={display.fileIcon}
                                            style={{
                                                color: MapFileColor[
                                                    file.extension
                                                ],
                                            }}
                                        >
                                            {file.extension in MapFileType ? (
                                                MapFileType[file.extension]
                                            ) : (
                                                <File
                                                    strokeWidth={1}
                                                    size={"3rem"}
                                                />
                                            )}
                                        </div>
                                        <Text
                                            className={display.fileName}
                                            lineClamp={2}
                                            align="center"
                                            size="md"
                                        >
                                            {file.name}
                                        </Text>
                                        {file.date && (
                                            <div className={display.fileDate}>
                                                {dayjs(file.date)
                                                    .locale("ru")
                                                    .format("DD.MM.YYYY")}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {user && (
                                    <div
                                        className={classNames(
                                            display.file,
                                            display.fileAdd
                                        )}
                                    >
                                        <div className={display.fileIcon}>
                                            <FilePlus
                                                size={"3rem"}
                                                strokeWidth={1}
                                            ></FilePlus>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab
                            label="Работы"
                            icon={<ListDetails size={18} strokeWidth={1} />}
                        ></Tabs.Tab>
                    </Tabs>
                </Panel>
                <div className={style.footer}>
                    <Link href="#">Сообщить о проблеме</Link>
                    {user && <Link href="#">Редактировать</Link>}
                </div>
            </div>
            <div className={style.panel}>
                {main.deleted && (
                    <Panel style={{ background: "#48f", marginBottom: 8 }}>
                        <Text weight={600} color="white">
                            Данный курс скрыт из общего списка
                        </Text>
                    </Panel>
                )}
                <Divider
                    m="sm"
                    mt={0}
                    label="Основное"
                    labelPosition="center"
                ></Divider>
                <Panel>
                    <Entry main="Название" data={main.name} />
                    <Entry
                        main="Модуль"
                        data={`Курс ${main.year}, ${
                            main.half == 1 ? "первое" : "второе"
                        } полугодие`}
                    />
                    {data.examShow && (
                        <Entry
                            main="Экзамен"
                            data={dayjs(new Date(data.examDate))
                                .locale("ru")
                                .format("DD MMM, YYYY")}
                        />
                    )}
                    {data.hours && (
                        <Entry main="Количество часов" data={data.hours} />
                    )}
                    {main.depart != "0" && (
                        <Entry
                            main="Кафедра"
                            data={
                                depart[parseInt(main.depart) - 1].link ? (
                                    <Link
                                        href={
                                            depart[parseInt(main.depart) - 1]
                                                .link + ""
                                        }
                                    >
                                        {depart[parseInt(main.depart) - 1].name}
                                    </Link>
                                ) : (
                                    <span>
                                        {depart[parseInt(main.depart) - 1].name}
                                    </span>
                                )
                            }
                        />
                    )}
                </Panel>
                {((data.colocShow && data.coloc != 0) ||
                    (data.workShow && data.work != 0) ||
                    (data.controlShow && data.control != 0) ||
                    (data.formulaShow && data.formula != "")) && (
                    <>
                        <Divider
                            m="sm"
                            label="Работы"
                            labelPosition="center"
                        ></Divider>
                        <Panel>
                            {data.colocShow && data.coloc != 0 && (
                                <Entry
                                    main="Количество коллоквиумов"
                                    data={data.coloc}
                                />
                            )}
                            {data.workShow && data.work != 0 && (
                                <Entry
                                    main="Количество работ"
                                    data={data.work}
                                />
                            )}
                            {data.controlShow && data.control != 0 && (
                                <Entry
                                    main="Количество контрольных работ"
                                    data={data.control}
                                />
                            )}
                            {data.formulaShow && data.formula != "" && (
                                <Entry
                                    main="Формула оценки"
                                    data={data.formula}
                                />
                            )}
                        </Panel>
                    </>
                )}
                {data.lecturer && data.teachers.length != 0 && (
                    <>
                        <Divider
                            m="sm"
                            label="Преподаватели"
                            labelPosition="center"
                        ></Divider>
                        <Panel>
                            {data.lecturer && (
                                <Entry
                                    main="Преподаватель"
                                    data={
                                        <span>
                                            <br />
                                            <span
                                                style={{ marginRight: 16 }}
                                            ></span>
                                            {data.lecturer.name}
                                        </span>
                                    }
                                />
                            )}
                            {data.teachers.length != 0 && (
                                <Entry
                                    main="Другие преподаватели"
                                    noBreak
                                    data={
                                        <>
                                            {data.teachers.map(
                                                (
                                                    teacher: any,
                                                    index: number
                                                ) => (
                                                    <Text key={index}>
                                                        <span
                                                            style={{
                                                                marginRight: 16,
                                                            }}
                                                        ></span>
                                                        {teacher.name}
                                                    </Text>
                                                )
                                            )}
                                        </>
                                    }
                                />
                            )}
                        </Panel>
                    </>
                )}
                {data.custom.length != 0 && (
                    <>
                        <Divider
                            m="sm"
                            label="Дополнительно"
                            labelPosition="center"
                        ></Divider>
                        <Panel>
                            {data.custom.map((item: any, index: number) => {
                                return (
                                    <Entry
                                        main={item.title}
                                        data={item.data}
                                        key={index}
                                    />
                                );
                            })}
                        </Panel>
                    </>
                )}
                <Divider m="sm" label="Версия" labelPosition="center"></Divider>
                <Panel>
                    <Entry main="Автор" data={main.createdBy} />
                    <Entry main="Редактор" data={main.createdBy} />
                    <Entry
                        main="Дата изменения"
                        data={dayjs(new Date(main.created))
                            .locale("ru")
                            .format("DD MMM YYYY, HH:mm")}
                    />
                    <Entry main="Токен" data={main.token} />
                </Panel>
            </div>
        </div>
    );
};

export default CourseDataDisplay;

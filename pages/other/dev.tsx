import type { NextPage } from "next";
import React, { FunctionComponent } from "react";
import { Timeline, Text } from "@mantine/core";
import {
    Circle,
    GitCommit,
    RotateClockwise2,
    Infinity,
    CircleDotted,
    CircleHalf2,
    Rotate,
} from "tabler-icons-react";

const time = {
    color: "gray",
    style: {
        fontSize: ".8rem",
    },
};

const progress = [
    {
        selected: true,
        done: true,
        title: "Создать главную страниц",
        events: [
            {
                title: "Отобразить главный таймлайн для всех курсов",
                time: "26.03.2022",
            },
            {
                title: "Синхронизировать всю информацию по кафедрам",
                time: "27.03.2022",
            },
            {
                title: "Описание и кафедры на главной странице",
                time: "27.03.2022",
            },
        ],
    },
    {
        selected: true,
        done: true,
        title: "Курсы",
        events: [
            {
                title: "Добавлены вкладки курсов",
                time: "28.03.2022",
            },
            {
                title: "Добавлены таблица для курсов",
                time: "28.03.2022",
            },
            {
                title: "Картинки с котиками для 3 и 4 курсов",
                time: "28.03.2022",
            },
            {
                title: "Функция установки приложения PWA",
                time: "29.03.2022",
            },
        ],
    },
    {
        selected: true,
        done: true,
        title: "Управление",
        events: [
            {
                title: "Вход для редакторов",
                time: "04.04.2022",
            },
            {
                title: "Добавлена регистрация",
                time: "04.04.2022",
            },
            {
                title: "Функция добавления дисциплин",
                time: "16.04.2022",
            },
            {
                title: "Панель администратора",
                time: "16.04.2022",
            },
        ],
    },
    {
        selected: true,
        done: false,
        title: "Дисциплины",
        events: [
            {
                title: "Добавлено отображение дисциплин",
                time: "20.04.2022",
            },
            {
                title: "Добавлена страница редактирования дисциплин",
                time: "22.04.2022",
            },
            {
                title: "Ускорение загрузки страницы 2.1 сек → 0.4 сек",
                time: "24.04.2022",
            },
            {
                title: "Система файлов",
                time: "27.04.2022",
            },
            {
                title: "Прикрепление файлов и их отображение",
                time: "",
            },
            {
                title: "Изменение основных данных курса",
                time: "",
            },
            {
                title: "Добавление блоков текста к главной странице",
                time: "",
            },
            {
                title: "Добавление домашних работ",
                time: "-",
            },
            {
                title: "Исправление ошибок",
                time: "-",
            },
        ],
    },
    {
        selected: false,
        done: false,
        title: "Третий и четвертый курсы",
        events: [
            {
                title: "Добавить оставшуюся информацию для четвертого курса в главный таймлайн",
                time: "-",
            },
            {
                title: "Сделать функцию переключения между кафедрами на странице третьего и четвертого курсов",
                time: "-",
            },
        ],
    },
    {
        selected: false,
        done: false,
        title: "Остальное",
        events: [
            {
                title: "Интеграция с ПУД",
                time: "-",
            },
            {
                title: "Интеграция с расписанием",
                time: "-",
            },
        ],
    },
];

const dev: NextPage = () => {
    return (
        <>
            <Timeline
                active={progress.filter((item) => item.selected).length}
                bulletSize={24}
                lineWidth={2}
                sx={(theme) => ({
                    ".mantine-Timeline-item::before": {
                        borderColor: theme.colors.blue[6],
                    },
                    ".mantine-Timeline-item:not(.mantine-Timeline-itemActive)::before":
                        {
                            borderColor: theme.colors.dark[2],
                        },
                    ".mantine-Timeline-itemBullet": {
                        border: `2px solid ${theme.colors.blue[6]}`,
                        // background: "#fff"
                    },
                })}
            >
                <Timeline.Item
                    bullet={<Circle size={16} />}
                    title="План разработки"
                ></Timeline.Item>
                {/*                <Timeline.Item
                    bullet={<RotateClockwise2 size={16} />}
                    title="Второй и третий курс"
                    lineVariant="dotted"
                >
                    Добавить оставшуюся информацию для четвертого курса в
                    главный таймлайн
                    <Text {...time}>To Do</Text>
                    Сделать функцию переключения между кафедрами на странице
                    третьего и четвертого курсов
                    <Text {...time}>To Do</Text>
                </Timeline.Item>
                <Timeline.Item
                    bullet={<RotateClockwise2 size={16} />}
                    title="Сделать регистрацию"
                    lineVariant="dotted"
                >
                    Логин для админов
                    <Text {...time}>To Do</Text>
                    Панель админов
                    <Text {...time}>To Do</Text>
                </Timeline.Item>
                <Timeline.Item
                    bullet={<RotateClockwise2 size={16} />}
                    title="Добавление функций по запросам"
                    lineVariant="dotted"
                >
                    Интеграция с ПУД
                    <Text {...time}>To Do</Text>
                    Интеграция с расписанием
                    <Text {...time}>To Do</Text>
                </Timeline.Item>*/}
                {progress.map((item, index) => (
                    <Timeline.Item
                        key={index}
                        lineVariant={item.done ? "solid" : "dashed"}
                        title={item.title}
                        bullet={
                            item.selected ? (
                                item.done ? (
                                    <CircleHalf2 size={16} />
                                ) : (
                                    <RotateClockwise2 size={16} />
                                )
                            ) : (
                                <CircleDotted size={16} />
                            )
                        }
                    >
                        {item.events.map((event, index) => (
                            <>
                                <Text
                                    color={
                                        event.time == "-"
                                            ? "#444"
                                            : event.time
                                            ? "default"
                                            : "#08f"
                                    }
                                >
                                    {event.title}
                                </Text>
                                <Text {...time}>
                                    {event.time == "-"
                                        ? "TBA"
                                        : event.time
                                        ? event.time
                                        : "В процессе"}
                                </Text>
                            </>
                        ))}
                    </Timeline.Item>
                ))}
                <Timeline.Item
                    bullet={<Infinity size={16} />}
                    title="Поддержка сайта"
                    lineVariant="dotted"
                >
                    <Text>Добавление функций по запросам</Text>
                    <Text>Исправления</Text>
                    <Text>Интеграции</Text>
                </Timeline.Item>
            </Timeline>
        </>
    );
};

export default dev;

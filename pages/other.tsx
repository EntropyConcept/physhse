import type { NextPage } from 'next'
import React, {FunctionComponent} from 'react'
import { Timeline, Text } from '@mantine/core'
import {Circle, GitCommit, RotateClockwise2, Infinity} from "tabler-icons-react"

const time = {
  color: "gray",
  style: {
    fontSize: ".8rem"
  }
}


const other : NextPage = () => {
  return (
    <>
      <Timeline active={2} bulletSize={24} lineWidth={2} sx={(theme) => ({
          '.mantine-Timeline-item::before': {
            borderColor: theme.colors.blue[6]
          },
          '.mantine-Timeline-item:not(.mantine-Timeline-itemActive)::before': {
            borderColor: theme.colors.dark[2]
          },
          ".mantine-Timeline-itemBullet": {
            // border: `2px solid ${theme.colors.blue[6]}`,
            // background: "#fff"
            background: theme.colors.dark[3],
            color: "#fff"
          }
        })}>
        <Timeline.Item bullet={<Circle size={16}/>} title="План разработки">
        </Timeline.Item>
        <Timeline.Item bullet={<GitCommit size={16}/>} title="Создать главную страницу">
          Отобразить главный таймлайн для всех курсов.
          <Text {...time}>26.03.2022</Text>
          Синхронизировать всю информацию по кафедрам
          <Text {...time}>28.03.2022</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<GitCommit size={16}/>} title="Добавить текстовый контент">
          Описание и кафедры на главной странице
          <Text {...time}>28.03.2022</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<RotateClockwise2 size={16}/>} title="Добавить файлы" lineVariant='dotted'>
          Домашние работы
          <Text {...time}>To Do</Text>
          Материалы от преподавателей
          <Text {...time}>To Do</Text>
          Дополнительные материалы
          <Text {...time}>To Do</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<RotateClockwise2 size={16}/>} title="Сделать регистрацию" lineVariant='dotted'>
          Логин для админов
          <Text {...time}>To Do</Text>
          Панель админов
          <Text {...time}>To Do</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<RotateClockwise2 size={16}/>} title="Редактирование материалов" lineVariant='dotted'>
          Добавить редактор для админов
          <Text {...time}>To Do</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<Infinity size={16}/>} title="Поддержка сайта" lineVariant='dotted'>
        </Timeline.Item>
      </Timeline>
    </>
  )
}

export default other;

import React, {ReactNode} from 'react'
import style from "./style.module.scss"
import Link from 'next/link'
import { GitBranch, School, Affiliate, GitFork, FileCertificate, Atom2, LayersLinked, MailForward } from 'tabler-icons-react'

export interface Props{
}

const buttons = [
    {
        id: "1",
        name: "Рейтинг",
        link: "other",
        icon: School
    },
    {
        id: "2",
        name: "Преподаватели",
        link: "other",
        icon: Affiliate
    },
    {
        id: "3",
        name: "Справки",
        link: "other",
        icon: FileCertificate
    },
    {
        id: "4",
        name: "Майноры",
        link: "other",
        icon: Atom2
    },
    {
        id: "5",
        name: "Кафедры",
        link: "other",
        icon: GitFork
    },
    {
        id: "6",
        name: "Коворкинг",
        link: "dev",
        icon: LayersLinked
    },
    {
        id: "7",
        name: "Отправка ДЗ",
        link: "other",
        icon: MailForward
    },
    {
        id: "8",
        name: "Разработка",
        link: "other/dev",
        icon: GitBranch
    },
]

const Selector = (props: Props) => {
    return <div className={style.wrapper}>
        <div className={style.flex}>
            {buttons.map((b) => {
                return <Link passHref href={b.link} key={b.id}>
                    <div className={style.item}><b.icon size="2rem" strokeWidth={1}/><div className={style.text}>{b.name}</div></div>
                </Link>
            })}
        </div>
    </div>
}

export default Selector;
import React, {ReactNode} from 'react'
import style from "./style.module.scss"
import Link from 'next/link'
import { GitBranch, School, Affiliate, GitFork, FileCertificate, Atom2, LayersLinked, MailForward, LayoutGrid } from 'tabler-icons-react'

export interface Props{
}

const buttons = [
    {
        name: "Рейтинг",
        link: "other",
        icon: School
    },
    {
        name: "Преподаватели",
        link: "other",
        icon: Affiliate
    },
    {
        name: "Справки",
        link: "other",
        icon: FileCertificate
    },
    {
        name: "Майноры",
        link: "other",
        icon: Atom2
    },
    {
        name: "Кафедры",
        link: "other",
        icon: GitFork
    },
    {
        name: "Коворкинг",
        link: "other",
        icon: LayersLinked
    },
    {
        name: "Лекторий",
        link: "other",
        icon: LayoutGrid
    },
    {
        name: "Разработка",
        link: "other/dev",
        icon: GitBranch
    },
]

const Selector = (props: Props) => {
    return <div className={style.wrapper}>
        <div className={style.flex}>
            {buttons.map((b, index) => {
                return <Link passHref href={b.link} key={index}>
                    <div className={style.item}><b.icon size="2rem" strokeWidth={1}/><div className={style.text}>{b.name}</div></div>
                </Link>
            })}
        </div>
    </div>
}

export default Selector;
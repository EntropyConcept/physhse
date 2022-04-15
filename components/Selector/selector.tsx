import React, {ReactNode} from 'react'
import style from "./style.module.scss"
import Link from 'next/link'
import { GitBranch, School, Affiliate, GitFork, FileCertificate, Atom2, LayersLinked, MailForward, LayoutGrid } from 'tabler-icons-react'
import classNames from 'classnames'

export interface Props{
}

const buttons = [
    {
        name: "Рейтинг",
        link: "other",
        icon: School,
        locked: true
    },
    {
        name: "Преподаватели",
        link: "other",
        icon: Affiliate,
        locked: true
    },
    {
        name: "Майноры",
        link: "other",
        icon: Atom2,
        locked: true
    },
    {
        name: "Кафедры",
        link: "other",
        icon: GitFork,
        locked: true
    },
    {
        name: "Коворкинг",
        link: "other",
        icon: LayersLinked,
        locked: true
    },
    {
        name: "Лекторий",
        link: "other",
        icon: LayoutGrid,
        locked: true
    },
    {
        name: "Справки",
        link: "other/inquiry",
        icon: FileCertificate,
        locked: false
    },
    {
        name: "Разработка",
        link: "other/dev",
        icon: GitBranch,
        locked: false
    },
]

const Selector = (props: Props) => {
    return <div className={style.wrapper}>
        <div className={style.flex}>
            {buttons.map((b, index) => {
                return <Link passHref href={b.link} key={index}>
                    <div className={classNames(style.item, {[style.locked]: b.locked})}><b.icon size="2rem" strokeWidth={1}/><div className={classNames(style.text)}>{b.name}</div></div>
                </Link>
            })}
        </div>
    </div>
}

export default Selector;
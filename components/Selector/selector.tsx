import React, {ReactNode, useContext} from 'react'
import style from "./style.module.scss"
import Link from 'next/link'
import { GitBranch, School, Affiliate, GitFork, FileCertificate, Atom2, LayersLinked, Drone, LayoutGrid } from 'tabler-icons-react'
import classNames from 'classnames'
import { UserContext } from '../../lib/context'
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
    const { user, username, role } = useContext(UserContext); 
    return <div className={style.wrapper}>
        <div className={style.flex}>
            {buttons.map((b, index) => {
                return <Link passHref href={b.link} key={index}>
                    <div className={classNames(style.item, {[style.locked]: b.locked})}><b.icon size="2rem" strokeWidth={1}/><div className={classNames(style.text)}>{b.name}</div></div>
                </Link>
            })}
            {username && <Link passHref href={"other/admin"}>
                    <div className={classNames(style.item)}><Drone size="2rem" strokeWidth={1}/><div className={classNames(style.text)}>Админ-панель</div></div>
            </Link>}
        </div>
    </div>
}

export default Selector;
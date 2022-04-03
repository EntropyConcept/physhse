import { FunctionComponent, ReactNode } from "react";
import style from "./style.module.scss"
import Link from "next/link"
import classNames from "classnames"
import { Plus, X } from "tabler-icons-react"
import { UserContext } from '../../lib/context'
import { useContext, useState } from 'react'

interface entry{
    name : string,
    content ?: ReactNode,
    link ?: string
}

type Props = {
    data : entry[],
    top ?: boolean,
    bottom ?: boolean,
    static ?: boolean,
    nolines ?: boolean
}

const Table : FunctionComponent<Props> = (props: Props) => {
    const [data, setData] = useState(props.data);
    const {user, username, role} = useContext(UserContext);
    return <div className={style.wrapper}>
        <div className={classNames(style.table, {[style.top]: props.top, [style.bottom]: props.bottom, [style.static]: props.static, [style.nolines]: props.nolines})}>
            {data.map((d)=>{
                if (d.link){
                    return <Link key={d.name} passHref href={d.link?d.link:"#"}>
                        <div className={classNames(style.entry, style.link)}>
                            {d.content?d.content:d.name}
                        </div>
                    </Link>
                }
                return <div key={d.name} className={classNames(style.entry, {[style.add]: d.name=="<add>"})}>{(d.content?d.content:d.name)}</div>
            })}
            {/* {(username && !props.static) && <div className={classNames(style.entry, style.add)} onClick={()=>{let copy=data.concat(); copy.push({name: "Новый раздел"}); setData(copy)}}>
                <Plus size="1.2rem" strokeWidth={2} />
            </div>} */}
        </div>
    </div>
}

export default Table;
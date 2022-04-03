import { FunctionComponent, ReactNode } from "react";
import style from "./style.module.scss"
import Link from "next/link"
import classNames from "classnames"
import { LayoutGridAdd } from "tabler-icons-react"

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
    return <div className={style.wrapper}>
        <div className={classNames(style.table, {[style.top]: props.top, [style.bottom]: props.bottom, [style.static]: props.static, [style.nolines]: props.nolines})}>
            {props.data.map((d)=>{
                if (d.link){
                    return <Link key={d.name} passHref href={d.link?d.link:"#"}><div className={classNames(style.entry, style.link)}>{d.content?d.content:d.name}</div></Link>
                }
                return <div key={d.name} className={classNames(style.entry, {[style.add]: d.name=="<add>"})}>{d.name=="<add>"?
                <>{"f"}<LayoutGridAdd size="1.2rem" color="#1e80ff" strokeWidth={2}/>{"f"}</>:
                (d.content?d.content:d.name)}</div>
            })}
        </div>
    </div>
}

export default Table;
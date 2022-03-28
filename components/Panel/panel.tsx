import classNames from "classnames";
import { ReactNode } from "react";
import style from "./style.module.scss"

export interface Props {
    children ?: ReactNode,
    padding ?: string | number,
    overflow ?: string,
    style ?: any,
    className ?: string,
    onClick ?: any,
}

const Panel = (props: Props) => {
    return <div onClick={props.onClick} className={classNames(style.panel, props.className)} style={{...props.style,
        padding: props.padding,
        overflow: props.overflow
    }}>{props.children}</div>
}

export default Panel;
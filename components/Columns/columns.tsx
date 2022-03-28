import { FunctionComponent } from "react";
import style from "./style.module.scss"

type Props = {
    content ?: any[],
    cols : string | number,
    gap ?: string | number
}

const Columns : FunctionComponent<Props> = (props : Props) => {
    return <div className={style.wrapper}>
        <div className={style.cols}>
            {props.content?.map((c)=>{
                return <div key={c.key} className={style.entry} style={{minWidth: props.cols}}>
                    {c}
                </div>
            })}
        </div>
    </div>
}

export default Columns;
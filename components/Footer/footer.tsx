import { FunctionComponent } from "react";
import style from "./style.module.scss"


type Props={

}

const Footer : FunctionComponent<Props> = (props : Props)=>{
    return <>
    <br />
    <div className={style.wrapper}>
        <span style={{color: "#0008", fontWeight: 500}}>© НИУ ВШЭ 1993–2022</span>
    </div>
    </>
}

export default Footer;
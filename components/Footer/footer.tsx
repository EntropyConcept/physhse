import { FunctionComponent } from "react";
import style from "./style.module.scss"


type Props={

}

const Footer : FunctionComponent<Props> = (props : Props)=>{
    return <>
    <br />
    <div className={style.wrapper}>
        <span style={{color: "#0008", fontWeight: 500, margin: "0 .5rem"}}>© НИУ ВШЭ 1993–2022</span> <a href="https://github.com/EntropyConcept">GitHub Команды</a> <a href="https://github.com/EntropyConcept/physhse">Данный проект</a>
    </div>
    </>
}

export default Footer;
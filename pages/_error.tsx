import {NextPage} from "next";
import style from "../styles/error.module.scss";

const _error : NextPage = ()=>{

    return <div className={style.error}>
        <div className={style.main}>
            <div className={style.number}>404</div> 
            Error
        </div>
        <div className={style.message}>
            Страница, которую вы пытаетесь найти по данному адресу недоступна или не существует.
        </div>
    </div>
}

export default _error;
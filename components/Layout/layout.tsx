import React, {FunctionComponent} from 'react'
import Header from "../Header/header"
import style from "./style.module.scss"

type Props = {
    children?:any
}

const Layout : FunctionComponent<Props> = (props:Props) => {
  return (
    <>
        <Header></Header>
        <div className={style.wrapper}>
            <main className={style.main}>
                {props.children}
            </main>
        </div>
    </>
  )
}

export default Layout;
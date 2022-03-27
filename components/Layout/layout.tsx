import React, {FunctionComponent} from 'react'
import Header from "../Header/header"
import style from "./style.module.scss"
import Footer from "../Footer/footer"

type Props = {
    children?:any
}

const Layout : FunctionComponent<Props> = (props:Props) => {
  return (
    <div className={style.control}>
        <Header></Header>
        <div className={style.wrapper}>
            <main className={style.main}>
                {props.children}
            </main>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout;
import style from "./style.module.scss";
import classNames from 'classnames';
import {FunctionComponent} from "react"
import {useRouter} from "next/router"
import Link from "next/link"
import {ChevronsLeft} from "tabler-icons-react"


type Props = {
    tab?: number | undefined | boolean,
}

const main = [
  "main", "c1", "c2", "c3", "c4", 'other'
]

const Proxy = (a:string) => {
  switch (a){
    case "other": return "Другое";
    case "c1": return "Курс 1";
    case "c2": return "Курс 2";
    case "c3": return "Курс 3";
    case "c4": return "Курс 4";
    case "main": return "Главная";
    case "dev": return "Разработка";
    case "matan": return "Математический анализ";
    case "": return "";
    default: return a;
  }
}

const Header : FunctionComponent<Props> = (props:Props) => {
    const router = useRouter();
    let dir = router.pathname.split("/");


    return (
      <div className={style.main}>
          <div className={style.container}>
              <div className={style.left}>
                  <div className={style.label}>
                      <Link passHref href="/main"><img src="/hse3.svg" alt="hse-logo" className={style.logo}/></Link>
                  </div>
                  {dir.length < 3 && 
                    <div className={style.buttons}>
                      <Link passHref href="/main"><button className={classNames({[style.selected]:props.tab == 0 || dir[1] == "main" || dir[1] == ""})}>Главная</button></Link>
                      <Link passHref href="/c1"><button className={classNames({[style.selected]:props.tab == 1 || dir[1] == "c1"})}>Курс 1</button></Link>
                      <Link passHref href="/c2"><button className={classNames({[style.selected]:props.tab == 2 || dir[1] == "c2"})}>Курс 2</button></Link>
                      <Link passHref href="/c3"><button className={classNames({[style.selected]:props.tab == 3 || dir[1] == "c3"})}>Курс 3</button></Link>
                      <Link passHref href="/c4"><button className={classNames({[style.selected]:props.tab == 4 || dir[1] == "c4"})}>Курс 4</button></Link>
                      <Link passHref href="/other"><button className={classNames({[style.selected]:props.tab == 5 || dir[1] == "other"})}>Другое</button></Link>
                    </div>
                  }
                  {dir.length > 2 && <div className={style.buttons}>
                      <Link href={dir.slice(0, 2).join("/")}><button title="f">
                        <ChevronsLeft size="1.1rem"></ChevronsLeft>
                      </button></Link>
                      {dir.slice(2).map((a, index)=> {
                      return <Link key={index} href={dir.slice(0, index - 1).join("/")} passHref><button className={classNames({[style.selected]: index == dir.length-3})}>{Proxy(a)}</button></Link>
                    })}</div>
                  }
              </div>
              <div className={style.right}>
              </div>
          </div>
      </div>
    )
  }

export default Header;

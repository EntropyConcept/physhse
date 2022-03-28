import style from "./style.module.scss";
import classNames from 'classnames';
import {FunctionComponent} from "react"
import {useRouter} from "next/router"
import Link from "next/link"
import {SegmentedControl} from "@mantine/core"
import {useState} from "react"

type Props = {
    tab?: number | undefined | boolean,
}

// const segStyle = {
//   padding: 0,
//   gap: 0, 
//   borderRadius: 0,
//   flexFlow: "row nowrap",
//   overflow: "none",
//   "	.mantine-SegmentedControl-control":{
//     margin: 0,
//     border: "none"
//   },
//   "	.mantine-SegmentedControl-label":{
//     transition: "0.3s",
//     margin: 0,
//     borderRadius: 0,
//     borderBottom: "2px solid #eee"
//   },
//   "	.mantine-SegmentedControl-labelActive":{
//     borderColor: "#eee"
//   },
//   "	.mantine-SegmentedControl-active":{
//     margin: 4,
//     boxShadow: "none",
//     // background: "#ddd"
//   },
// }

const Header : FunctionComponent<Props> = (props:Props) => {
    const router = useRouter();
    let dir = router.pathname.split("/");
    // let tab = 0;
    // if (dir[1] == "main" || dir[1] == "") tab = 0;
    // else if (dir[1] == "c1") tab = 1;
    // else if (dir[1] == "c2") tab = 2;
    // else if (dir[1] == "c3") tab = 3;
    // else if (dir[1] == "c4") tab = 4;
    // else tab = 5;

    // const [page, setPage] = useState(tab);
    // const setTab = (n) => {
    //     setPage(n);
    //     switch (n){
    //       case 0: router.push("/main"); break;
    //       case 1: router.push("/c1"); break;
    //       case 2: router.push("/c2"); break;
    //       case 3: router.push("/c3"); break;
    //       case 4: router.push("/c4"); break;
    //       case 5: router.push("/other"); break;
    //     }
    // }

    return (
      <div className={style.main}>
          <div className={style.container}>
              <div className={style.left}>
                  <div className={style.label}>
                      <Link passHref href="/main"><img src="/hse3.svg" alt="hse-logo" className={style.logo}/></Link>
                  </div>
                  <div className={style.buttons}>
                    {/* <SegmentedControl sx={(theme) => (segStyle)} value={`tab${page.toString()}`} onChange={(e)=>{setTab(parseInt(e.charAt(3)))}} data={[
                      {label: "Главная", value: "tab0"},
                      {label: "Курс 1", value: "tab1"},
                      {label: "Курс 2", value: "tab2"},
                      {label: "Курс 3", value: "tab3"},
                      {label: "Курс 4", value: "tab4"},
                      {label: "Другое", value: "tab5"},
                    ]}/> */}
                    <Link passHref href="/main"><button className={classNames({[style.selected]:props.tab == 0 || dir[1] == "main" || dir[1] == ""})}>Главная</button></Link>
                    <Link passHref href="/c1"><button className={classNames({[style.selected]:props.tab == 1 || dir[1] == "c1"})}>Курс 1</button></Link>
                    <Link passHref href="/c2"><button className={classNames({[style.selected]:props.tab == 2 || dir[1] == "c2"})}>Курс 2</button></Link>
                    <Link passHref href="/c3"><button className={classNames({[style.selected]:props.tab == 3 || dir[1] == "c3"})}>Курс 3</button></Link>
                    <Link passHref href="/c4"><button className={classNames({[style.selected]:props.tab == 4 || dir[1] == "c4"})}>Курс 4</button></Link>
                    <Link passHref href="/other"><button className={classNames({[style.selected]:props.tab == 5 || dir[1] == "other"})}>Другое</button></Link>
                    <Link passHref href="/dev"><button className={classNames({[style.selected]:props.tab == 6 || dir[1] == "dev"})}>Разработка</button></Link>
                  </div>
              </div>
              <div className={style.right}>
              </div>
          </div>
      </div>
    )
  }

export default Header;

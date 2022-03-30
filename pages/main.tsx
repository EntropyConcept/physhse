import type { NextPage} from 'next'
import Head from 'next/head'
import TimelineCaf from '../components/Timeline/timelineCaf'
import { AspectRatio, Accordion, Divider } from '@mantine/core'
import style from "../styles/main.module.scss"
import depart from "../public/departments.json"
import Panel from '../components/Panel/panel'

const accStyle = {
  margin: "-1rem", 
  borderRadius: ".5rem", 
  overflow: "hidden", 
  fontSize: "1rem"
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Главная</title>
      </Head>
      <div className={style.main}>
        <TimelineCaf></TimelineCaf>
        <Divider my="sm" className={style.divider}></Divider>
        {/* <hr style={{borderColor: "#d8d8d8", margin: "1rem 0 "}}/> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d577.5546251695266!2d37.66375991035971!3d55.768036387392186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb0c881691c1eb61!2z0KTQsNC60YPQu9GM0YLQtdGCINGE0LjQt9C40LrQuCDQndCY0KMg0JLQqNCt!5e0!3m2!1sru!2sru!4v1648384661716!5m2!1sru!2sru" loading="lazy" style={{borderRadius: ".5rem", border: "1px solid #bbb", width: "100%", height: "45vh", maxHeight: "50vw"}}></iframe> */}
      </div>
      <div className={style.side}>
        <Panel style={{width: "100%"}}>
          <Accordion style={accStyle} iconPosition="right">
            <Accordion.Item label="Платформа">
              Данная платформа была создана для поддержки обучения факультета физики НИУ ВШЭ. 
              <br/>
              Здесь находится актуальная информация о факультете, расписании, заданиях и материалах для изучения. 
            </Accordion.Item>
            <Accordion.Item label="Факультет физики">
              Факультет физики был создан в октябре 2016 г. с целью подготовки специалистов-исследователей по естественно-научному направлению НИУ ВШЭ. Первый набор в бакалавриат и магистратуру факультета состоялся в августе 2017 г.
            </Accordion.Item>
            <Accordion.Item label="Кафедры">
              <ul>
                {depart.map((d)=>{if (d.link) return <li key={d.name}><a href={d.link}>{d.subject}</a></li>})}
              </ul>
            </Accordion.Item>
          </Accordion>
        </Panel>
        <Divider my="sm"></Divider>
        <Panel style={{width: "100%"}}>
          <Accordion style={accStyle} iconPosition='right'>
            <Accordion.Item label="Образование">
              Образовательная миссия факультета физики состоит в подготовке физиков-исследователей высшей квалификации в области как фундаментальной, так и прикладной физики, которые смогут в дальнейшем строить академическую карьеру или работать в прикладных научно-исследовательских лабораториях, а также в наукоёмком бизнесе. Подготовка студентов базируется на их вовлечении в реальные научные исследования.
            </Accordion.Item>
            <Accordion.Item label="Академические возможности">
              <a href="#">Данных временно нет</a>
            </Accordion.Item>
          </Accordion>
        </Panel>
        <Divider my="sm" label='Кафедры' labelPosition='center'></Divider>
        <Panel style={{width: "100%"}}>
          <Accordion style={accStyle} iconPosition='right'>
            {depart.map((d) => {
              return <Accordion.Item label={d.name} key={d.name}>
                <b>{d.fullName}</b><br/>Направления подготовки:
                <ul>{d.fields.map((f) => {
                    return <li key={d.fields.indexOf(f)}>{f}</li>
                  })}</ul>
              </Accordion.Item>
            })}
          </Accordion>
        </Panel>
      </div>
    </div>
  )
}

export default Home

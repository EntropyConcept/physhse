import type { NextPage } from 'next'
import TimelineCaf from '../components/Timeline/timelineCaf'
import { AspectRatio, Accordion } from '@mantine/core'
import style from "../styles/main.module.scss"

const accStyle = {
  margin: "-1rem", 
  borderRadius: ".5rem", 
  overflow: "hidden", 
  fontSize: "1rem"
}

const Home: NextPage = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.side}>
        <div className={style.panel}>
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
                <li><a href="https://physics.hse.ru/issp/">Физика конденсированных сред</a></li>
                <li><a href="https://physics.hse.ru/kapitza/">Физика низких температур</a></li>
                <li><a href="https://physics.hse.ru/itp/">Теоретическая физика</a></li>
                <li><a href="https://physics.hse.ru/iki/">Физика космоса</a></li>
                <li><a href="https://physics.hse.ru/isan">Квантовая оптика и нанофотоника</a></li>
                <li><a href="https://physics.hse.ru/gpi/">Квантовые технологии</a></li>
              </ul>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={style.hr}></div>
        <div className={style.panel}>
          <Accordion style={accStyle} iconPosition='right'>
            <Accordion.Item label="Образование">
              Образовательная миссия факультета физики состоит в подготовке физиков-исследователей высшей квалификации в области как фундаментальной, так и прикладной физики, которые смогут в дальнейшем строить академическую карьеру или работать в прикладных научно-исследовательских лабораториях, а также в наукоёмком бизнесе. Подготовка студентов базируется на их вовлечении в реальные научные исследования.
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={style.hr}></div>
        <div className={style.panel}>
          <Accordion style={accStyle} iconPosition='right'>
            <Accordion.Item label="ИФТТ">
              <b>Институт физики твердого тела РАН</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Физика и технология полупроводниковыхи гибридных нано- и гетероструктур</li>
                <li>Физика когерентных электронных систем</li>
                <li>Физика нелинейных явлений в конденсированных средах</li>
                <li>Физическое материаловедение</li>
              </ul>
            </Accordion.Item>
            <Accordion.Item label="ИФП">
              <b>Институт физических проблем им. П.Л. Капицы РАН</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Квантовые жидкости и кристаллы</li>
                <li>Сверхпроводимость</li>
                <li>Физика поверхности</li>
                <li>Низкотемпературный магнетизм</li>
              </ul>
            </Accordion.Item>
            <Accordion.Item label="ИТФ">
              <b>Институт теоретической физики им. Л.Д. Ландау РАН</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Физика конденсированного состояния</li>
                <li>Сверхпроводимость и сверхтекучесть</li>
                <li>Физические явления в низкоразмерныхи мезоскопических системах</li>
                <li>Нелинейная динамика и турбулентность</li>
                <li>Астрофизика и космология</li>
                <li>Физика квантовых вычислений</li>
                <li>Вычислительная физика</li>
              </ul>
            </Accordion.Item>
            <Accordion.Item label="ИКИ">
              <b>Институт космических исследований РАН</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Астрофизика высоких энергий</li>
                <li>Физика космической плазмы</li>
                <li>Физика Солнца</li>
              </ul>
            </Accordion.Item>
            <Accordion.Item label="ИСАН">
              <b>Институт спектроскопии РАН</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Спектроскопия атомов, молекул и конденсированных сред</li>
                <li>Квантовая оптика, оптика наноструктур, плазмоника, оптика ближнего поля</li>
                <li>Лазерная спектроскопия в физике, фотохимии, аналитической химии</li>
                <li>Аналитическая спектроскопия и разработка приборов для исследований</li>
              </ul>
            </Accordion.Item>
            <Accordion.Item label="ИОФ">
              <b>Институт общей физики</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Создание и управление элементами квантовых компьютеров</li>
                <li>Создание и управление сетями квантовых коммуникаций</li>
                <li>Квантовые вычисления</li>
                <li>Сверхкороткие лазерные импульсы и сверхмощные электромагнитные поля</li>
                <li>Наномагнетизм и спинтроника</li>
              </ul>
            </Accordion.Item>
            <Accordion.Item label="ИРЭ">
              <b>Институт радиофизики</b>
              <br />
              Направления подготовки:
              <ul>
                <li>Изучение магнетизма</li>
                <li>Наномагнетизм, спинтроника и спин-фотоника</li>
                <li>Магнитооптика и оптомагнетизм</li>
              </ul>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className={style.main}>
        <TimelineCaf></TimelineCaf>
        <hr style={{borderColor: "#d8d8d8", margin: "1rem 0 "}}/>
        <AspectRatio ratio={1080 / 720} mx="auto" sx={{maxWidth: "1000px"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d577.5546251695266!2d37.66375991035971!3d55.768036387392186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb0c881691c1eb61!2z0KTQsNC60YPQu9GM0YLQtdGCINGE0LjQt9C40LrQuCDQndCY0KMg0JLQqNCt!5e0!3m2!1sru!2sru!4v1648384661716!5m2!1sru!2sru" loading="lazy" style={{borderRadius: ".5rem", border: "1px solid #bbb"}}></iframe>
        </AspectRatio>
      </div>
    </div>
  )
}

export default Home

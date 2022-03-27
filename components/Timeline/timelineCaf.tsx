import { useState, FunctionComponent } from "react"
import { Stepper, StepperProps, createStyles, useMantineTheme, Timeline, SegmentedControl, Text } from '@mantine/core';
import { CalendarEvent, Math, ArrowForward, Atom2, GitFork, GitCommit, BorderRadius } from 'tabler-icons-react';

const useStyles = createStyles((theme, params, getRef) => ({
  root: {
    padding: 0,
    width: '100%',
    maxWidth: 1000
  },
  separator: {
    borderColor: `${theme.colors.gray[5]}`,
    backgroundColor: `${theme.colors.gray[5]}`,
  },
  separatorActive: {
    borderColor: theme.colors.blue[5]
  },
  step: {
    transition: 'transform 150ms ease',
    transformOrigin: "22px 22px",
  },
  stepProgress: {
    transform: 'scale(1.05)',
    borderColor: theme.colors.blue[9],
    [`& .${getRef('stepIcon')}`]: {},
  },
  stepIcon:{
    border: `2px solid ${theme.colors.dark[0]}`,
  },
  stepCompleted: {
    [`& .${getRef('stepIcon')}`]: {
      // borderWidth: 0,
      borderColor: theme.colors.blue[7],
      backgroundColor: theme.colors.blue[6],
    },
  },
  steps: {
    padding: "1rem",
    border: "1px solid #0002",
    borderRadius: ".5rem",
    background: "#f4f4f5"
  },
}));


const segStyle = {
  display: "flex",
  fontSize: "1rem",
  flexFlow: "row wrap",
  marginBottom: "-2rem",
  marginTop: "1rem",
  maxWidth: "36rem",
}

function StyledStepper(props: StepperProps) {
  const { classes } = useStyles();
  return <Stepper classNames={classes} {...props} />;
}

type Props = {

}

const TimelineCaf : FunctionComponent<Props> = (props : Props) => {
  const theme = useMantineTheme();
  const [active, setActive] = useState(0);
  const [caf, setCaf] = useState('caf1');

  return (
    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <StyledStepper active={active} onStepClick={setActive} breakpoint="sm" >
        <Stepper.Step label="Первый курс">
          <Timeline active={4} bulletSize={24} lineWidth={2} style={{ marginLeft: 6 }}>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Первый семестр">
              Математический анализ<br />
              Математический аппарат<br />
              Линейная алгебра<br />
              Механика<br />
              История
            </Timeline.Item>
            <Timeline.Item bullet={<Math size={16} />} title="Промежуточная сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>19.12</Text> Механика
              <br /><Text variant="link" component="span" inherit>22.12</Text> История
              <br /><Text variant="link" component="span" inherit>24.12</Text> Линейная алгебра
              <br /><Text variant="link" component="span" inherit>26.12</Text> Математический анализ
              <br /><Text variant="link" component="span" inherit>27.12</Text> Математический аппарат
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Второй семестр">
              Аналитические приближенные методы<br />
              Математический анализ<br />
              Электромагнетизм<br />
              Аналитическая механика<br />
              Питон<br />
              Дифференциальные уравнения
            </Timeline.Item>
            <Timeline.Item bullet={<Math size={16} />} title="Итоговая сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<ArrowForward size={16} />} title="Второй курс">
            </Timeline.Item>
          </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Второй курс">
          <Timeline active={4} bulletSize={24} lineWidth={2} style={{ marginLeft: 6 }}>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Третий семестр">
              Вычислительная физика<br />
              Математический анализ<br />
              Теория вероятностей<br />
              Теория поля<br />
              ТФКП<br />
              Термодинамика<br />
              Тензоры
            </Timeline.Item>
            <Timeline.Item bullet={<Math size={16} />} title="Промежуточная сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Четвертый семестр">
              Химия для физиков<br />
              Квантовая физика<br />
              Математическая физика<br />
              Оптика<br />
              Обработка данных эксперимента<br />
              Право
            </Timeline.Item>
            <Timeline.Item bullet={<Math size={16} />} title="Итоговая сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<ArrowForward size={16} />} title="Третий курс">
            </Timeline.Item>
          </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Третий курс">
          <Timeline active={24} bulletSize={24} lineWidth={2} style={{ marginLeft: 6 }}>
            <Timeline.Item bullet={<GitFork size={16} />} title="Кафедра">
              <SegmentedControl sx={(theme) => (segStyle)} color="blue" onChange={setCaf} value={caf} data={[
                { label: "ИСАН", value: "caf1" },
                { label: "ИФП", value: "caf2" },
                { label: "ИФТТ", value: "caf3" },
                { label: "ИКИ", value: "caf4" },
                { label: "ИТФ", value: "caf5" },
                { label: "ИОФ", value: "caf6" },
                { label: "ИРЭ", value: "caf7" },
                { label: "ПСФ", value: "caf8" },
                { label: "Все", value: "caf9" }
              ]} /><br /><br />
              {caf == "caf1" && <a href="#" style={{color: "#1c7ed6"}}>Институт спектроскопии</a>}
              {caf == "caf2" && <a href="#" style={{color: "#1c7ed6"}}>Институт физических проблем им. П.Л. Капицы</a>}
              {caf == "caf3" && <a href="#" style={{color: "#1c7ed6"}}>Институт физики твердого тела</a>}
              {caf == "caf4" && <a href="#" style={{color: "#1c7ed6"}}>Институт космических исследований</a>}
              {caf == "caf5" && <a href="#" style={{color: "#1c7ed6"}}>Институт теоретической физики им. Л.Д. Ландау</a>}
              {caf == "caf6" && <a href="#" style={{color: "#1c7ed6"}}>Институт общей физики</a>}
              {caf == "caf7" && <a href="#" style={{color: "#1c7ed6"}}>Институт радиофизики</a>}
              {caf == "caf8" && <a href="#" style={{color: "#1c7ed6"}}>Институт педагогического мастерства</a>}
              {caf == "caf9" && <a href="#" style={{color: "#1c7ed6"}}>Все институты</a>}
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Пятый семестр">
              Математическая физика
              <br /> Квантовая физика
              <br /> Атомная и ядерная физика
              <br /> Введение в астрофизику
              <br /> Квантовая механика
            </Timeline.Item>
            {(caf == "caf1" || caf == "caf9") /* ИСАН */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИСАН" lineVariant='dotted'>
              Методы экспериментальной оптики
              <br /> Квантовая оптика и фотоника
            </Timeline.Item>
            }
            {(caf == "caf2" || caf == "caf9") /* ИФП */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИФП" lineVariant='dotted'>
              Термодинамика и статическая физика
              <br /> Физика низких температур
              <br /> Методы измерений
            </Timeline.Item>}
            {(caf == "caf3" || caf == "caf9") /* ИФТТ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИФТТ" lineVariant='dotted'>
              Дифракционные методы
              <br /> Введение в физику поверхности
              <br /> Высоковакуумная техника
              <br /> Рентген и электромагнетизм
            </Timeline.Item>}
            {(caf == "caf4" || caf == "caf9") /* ИКИ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИКИ" lineVariant='dotted'>
              Космическая и газовая динамика
              <br /> Солнечная система
              <br /> Научная литература
            </Timeline.Item>}
            {(caf == "caf5" || caf == "caf9") /* ИТФ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИТФ" lineVariant='dotted'>
              Дополнительная математическая физика
              <br /> Стохастические процессы
              <br /> Нелинейные процессы
            </Timeline.Item>}
            {(caf == "caf6" || caf == "caf9") /* ИОФ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИОФ" lineVariant='dotted'>
              Физика твердого тела
              <br /> Лазерная спектроскопия
            </Timeline.Item>}
            {(caf == "caf7" || caf == "caf9") /* ИРЭ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИРЭ" lineVariant='dotted'>
              Симметрии в теории групп
              <br /> Основы магнетизма
              <br /> Микро- и наноразмерные устройства
              <br /> Методы электрофизических измерений
            </Timeline.Item>}
            {(caf == "caf8" || caf == "caf9") /* ПСФ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ПСФ" lineVariant='dotted'>
              Психология обучения
              <br /> Методы преподавания физики
            </Timeline.Item>}
            <Timeline.Item bullet={<Math size={16} />} title="Промежуточная сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Шестой семестр">
              Введение в физику твердого тела
              <br /> Физика мягкой материи
              <br /> Основы современной физики
              <br /> Статистическая физика
            </Timeline.Item>
            {(caf == "caf1" || caf == "caf9") /* ИСАН */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИСАН" lineVariant='dotted'>
              Методы экспериментальной оптики
              <br /> Квантовая оптика и фотоника
            </Timeline.Item>}
            {(caf == "caf2" || caf == "caf9") /* ИФП */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИФП" lineVariant='dotted'>
              Термодинамика и статическая физика
              <br /> Физика низких температур
            </Timeline.Item>}
            {(caf == "caf3" || caf == "caf9") /* ИФТТ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИФТТ" lineVariant='dotted'>
              Дифракционные методы
              <br /> Энергетические спектры
              <br /> Техника физического эксперимента
            </Timeline.Item>}
            {(caf == "caf4" || caf == "caf9") /* ИКИ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИКИ" lineVariant='dotted'>
              Основы кинетической теории газов
              <br /> Основы физики плазмы
            </Timeline.Item>}
            {(caf == "caf5" || caf == "caf9") /* ИТФ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИТФ" lineVariant='dotted'>
              Теория хаотических систем
              <br /> Ланжевеновская динамика и кинетика
            </Timeline.Item>}
            {(caf == "caf6" || caf == "caf9") /* ИОФ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИОФ" lineVariant='dotted'>
              Квантовая теория информации
              <br /> Зондовая микроскопия
              <br /> Электронная спектроскопия
            </Timeline.Item>}
            {(caf == "caf7" || caf == "caf9") /* ИРЭ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ИРЭ" lineVariant='dotted'>
              Наномагнетизм и спинтроника
              <br /> Кинетика электронов в твердых телах
            </Timeline.Item>}
            {(caf == "caf8" || caf == "caf9") /* ПСФ */ && <Timeline.Item bullet={<GitCommit size={16} />} title="ПСФ" lineVariant='dotted'>
              Основы проектирования
              <br /> Методы преподавания физики
              <br /> Педагогическая мастерская
            </Timeline.Item>}
            <Timeline.Item bullet={<Math size={16} />} title="Итоговая сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<ArrowForward size={16} />} title="Четвертый курс">

            </Timeline.Item>
          </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Четвертый курс">
          <Timeline active={24} bulletSize={24} lineWidth={2} style={{ marginLeft: 6 }}>
            <Timeline.Item bullet={<GitFork size={16} />} title="Кафедра">
              <SegmentedControl sx={(theme) => (segStyle)} color="blue" onChange={setCaf} value={caf} data={[
                { label: "ИСАН", value: "caf1" },
                { label: "ИФП", value: "caf2" },
                { label: "ИФТТ", value: "caf3" },
                { label: "ИКИ", value: "caf4" },
                { label: "ИТФ", value: "caf5" },
                { label: "ИОФ", value: "caf6" },
                { label: "ИРЭ", value: "caf7" },
                { label: "ПСФ", value: "caf8" },
                { label: "Все", value: "caf9" }
              ]} /><br /><br/>
              {caf == "caf1" && <a href="#" style={{color: "#1c7ed6"}}>Институт спектроскопии</a>}
              {caf == "caf2" && <a href="#" style={{color: "#1c7ed6"}}>Институт физических проблем им. П.Л. Капицы</a>}
              {caf == "caf3" && <a href="#" style={{color: "#1c7ed6"}}>Институт физики твердого тела</a>}
              {caf == "caf4" && <a href="#" style={{color: "#1c7ed6"}}>Институт космических исследований</a>}
              {caf == "caf5" && <a href="#" style={{color: "#1c7ed6"}}>Институт теоретической физики им. Л.Д. Ландау</a>}
              {caf == "caf6" && <a href="#" style={{color: "#1c7ed6"}}>Институт общей физики</a>}
              {caf == "caf7" && <a href="#" style={{color: "#1c7ed6"}}>Институт радиофизики</a>}
              {caf == "caf8" && <a href="#" style={{color: "#1c7ed6"}}>Институт педагогического мастерства</a>}
              {caf == "caf9" && <a href="#" style={{color: "#1c7ed6"}}>Все институты</a>}
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Седьмой семестр">
              Физика сплошных сред
              <br/> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<Math size={16} />} title="Промежуточная сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Восьмой семестр">
              Электродинамика конденсированных сред
              <br/> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<Math size={16} />} title="Итоговая сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<Atom2 size={16} />} title="Выпуск">
            </Timeline.Item>
          </Timeline>
        </Stepper.Step>
        <Stepper.Completed>
          <div><b>Степень бакалавра в физике</b></div>
        </Stepper.Completed>
      </StyledStepper>
    </div>
  )
}

export default TimelineCaf

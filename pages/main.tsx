import type { NextPage } from 'next'
import {useState} from "react"
import Button from '../components/Button/button';
import { Stepper, StepperProps , createStyles, useMantineTheme, Timeline, SegmentedControl, Text } from '@mantine/core';
import { CalendarEvent, Math, ArrowForward, Atom2, GitFork, GitCommit} from 'tabler-icons-react';

const useStyles = createStyles((theme, params, getRef) => ({
  root: {
    padding: theme.spacing.md,
    width: '100%',
    maxWidth: 1000
  },

  separator: {
    height: 2,
    borderTop: `2px solid ${theme.colors.gray[5]}`,
    borderRadius: theme.radius.xl,
    backgroundColor: 'transparent',
  },

  separatorActive: {
    borderColor: theme.colors.blue[5]
  },

  stepIcon: {
    // borderColor: theme.colors.blue[6],
  },

  step: {
    transition: 'transform 150ms ease',
  },

  stepProgress: {
    transform: 'scale(1.05)',
    borderColor: theme.colors.blue[9],
    [`& .${getRef('stepIcon')}`]: {},
  },

  // stepCompleted: {
  //   [`& .${getRef('stepIcon')}`]: {
  //     borderWidth: 0,
  //     backgroundColor: 'transparent',
  //     backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
  //   },
  // },
}));


const segStyle = {
  display: "flex",
  fontSize: "1rem",
  flexWrap: "wrap",
  marginBottom: "-2rem",
  marginTop: "1rem",
  maxWidth: "36rem",
  ".mantine-SegmentedControl-control":{
    // maxWidth: "4rem"
    border: "none"
  },
}

function StyledStepper(props: StepperProps) {
  const { classes } = useStyles();
  return <Stepper classNames={classes} {...props} />;
}

const Home : NextPage = () => {
  const theme = useMantineTheme();
  const indent = {
    borderLeft: `2px solid ${theme.colors.dark[0]}`,
    paddingLeft: "1.5rem"
  }
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const [caf, setCaf] = useState('1');

  return (
    <div style={{display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <StyledStepper active={active} onStepClick={setActive} breakpoint="sm" >
        <Stepper.Step label="Первый курс">
            <Timeline active={4} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Первый модуль">
                Математический анализ<br/>
                Математический аппарат<br/>
                Линейная алгебра<br/>
                Механика<br/>
                История
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dotted' color="dark">
                <Text variant="link" component="span" inherit>19.12</Text> Механика
                <br/><Text variant="link" component="span" inherit>22.12</Text> История
                <br/><Text variant="link" component="span" inherit>24.12</Text> Линейная алгебра
                <br/><Text variant="link" component="span" inherit>26.12</Text> Математический анализ
                <br/><Text variant="link" component="span" inherit>27.12</Text> Математический аппарат
              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Второй модуль">
                Аналитические приближенные методы<br/>
                Математический анализ<br/>
                Электромагнетизм<br/>
                Аналитическая механика<br/>
                Питон<br/>
                Дифференциальные уравнения
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Итоговая сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<ArrowForward size={16}/>} title="Второй курс">
              </Timeline.Item>
            </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Второй курс">
            <Timeline active={4} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Третий модуль">
                Вычислительная физика<br/>
                Математический анализ<br/>
                Теория вероятностей<br/>
                Теория поля<br/>
                ТФКП<br/>
                Термодинамика<br/>
                Тензоры
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Четвертый модуль">
                Химия для физиков<br/>
                Квантовая физика<br/>
                Математическая физика<br/>
                Оптика<br/>
                Обработка данных эксперимента<br/>
                Право
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Итоговая сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<ArrowForward size={16}/>} title="Третий курс">
              </Timeline.Item>
            </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Третий курс">
          <Timeline active={24} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<GitFork size={16}/>} title="Кафедра">
                <SegmentedControl sx={(theme)=>(segStyle)} color="blue" onChange={setCaf} value={caf} data={[
                    {label: "ИСАН", value: "1"},
                    {label: "ИФП", value: "2"},
                    {label: "ИФТТ", value: "3"},
                    {label: "ИКИ", value: "4"},
                    {label: "ИТФ", value: "5"},
                    {label: "ИОФ", value: "6"},
                    {label: "ИРЭ", value: "7"},
                    {label: "ПСФ", value: "8"},
                    {label: "Все", value: "9"}
                  ]}/><br/>
              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Пятый модуль">
                      Математическая физика
                <br/> Квантовая физика
                <br/> Атомная и ядерная физика
                <br/> Введение в астрофизику
                <br/> Квантовая механика
              </Timeline.Item>
                {(caf=="1" || caf=="9") /* ИСАН */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИСАН" lineVariant='dotted'>
                      Методы экспериментальной оптики
                <br/> Квантовая оптика и фотоника
                </Timeline.Item>
                }
                {(caf=="2" || caf=="9") /* ИФП */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИФП" lineVariant='dotted'>
                      Термодинамика и статическая физика
                <br/> Физика низких температур
                <br/> Методы измерений
                </Timeline.Item>}
                {(caf=="3" || caf=="9") /* ИФТТ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИФТТ" lineVariant='dotted'>
                      Дифракционные методы
                <br/> Введение в физику поверхности
                <br/> Высоковакуумная техника
                <br/> Рентген и электромагнетизм
                </Timeline.Item>}
                {(caf=="4" || caf=="9") /* ИКИ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИКИ" lineVariant='dotted'>
                      Космическая и газовая динамика
                <br/> Солнечная система
                <br/> Научная литература
                </Timeline.Item>}
                {(caf=="5" || caf=="9") /* ИТФ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИТФ" lineVariant='dotted'>
                      Дополнительная математическая физика
                <br/> Стохастические процессы
                <br/> Нелинейные процессы
                </Timeline.Item>}
                {(caf=="6" || caf=="9") /* ИОФ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИОФ" lineVariant='dotted'>
                      Физика твердого тела
                <br/> Лазерная спектроскопия
                </Timeline.Item>}
                {(caf=="7" || caf=="9") /* ИРЭ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИРЭ" lineVariant='dotted'>
                      Симметрии в теории групп
                <br/> Основы магнетизма
                <br/> Микро- и наноразмерные устройства
                <br/> Методы электрофизических измерений
                </Timeline.Item>}
                {(caf=="8" || caf=="9") /* ПСФ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ПСФ" lineVariant='dotted'>
                      Психология обучения 
                <br/> Методы преподавания физики
                </Timeline.Item>}
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Шестой модуль">
                Введение в физику твердого тела
                <br/> Физика мягкой материи
                <br/> Основы современной физики
                <br/> Статистическая физика
              </Timeline.Item>
              {(caf=="1" || caf=="9") /* ИСАН */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИСАН" lineVariant='dotted'>
                      Методы экспериментальной оптики
                <br/> Квантовая оптика и фотоника
                </Timeline.Item>}
                {(caf=="2" || caf=="9") /* ИФП */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИФП" lineVariant='dotted'>
                      Термодинамика и статическая физика
                <br/> Физика низких температур
                </Timeline.Item>}
                {(caf=="3" || caf=="9") /* ИФТТ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИФТТ" lineVariant='dotted'>
                      Дифракционные методы
                <br/> Энергетические спектры
                <br/> Техника физического эксперимента
                </Timeline.Item>}
                {(caf=="4" || caf=="9") /* ИКИ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИКИ" lineVariant='dotted'>
                      Основы кинетической теории газов
                <br/> Основы физики плазмы
                </Timeline.Item>}
                {(caf=="5" || caf=="9") /* ИТФ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИТФ" lineVariant='dotted'>
                      Теория хаотических систем
                <br/> Ланжевеновская динамика и кинетика
                </Timeline.Item>}
                {(caf=="6" || caf=="9") /* ИОФ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИОФ" lineVariant='dotted'>
                      Квантовая теория информации
                <br/> Зондовая микроскопия
                <br/> Электронная спектроскопия
                </Timeline.Item>}
                {(caf=="7" || caf=="9") /* ИРЭ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ИРЭ" lineVariant='dotted'>
                      Наномагнетизм и спинтроника 
                <br/> Кинетика электронов в твердых телах
                </Timeline.Item>}
                {(caf=="8" || caf=="9") /* ПСФ */ && <Timeline.Item bullet={<GitCommit size={16}/>} title="ПСФ" lineVariant='dotted'>
                      Основы проектирования
                <br/> Методы преподавания физики
                <br/> Педагогическая мастерская
                </Timeline.Item>}
              <Timeline.Item bullet={<Math size={16}/>} title="Итоговая сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<ArrowForward size={16}/>} title="Четвертый курс">

              </Timeline.Item>
          </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Четвертый курс">
          <Timeline active={24} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<GitFork size={16}/>} title="Кафедра">
                <SegmentedControl sx={(theme)=>(segStyle)} color="blue" onChange={setCaf} value={caf} data={[
                    {label: "ИСАН", value: "1"},
                    {label: "ИФП", value: "2"},
                    {label: "ИФТТ", value: "3"},
                    {label: "ИКИ", value: "4"},
                    {label: "ИТФ", value: "5"},
                    {label: "ИОФ", value: "6"},
                    {label: "ИРЭ", value: "7"},
                    {label: "ПСФ", value: "8"},
                    {label: "Все", value: "9"}
                  ]}/><br/>
              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Седьмой модуль">
                Физика сплошных сред
                Нет данных
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={16}/>} title="Восьмой модуль">
                Электродинамика конденсированных сред
                Нет данных
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Итоговая сессия" lineVariant='dotted' color="dark">

              </Timeline.Item>
              <Timeline.Item bullet={<Atom2 size={16}/>} title="Выпуск">
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

export default Home

import type { NextPage } from 'next'
import {useState} from "react"
import Button from '../components/Button/button';
import { Stepper, StepperProps , createStyles, useMantineTheme, Timeline, SegmentedControl } from '@mantine/core';
import { CalendarEvent, Math, ArrowForward, Atom2, GitFork} from 'tabler-icons-react';

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
  return (
    <div style={{display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <StyledStepper active={active} onStepClick={setActive} breakpoint="sm" >
        <Stepper.Step label="Первый курс">
            <Timeline active={4} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Первый модуль">
                Математический анализ<br/>
                Математический аппарат<br/>
                Линейная алгебра<br/>
                Механика
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Второй модуль">
                Аналитические приближенные методы<br/>
                Математический анализ<br/>
                Электромагнетизм<br/>
                Аналитическая механика<br/>
                Питон<br/>
                Дифференциальные уравнения
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Итоговая сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<ArrowForward size={16}/>} title="Второй курс">
              </Timeline.Item>
            </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Второй курс">
            <Timeline active={4} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Третий модуль">
                Вычислительная физика<br/>
                Математический анализ<br/>
                Теория вероятностей<br/>
                Теория поля<br/>
                ТФКП<br/>
                Термодинамика<br/>
                Тензоры
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Четвертый модуль">
                Химия для физиков<br/>
                Квантовая физика<br/>
                Математическая физика<br/>
                Оптика<br/>
                Обработка данных эксперимента<br/>
                Право
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Итоговая сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<ArrowForward size={16}/>} title="Третий курс">
              </Timeline.Item>
            </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Третий курс">
          <Timeline active={5} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<GitFork size={16}/>} title="Кафедра">
                <SegmentedControl color="blue" data={[
                    {label: "ИСАН", value: "1"},
                    {label: "ИФП", value: "2"},
                    {label: "ИФТТ", value: "3"},
                    {label: "ИКИ", value: "4"},
                    {label: "ИТФ", value: "5"},
                    {label: "ИОФ", value: "6"},
                    {label: "ИРЭ", value: "7"},
                  ]}/><br/>
              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Пятый модуль">
                ??
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Шестой модуль">
                ??
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>} title="Итоговая сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<ArrowForward size={16}/>} title="Четвертый курс">

              </Timeline.Item>
          </Timeline>
        </Stepper.Step>
        <Stepper.Step label="Четвертый курс">
          <Timeline active={5} bulletSize={24} lineWidth={2} style={{marginLeft: 6}}>
              <Timeline.Item bullet={<GitFork size={16}/>} title="Кафедра">
                <SegmentedControl color="blue" data={[
                    {label: "ИСАН", value: "1"},
                    {label: "ИФП", value: "2"},
                    {label: "ИФТТ", value: "3"},
                    {label: "ИКИ", value: "4"},
                    {label: "ИТФ", value: "5"},
                    {label: "ИОФ", value: "6"},
                    {label: "ИРЭ", value: "7"},
                  ]}/><br/>
              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Седьмой модуль">
                ??
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Промежуточная сессия" lineVariant='dashed'>

              </Timeline.Item>
              <Timeline.Item bullet={<CalendarEvent size={15}/>} title="Восьмой модуль">
                ??
              </Timeline.Item>
              <Timeline.Item bullet={<Math size={16}/>}title="Итоговая сессия" lineVariant='dashed'>

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

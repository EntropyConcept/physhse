import { useState, FunctionComponent } from "react"
import { Stepper, StepperProps, createStyles, useMantineTheme, Timeline, SegmentedControl, Text } from '@mantine/core';
import { CalendarEvent, Math, ArrowForward, Atom2, GitFork, GitCommit, BorderRadius } from 'tabler-icons-react';
import depart from "../../public/departments.json"

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
              {depart.map((d) => {
                if (d.num.toString() === caf.charAt(3)) return <a key={d.num} href={d.link} style={{color: "#1c7ed6"}}>{d.fullName}</a>
              })}
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Пятый семестр">
              Математическая физика
              <br /> Квантовая физика
              <br /> Атомная и ядерная физика
              <br /> Введение в астрофизику
              <br /> Квантовая механика
            </Timeline.Item>
            {depart.map((d) => {
              if (d.num.toString() === caf.charAt(3) || caf === "caf9") return <Timeline.Item key={d.num} bullet={<GitCommit size={16}/>} title={d.name} lineVariant="dotted">
                {d.program["5"].map((p) => {
                  return <div key={p}>{p}</div>
                })}
              </Timeline.Item>
            })}
            <Timeline.Item bullet={<Math size={16} />} title="Промежуточная сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Шестой семестр">
              Введение в физику твердого тела
              <br /> Физика мягкой материи
              <br /> Основы современной физики
              <br /> Статистическая физика
            </Timeline.Item>
            {depart.map((d) => {
              if (d.num.toString() === caf.charAt(3) || caf === "caf9") return <Timeline.Item key={d.num} bullet={<GitCommit size={16}/>} title={d.name} lineVariant="dotted">
                {d.program["6"].map((p) => {
                  return <div key={p}>{p}</div>
                })}
              </Timeline.Item>
            })}
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
              {depart.map((d) => {
                if (d.num.toString() === caf.charAt(3)) return <a key={d.num} href={d.link} style={{color: "#1c7ed6"}}>{d.fullName}</a>
              })}
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Седьмой семестр">
              Физика сплошных сред
            </Timeline.Item>
            {depart.map((d) => {
              if (d.num.toString() === caf.charAt(3) || caf === "caf9") return <Timeline.Item key={d.num} bullet={<GitCommit size={16}/>} title={d.name} lineVariant="dotted">
                {d.program["7"].map((p) => {
                  return <div key={p}>{p}</div>
                })}
              </Timeline.Item>
            })}
            <Timeline.Item bullet={<Math size={16} />} title="Промежуточная сессия" lineVariant='dotted' color="blue">
              <Text variant="link" component="span" inherit>00.00</Text> Нет данных
            </Timeline.Item>
            <Timeline.Item bullet={<CalendarEvent size={16} />} title="Восьмой семестр">
              Электродинамика конденсированных сред
            </Timeline.Item>
            {depart.map((d) => {
              if (d.num.toString() === caf.charAt(3) || caf === "caf9") return <Timeline.Item key={d.num} bullet={<GitCommit size={16}/>} title={d.name} lineVariant="dotted">
                {d.program["8"].map((p) => {
                  return <div key={p}>{p}</div>
                })}
              </Timeline.Item>
            })}
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

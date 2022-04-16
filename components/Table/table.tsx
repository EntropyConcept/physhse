import { FunctionComponent, ReactNode } from "react";
import style from "./style.module.scss"
import Link from "next/link"
import classNames from "classnames"
import { Plus, X } from "tabler-icons-react"
import { UserContext } from '../../lib/context'
import { useContext, useState } from 'react'
import {Modal, Divider, Text, TextInput, Space, Tooltip, NumberInput, Grid, Progress, SegmentedControl} from '@mantine/core'
import { At, Forms, InfoCircle } from 'tabler-icons-react'
import Button from "../Button/button"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

interface entry{
    name : string,
    content ?: ReactNode,
    link ?: string
}

type Props = {
    data : entry[],
    year ?: number, 
    half ?: number,
    top ?: boolean,
    bottom ?: boolean,
    static ?: boolean,
    nolines ?: boolean
}

const Table : FunctionComponent<Props> = (props: Props) => {
    const [data, setData] = useState(props.data);
    const {user, username, role} = useContext(UserContext);
    const [modal, setModal] = useState(false);
    const [progress, setProgress] = useState(0);
    const [name, setName] = useState<string>();
    const [token, setToken] = useState<string>();
    const [year, setYear] = useState(props.year || undefined);
    const [half, setHalf] = useState(props.half || undefined);
    const addNew = () => {
    //    let copy=data.concat(); 
    //    copy.push({name: "Новый раздел"}); 
    //    setData(copy)
        setModal(true);
        setProgress(33);
    }
    const tokenInput = (val) => {
        let s = val.toLowerCase();
        s = s.replace(" ", "")
        setToken(s);
    }
    
    const tip = (text: string) => (
        <Tooltip label={text} position="top" placement="end" width={250} wrapLines>
            <InfoCircle size="1rem" style={{ display: 'block', opacity: 0.5 }}/>
        </Tooltip>
    )

    return <div className={style.wrapper}>
        <div className={classNames(style.table, {[style.top]: props.top, [style.bottom]: props.bottom, [style.static]: props.static, [style.nolines]: props.nolines})}>
            {data.map((d)=>{
                if (d.link){
                    return <Link key={d.name} passHref href={d.link?d.link:"#"}>
                        <div className={classNames(style.entry, style.link)}>
                            {d.content?d.content:d.name}
                        </div>
                    </Link>
                }
                return <div key={d.name} className={classNames(style.entry, {[style.add]: d.name=="<add>"})}>{(d.content?d.content:d.name)}</div>
            })}
            {(username && !props.static) && <div className={classNames(style.entry, style.add)} onClick={addNew}>
                <Plus size="1.2rem" strokeWidth={2} />
            </div>}
        </div>
        <Modal
            opened={modal}
            onClose={() => {setModal(false); setYear(props.year || undefined); setHalf(props.half || undefined)}}
            title="Добавление курса"
            centered
            size="md"
            withCloseButton={false}
            overflow="inside"
            transition="pop"
        >
            <Progress value={progress}></Progress>
            {progress == 33 && <>
                <Space h="md"/>
                <TextInput placeholder="Название" icon={<Forms strokeWidth={1.5}/>} value={name} onChange={(event)=>setName(event.currentTarget.value)}></TextInput>
                <Space h="md"/>
                <TextInput placeholder="Токен"  icon={<At strokeWidth={1.5}/>} rightSection={
                    tip("Данный токен будет использоваться для URL курса и должен быть уникален.")}
                    value = {token} onChange={(event)=>tokenInput(event.currentTarget.value)}></TextInput>
                <Space h="xs"/>
                <Grid gutter={0} grow>
                    <Grid.Col style={{padding: ".25rem"}} span={1}>
                        <Text color="gray">Год</Text>
                        <Space h="xs"/>
                        {/* <NumberInput value={year} onChange={setYear} placeholder="Год"/> */}
                        <SegmentedControl value={year?.toString()} onChange={val=>setYear(parseInt(val))} color="blue" data={[
                            {value: "1", label: "1"},
                            {value: "2", label: "2"},
                            {value: "3", label: "3"},
                            {value: "4", label: "4"},  
                        ]}></SegmentedControl>
                    </Grid.Col>
                    <Grid.Col style={{padding: ".25rem"}} span={2}>
                        <Text color="gray">Полугодие</Text>
                        <Space h="xs"/>
                        {/* <NumberInput value={half} onChange={setHalf} placeholder="Полугодие"/> */}
                        <SegmentedControl value={half?.toString()} onChange={val=>setHalf(parseInt(val))} color="blue" data={[
                            {value: "1", label: "Первое"},
                            {value: "2", label: "Второе"},
                        ]}></SegmentedControl>
                    </Grid.Col>
                    
                </Grid>
                <Space h="xs"/>
                <Grid gutter={0} grow>
                    <Grid.Col span={1}>
                        <Button style={{marginBottom: 0}} onClick={()=>setProgress(66)}>
                            Далее
                        </Button>
                    </Grid.Col>
                    {/* <Grid.Col span={1}>
                        <Button small>
                            F    
                        </Button>
                    </Grid.Col> */}
                </Grid>
            </>}
            {progress==66 && <>
                <Space h="xs"/>
                <Grid gutter={0} grow>
                    <Grid.Col span={1}>
                        <Button style={{marginBottom: 0}} onClick={()=>setProgress(33)}>
                            Назад
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Button style={{marginBottom: 0}} onClick={()=>setProgress(100)}>
                            Далее
                        </Button>
                    </Grid.Col>
                </Grid>
            
            </>}
        </Modal>
    </div>
}

export default Table;
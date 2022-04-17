import { NextPage } from "next";
import Editor from "../../components/Editor/editor";
import { firestore } from "../../lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { Text } from "@mantine/core";

export async function getServerSideProps(context : any) {
    let main = {} as any;
    let data = {} as any;
    let error = "";

    const id = context.query.id;
    const docRef : any = doc(firestore, "courses", id);
    const dataRef : any = doc(firestore, `courses/${id}/data`, "info")
    await getDoc(docRef).then(docSnap => {
        if (!docSnap.exists) {
            error = "Курс с данным токеном не найден";
            return {
                props: {main, data, error},
            }
        }
        main = docSnap.data();
        main.created = main.created.toDate().toJSON();
    }).catch(err => {
        error = "При загрузке данных произошла ошибка";
    });
    await getDoc(dataRef).then(docSnap2 => {
        if (!docSnap2.exists) {
            error = "Не удалось загрузить данные курса";
            return {
                props: {main, data, error},
            }
        }
        data = docSnap2.data();
        data.examDate = data.examDate.toDate().toJSON();
    }).catch(err => {
        error = "При загрузке данных произошла ошибка";
    })
    

    return {
      props: {main, data, error}, 
    }
}

type Props = {
    main: any,
    data: any,
    error: string
}


const Page : NextPage<Props> = ({main, data, error}) =>{
    return <>
        {error && <h5>{error}</h5>}
        {!error && <>
            <h5>{main.name} / <Text color="blue" component="span" size="xl">@{main.token}</Text></h5>
            <p>Последнее обновление - {dayjs(main.created).locale("ru").format("D MMM YYYY, HH:mm")}</p>
            <p><b>Описание:</b> {data.description}</p>
            <p><b>Преподаватель:</b> {data.lecturer.name}</p>
            <p><b>Другие преподаватели:</b></p>
            <ul>
                {data.teachers.map((lecturer:any, index:any) => <li style={{color: "#444", fontSize: "1.1rem"}} key={index}>{lecturer.name}</li>)}
            </ul>
            {data.examShow && <p><b>Дата проведения экзамена:</b> {dayjs(data.examDate).locale("ru").format("D MMM YYYY")}</p>}
            {data.colocShow && <p><b>Количество коллоквиумов:</b> {data.coloc}</p>}
            {data.controlShow && <p><b>Количество контрольных работ:</b> {data.control}</p>}
            {data.workShow && <p><b>Количество работ:</b> {data.work}</p>}
            {data.formulaShow && <p><b>Формула оценки:</b> {data.formula}</p>}
            {data.hours && <p><b>Часы занятий:</b> {data.hours}</p>}
        </>}
    </>
}

export default Page;
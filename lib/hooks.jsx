import { useEffect, useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase";
import { firestore } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

export function useUserData(){
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");

    useEffect(()=>{
        let uname = window.localStorage.getItem("username");
        if (uname){
            setUsername(uname.toString());
        }
        let r = window.localStorage.getItem("role");
        if (r){
            setRole(r.toString());
        }
    }, [user]);

    return {user, username, role};
}

export async function CourseData(id){
    let main = {};
    let data = {};
    let error = "";

    const docRef = doc(firestore, "courses", id);
    const dataRef = doc(firestore, `courses/${id}/data`, "info");
    await getDoc(docRef).then(docSnap => {
        if (!docSnap.exists) {
            error = "Курс с данным токеном не найден";
            main = {name: id};
            data = {};
            return [main, data, error];
        }
        main = docSnap.data();
        main.created = main.created.toDate().toJSON();
    }).catch(err => {
        main = {name: id};
        data = {};
        error = "При загрузке данных произошла ошибка";
    });
    await getDoc(dataRef).then(docSnap2 => {
        if (!docSnap2.exists) {
            main = {name: id};
            data = {};
            error = "Не удалось загрузить данные курса";
            return [main, data, error];
        }
        data = docSnap2.data();
        data.examDate = data.examDate.toDate().toJSON();
    }).catch(err => {
        main = {name: id};
        data = {};
        error = "При загрузке данных произошла ошибка";
    })
    return [main, data, error];
}
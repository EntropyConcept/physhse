import { useEffect, useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase";

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
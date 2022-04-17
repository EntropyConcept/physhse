import { createContext } from "react";

export const UserContext = createContext({user: {}, username: "", role: ""});
export const PathContext = createContext();
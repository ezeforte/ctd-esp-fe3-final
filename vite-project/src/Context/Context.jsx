import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer,children } from "react";
//import {apiSwitch} from "../apiSwitch";

const GlobalStates = createContext()

const Context = () => {

    const [data, setData] = useState()

    useEffect(() => {
        axios('https://dog.ceo/api/breed/hound/images/random/10')
        .then(res => setData(res.data))
    },[])
    return (
        <GlobalStates.Provider
            value={{data}}
        >
            {children}
        </GlobalStates.Provider>
    )

}

export default Context

export const useGlobaStates = () =>{

    return useContext(GlobalStates)

}
import { createContext, useReducer } from 'react'
import SetDarkTheme from './darkReduce'

const INITIAL_STATE = { darkMode: false }

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ application }) => {

    const[state, dispatch] = useReducer(SetDarkTheme, INITIAL_STATE)

    return (  <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}}>{ application }</DarkModeContext.Provider>

    )
}
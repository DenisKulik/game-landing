import { createContext } from 'react'
import { appData, AppData } from 'app/model/index.ts'

export const AppContext = createContext<AppData>(appData)

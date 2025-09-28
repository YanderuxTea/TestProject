import React, {createContext} from 'react'
export const AuthContext = createContext<React.Dispatch<React.SetStateAction<string>>>(()=>{})
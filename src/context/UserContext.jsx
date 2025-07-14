import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true)

    const logout = () => {
        setToken(false)
    }

    const login = () => {
        setToken(true)
    }
    return (
        <UserContext.Provider value={{ token, setToken, logout, login }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider

import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(null)

    const [msgError, setMsgError] = useState("");

    const logout = () => {
        localStorage.removeItem("token");
        setToken(false)
        setUser(null)
    }

    const login = async (e) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        if (data?.error) {
            setMsgError(data.error)
        } else {
            setMsgError("")
            setToken(data.token)
            localStorage.setItem("token", data.token);

        }
    }

    const me = async (e) => {
        const tokenAlmacenado = localStorage.getItem("token");
        await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${tokenAlmacenado}`,
            },
        }, [])
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    const register = async (e) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        console.log(data)
        if (data?.error) {
            setMsgError(data.error)
        } else {
            setMsgError("")
            setToken(data.token)
            localStorage.setItem("token", data.token);
        }
    }

    return (
        <UserContext.Provider value={{ token, email, password, user, setToken, setEmail, setPassword, logout, login, me, register, msgError, setMsgError }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider

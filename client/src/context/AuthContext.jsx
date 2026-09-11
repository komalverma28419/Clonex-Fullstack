import { createContext,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(()=> {
        const saveUser = localStorage.getItem("user")
        return saveUser ? JSON.parse(saveUser) : null
    })
    const login = (token, user) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setToken(token)
        setUser(user)
    }
    const logout = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
        navigate("/")
    }
    const isAuthenticated = !!token
    return (
        <AuthContext.Provider
            value={{token,
                user,
                isAuthenticated,
                login,
                logout
            }}>
                {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () =>{
    return useContext(AuthContext)
}
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../requestMethods";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const navigate = useNavigate()

    const login = async (inputs) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, inputs,);
            setCurrentUser(res.data)
            toast.success("Login Sucess")
            navigate("/")
        } catch (error) {
            toast.error(error.response.data)
            return error
        }
    };

    const logout = async () => {
        localStorage.clear()
        setCurrentUser("")
        toast.success("Logged Out")
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
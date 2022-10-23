import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './../assets/styles/globalStyle';

import AuthProvider from "./contexts/auth";

import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Habits from "./habits/Habits";
import Today from "./today/Today";
import Record from "./record/Record";

export default function App() {

    return (
        <>
        <GlobalStyle />
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<Record />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
        </>
    );

}
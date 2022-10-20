import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../theme/globalStyle';

import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Today from "./today/Today";

export default function App() {

    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/hoje" element={<Today />} />
            </Routes>
        </BrowserRouter>
        </>
    );

}
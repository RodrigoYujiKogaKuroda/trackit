import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../theme/globalStyle';

import MainPage from "./mainPage/MainPage";
import SignUp from "./signUp/SignUp";

export default function App() {

    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cadastro" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
        </>
    );

}
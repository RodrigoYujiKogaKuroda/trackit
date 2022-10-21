import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../theme/globalStyle';

import Heading from './Heading.js';
import Section from './Section.js';

import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Habits from "./habits/Habits";
import Today from "./today/Today";
import Record from "./record/Record";

export default function App() {

    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Section>
                <Section>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                    </Routes>
                </Section>
                <Section>
                    <Routes>
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<Record />} />
                    </Routes>
                </Section>
            </Section>
        </BrowserRouter>
        </>
    );

}
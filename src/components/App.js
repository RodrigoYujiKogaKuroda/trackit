import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../theme/globalStyle';

import Heading from './Heading.js';
import Section from './Section.js';

import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Today from "./today/Today";

export default function App() {

    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Section>
                    <Section>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                    </Section>
                    <Section>
                        <Route path="/hoje" element={<Today />} />
                    </Section>
                </Section>
            </Routes>
        </BrowserRouter>
        </>
    );

}
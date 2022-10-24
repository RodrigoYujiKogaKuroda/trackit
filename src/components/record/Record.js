import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import Header from "./../Header";
import Footer from "./../Footer";

export default function Record() {

    return (
        <>
        <Header />
        <div className="mainContainer">
            <h1 className="mainTitle">Histórico</h1>
            <p className="genericText">
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </p>
        </div>
        <Footer />
        </>
    );

}
import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import Header from "./../Header";
import Footer from "./../Footer";

export default function Habits() {

    return (
        <>
        <Header />
        <div className="mainContainer">
            <SuperiorLine>
                <h1 className="mainTitle">Meus hábitos</h1>
                <button>+</button>
            </SuperiorLine>
            <Description>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Description>
        </div>
        <Footer />
        </>
    );

}

const SuperiorLine = styled.div`
    @media(max-width: 1334px) {
        min-width: 100%;
        margin-bottom: 28px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        button {
            width: 40px;
            height: 35px;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            text-align: center;
            color: #ffffff;
            background-color: #52b6ff;
            border: none;
            border-radius: 4.63636px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Description = styled.p`
    @media(max-width: 1334px) {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

import Header from "./../Header";
import Footer from "./../Footer";

import HabitAdd from "./HabitAdd";

export default function Habits() {

    const [displayAdd, setDisplayAdd] = useState(false);

    function addHabit() {
        setDisplayAdd(true);
    }

    return (
        <>
        <Header />
        <div className="mainContainer">
            <SuperiorLine>
                <h1 className="mainTitle">Meus hábitos</h1>
                <button onClick={addHabit}>+</button>
            </SuperiorLine>
            <HabitList>
                <HabitAdd
                    displayAdd={displayAdd}
                    setDisplayAdd={setDisplayAdd}
                />
                <p className="genericText">
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </HabitList>
        </div>
        <Footer />
        </>
    );

}

const SuperiorLine = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        button {
            width: 40px;
            height: 35px;
            padding: 0;
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

const HabitList = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import Header from "./../Header";
import Footer from "./../Footer";

export default function Habits() {

    const [isDisabled, setIsDisabled] = useState(false);

    const [habitName, setHabitName] = useState("");

    function addHabit() {

    }

    return (
        <>
        <Header />
        <div className="mainContainer">
            <SuperiorLine>
                <h1 className="mainTitle">Sexta-feira, 21/10</h1>
                <button onClick={addHabit}>+</button>
            </SuperiorLine>
            <HabitList>
                <Habit>
                    <input
                        type="text"
                        placeholder="nome do hábito"
                        value={habitName}
                        onChange={e => setHabitName(e.target.value)}
                        disabled={isDisabled}
                        required
                    />
                    <Week>
                        <Weekday>D</Weekday>
                        <Weekday>S</Weekday>
                        <Weekday>T</Weekday>
                        <Weekday>Q</Weekday>
                        <Weekday>Q</Weekday>
                        <Weekday>S</Weekday>
                        <Weekday>S</Weekday>
                    </Week>
                    <BottomLine>
                        <p>Cancelar</p>
                        <button>Salvar</button>
                    </BottomLine>
                </Habit>
            </HabitList>
            <p className="genericText">
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>
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

const Habit = styled.div`
    @media(max-width: 1334px) {
        position: relative;
        width: 100%;
        height: 180px;
        padding: 18px 16px 15px 19px;
        background: #ffffff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        input {
            width: 100%;
            height: 45px;
            margin-bottom: 8px;
            padding: 9px 11px 11px 11px;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
        }

        ::placeholder {
            color: #dbdbdb;
        }
    }
`;

const Week = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Weekday = styled.button`
    @media(max-width: 1334px) {
        width: 30px;
        height: 30px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #dbdbdb;
        background: #ffffff;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
    }
`;

const BottomLine = styled.div`
    @media(max-width: 1334px) {
        position: absolute;
        bottom: 15px;
        right: 16px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52b6ff;
        }

        button {
            width: 84px;
            height: 35px;
            margin-left: 23px;
            padding: 0;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
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
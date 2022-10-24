import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { AuthContext } from "../contexts/auth";

import Header from "./../Header";
import Footer from "./../Footer";

import HabitAdd from "./HabitAdd";
import HabitList from "./HabitList";

export default function Habits() {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [axiosSucess, setAxiosSucess] = useState({});
    const [habitList, setHabitList] = useState({});

    const {user} = useContext(AuthContext);

    const isListEmpty = Object.keys(habitList).length === 0;

    useEffect(() => {
        const request = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            { headers: { Authorization: `Bearer ${user.token}` } }
        );
        
        request.then(response => {
            setHabitList(response.data);
        });
        request.catch(error => {
            console.log(error.response.data);
        });
    }, [axiosSucess]);

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
            <MainMenu>
                <HabitAdd
                    week={week}
                    setAxiosSucess={setAxiosSucess}
                    displayAdd={displayAdd}
                    setDisplayAdd={setDisplayAdd}
                />
                {isListEmpty ?
                    <p className="genericText">
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                :
                    <HabitList
                        week={week}
                        setAxiosSucess={setAxiosSucess}
                        habitList={habitList}
                    />
                }
            </MainMenu>
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

const MainMenu = styled.div`
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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { AuthContext } from "../contexts/auth";
import 'dayjs/locale/pt-br';

import Header from "./../Header";
import Footer from "./../Footer";

import TodayHabit from "./TodayHabit";

export default function Today() {

    const [axiosSucess, setAxiosSucess] = useState({});
    const [habitList, setHabitList] = useState([]);

    const {user, percentage, setPercentage, oneHundred, setOneHundred, setHabitsDone} = useContext(AuthContext);

    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    const dayjs = require('dayjs');
    dayjs.locale('pt-br');
    const weekDay = dayjs().format('dddd')[0].toUpperCase() + dayjs().format('dddd').slice(1)

    function getSuccess(data){
        setHabitList(data);
        setOneHundred(data.length);
        const doneSum = data.filter(function (h) {
          return h.done === true;
        });
        setHabitsDone(doneSum.length);
        setPercentage(Math.round((100 * doneSum.length) / oneHundred));
    }

    useEffect(() => {
        const request = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
            config
        );
        
        request.then(response => {
            getSuccess(response.data);
        });
        request.catch(error => {
            console.log(error.response.data);
        });
    }, [axiosSucess, percentage]);

    return (
        <>
        <Header />
        <div className="mainContainer">
            <h1 className="mainTitle">{weekDay}, {dayjs().format('DD/MM')}</h1>
            <Description percentage={percentage}>
                {percentage > 0 ? 
                    `${percentage}% dos hábitos concluídos`
                    : "Nenhum hábito concluído ainda"
                }
            </Description>
            <TodayList>
                {habitList.map((habit, index) =>
                    <TodayHabit key={index} setAxiosSucess={setAxiosSucess} habit={habit} oneHundred={oneHundred}/>
                )}
            </TodayList>
        </div>
        <Footer />
        </>
    );

}

const Description = styled.p`
    @media(max-width: 1334px) {
        margin-bottom: 28px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.percentage > 0 ? '#8fc549' : '#bababa'};
    }
`;

const TodayList = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;
import { useContext, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { AuthContext } from "../contexts/auth";
import 'dayjs/locale/pt-br'

import Header from "./../Header";
import Footer from "./../Footer";

export default function Today() {

    const [toDoList, setToDoList] = useState([]);
    const [habitConcluded, setHabitConcluded] = useState(false);

    const {user, percentage} = useContext(AuthContext);

    const dayjs = require('dayjs');
    dayjs.locale('pt-br');
    const weekDay = dayjs().format('dddd')[0].toUpperCase() + dayjs().format('dddd').slice(1)

    const request = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        { headers: { Authorization: `Bearer ${user.token}` } }
    );
    
    request.then(response => {
        setToDoList(response.data);
    });
    request.catch(error => {
		console.log(error.response.data);
	});

    return (
        <>
        <Header />
        <Container percentage={percentage}>
            <h1>{weekDay}, {dayjs().format('DD/MM')}</h1>
            <p>
                {percentage > 0 ? 
                    `${percentage}% dos hábitos concluídos`
                    : "Nenhum hábito concluído ainda"
                }
            </p>
        </Container>
        <Footer />
        </>
    );

}

const Container = styled.div`
    @media(max-width: 1334px) {
        min-width: 100%;
        min-height: 100vh;
        padding: 98px 17px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background: #e5e5e5;

        h1 {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126ba5;
        }

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: ${props => props.percentage > 0 ? '#8fc549' : '#bababa'};
        }
    }
`;
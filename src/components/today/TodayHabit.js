import { useContext, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { AuthContext } from "../contexts/auth";

import CHECKMARK from "./../../assets/img/checkmark.png"

export default function TodayHabit({
    setAxiosSucess,
    habit
}) {

    const {user, habitsDone, setHabitsDone} = useContext(AuthContext);

    const [isDisabled, setIsDisabled] = useState(false);

    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    function postSucessAdd(data) {
        const habitsDoneList = habitsDone + 1;
        setAxiosSucess(data);
        setHabitsDone(habitsDoneList);
        setIsDisabled(false);
    }

    function postSucessSubtract(data) {
        const habitsDoneList = habitsDone - 1;
        setAxiosSucess(data);
        setHabitsDone(habitsDoneList);
        setIsDisabled(false);
    }

    function postFail() {
        alert(`ERRO: não foi possível realizar a operação. Por favor, tente novamente.`);
    }

    function isItBiggerThan(habit) {
        if ((habit.currentSequence >= habit.highestSequence) && (habit.highestSequence > 0)) {
            return true;
        } else {
            return false;
        }
    }

    function markBox(done, id) {
        setIsDisabled(true);
        if (done) {
            const request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
                null, config
            );
            
            request.then(response => {
                postSucessAdd(response.data);
            });
            request.catch(() => {
                postFail();
            });
        } else {
            const request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
                null, config
            );
            
            request.then(response => {
                postSucessSubtract(response.data);
            });
            request.catch(error => {
                postFail(error.response.data);
            });
        }
    }

    return (
        <>
        <TodayBox data-identifier="today-infos">
            <TodayText>
                <h1>{habit.name}</h1>
                <TextLine greenIt={habit.done}>Sequência atual:<p>{habit.currentSequence} dias</p></TextLine>
                <TextLine greenIt={isItBiggerThan(habit)}>Seu recorde:<p>{habit.highestSequence} dias</p></TextLine>
            </TodayText>
            <TodayMark done={habit.done} isDisabled={isDisabled}>
                <img data-identifier="done-habit-btn" src={CHECKMARK} alt="check" onClick={() => markBox(habit.done, habit.id)}></img>
            </TodayMark>
        </TodayBox>
        </>
    );

}

const TodayBox = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        height: 94px;
        margin-bottom: 10px;
        padding: 13px 13px 17px 15px;
        background: #ffffff;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const TodayText = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h1 {
            margin-bottom: 7px;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
        }

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }
    }
`;

const TextLine = styled.h2`
    @media(max-width: 1334px) {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        display: flex;

        p {
            margin-left: 5px;
            color: ${props => props.greenIt ? "#8fc549" : "#666666"};
        }
    }
`;

const TodayMark = styled.button`
    @media(max-width: 1334px) {
        pointer-events: ${(props) => props.isDisabled ? 'none' : null};
        width: 69px;
        height: 69px;
        background: ${props => props.done ? "#8fc549" : "#ebebeb"};
        border: 1px solid ${props => props.done ? "#8fc549" : "#e7e7e7"};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 35.09px;
            height: 28px;
        }
    }
`;
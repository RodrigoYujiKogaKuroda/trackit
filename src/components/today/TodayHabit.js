import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { AuthContext } from "../contexts/auth";

import CHECKMARK from "./../../assets/img/checkmark.png"

export default function TodayHabit({
    setAxiosSucess,
    habit
}) {

    const {config} = useContext(AuthContext);

    function markBox(done, id) {
        if (done) {
            const request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
                {}, config
            );
            
            request.then(response => {
                setAxiosSucess(response.data);
            });
            request.catch(error => {
                console.log(error.response.data);
            });
        } else {
            const request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
                {}, config
            );
            
            request.then(response => {
                setAxiosSucess(response.data);
            });
            request.catch(error => {
                console.log(error.response.data);
            });
        }
    }

    return (
        <>
        <TodayBox>
            <TodayText>
                <h1>{habit.name}</h1>
                <TextLine>Sequência atual:<p>{habit.currentSequence} dias</p></TextLine>
                <TextLine>Seu recorde:<p>{habit.highestSequence} dias</p></TextLine>
            </TodayText>
            <TodayMark done={habit.done}>
                <img src={CHECKMARK} alt="check" onClick={() => markBox(habit.done, habit.id)}></img>
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
            color: #666666;
        }
    }
`;

const TodayMark = styled.div`
    @media(max-width: 1334px) {
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
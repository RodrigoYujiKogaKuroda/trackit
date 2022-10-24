import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { TrashOutline } from 'react-ionicons'

import { daysColors } from "./../constants/colors"

export default function HabitAdd({ week, habitList }) {

    console.log(habitList);

    function deleteHabit(id) {
        console.log(`Delete habit ${id}?`);
    }

    return (
        <>
        {habitList.map((habit, index) =>
            <Habit key={index}>
                <SuperiorLine>
                    <h1>{habit.name}</h1>
                    <Delete onClick={() => deleteHabit(habit.id)}></Delete>
                </SuperiorLine>
                <Week>
                    {week.map((day, index) => 
                        <Day
                            key={index}
                            status={
                                habit.days.includes(index) ?
                                    "selected"
                                :
                                    "default"
                            }>
                            {day}
                        </Day>
                    )}
                </Week>
            </Habit>
        )}
        </>
    );

}

const Habit = styled.form`
    @media(max-width: 1334px) {
        width: 100%;
        height: 91px;
        margin-bottom: 10px;
        padding: 11px 10px 15px 15px;
        background: #ffffff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const SuperiorLine = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
    }

    h1 {
        margin-top: 2px;
        margin-bottom: 8px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`;

const Delete = styled(TrashOutline)`
    width: 13px;
    height: 15px;
    color: "#000000";
`;

const Week = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

const Day = styled.div`
    @media(max-width: 1334px) {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => daysColors[props.status].color};
        background: ${props => daysColors[props.status].background};
        border: 1px solid ${props => daysColors[props.status].border};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;
import { useState, useEffect } from "react";
import styled from 'styled-components';

import { daysColors } from "./../constants/colors"

export default function Weekday({
    day,
    index,
    isDisabled,
    markDay,
    isSelected
}) {

    const [status, setStatus] = useState("default");

    useEffect(() => {
        if (isSelected) {
            setStatus("selected");
        } else {
            setStatus("default");
        }
    }, [isSelected]);

    return (
        <>
        <Day
            status={status}
            onClick={() => markDay(index)}
            disabled={isDisabled}
        >
            {day}
        </Day>
        </>
    );

}

const Day = styled.button`
    @media(max-width: 1334px) {
        width: 30px;
        height: 30px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => daysColors[props.status].color};
        background: ${props => daysColors[props.status].background};
        border: 1px solid ${props => daysColors[props.status].border};
        border-radius: 5px;
    }
`;
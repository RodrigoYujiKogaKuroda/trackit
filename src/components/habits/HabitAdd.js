import { useContext, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { AuthContext } from "../contexts/auth";

import { ThreeDots } from 'react-loader-spinner'

import Weekday from "./Weekday"

export default function HabitAdd({
    week,
    setPostSucess,
    displayAdd,
    setDisplayAdd
}) {

    const [isDisabled, setIsDisabled] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);

    const {user} = useContext(AuthContext);

    const config = {
        headers: {
            "Authorization":  `Bearer ${user.token}`
        }
    }

    const habit = {
        name: habitName,
        days: selectedDays.sort()
    }

    function addSucess(data) {
        setPostSucess(data);
        setDisplayAdd(false);
        setIsDisabled(false);
        setHabitName("");
        setSelectedDays([]);
    }

    function addFail() {
        alert("ERRO: Não foi possível registrar o hábito! Por favor, tente novamente!");
        setIsDisabled(false);
    }

    function createHabit(event) {
        event.preventDefault();
        setIsDisabled(true);
		const request = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            habit, config
        );
        request.then(response => {
            addSucess(response.data);
        });
        request.catch(addFail);
    }

    function markDay(index) {
        const isSelected = selectedDays.some(d => index === d);
        if (isSelected) {
            const newList = selectedDays.filter(d => index !== d);
            setSelectedDays(newList);
        } else {
            const test = [...selectedDays, index];
            setSelectedDays(test);
        }
    }

    return (
        <>
        <Habit displayAdd={displayAdd} onSubmit={createHabit}>
            <input
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={e => setHabitName(e.target.value)}
                disabled={isDisabled}
                required
            />
            <Week>
                {week.map ((day, index) =>
                    <Weekday
                        key={index}
                        day={day}
                        index={index}
                        isDisabled={isDisabled}
                        markDay={markDay}
                        isSelected={selectedDays.some(d => index === d)}
                    />
                )}
            </Week>
            <BottomLine>
                <p onClick={() => setDisplayAdd(false)} disabled={isDisabled}>Cancelar</p>
                <button type="submit" disabled={isDisabled}>
                    {isDisabled ? 
                        <ThreeDots 
                            height="13" 
                            width="51" 
                            radius="9"
                            color="#ffffff" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                     : "Salvar" }
                </button>
            </BottomLine>
        </Habit>
        </>
    );

}

const Habit = styled.form`
    @media(max-width: 1334px) {
        display: ${props => props.displayAdd ? "block" : "none !important"};
        position: relative;
        width: 100%;
        height: 180px;
        margin-bottom: 28px;
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

        input:disabled {
            color: #afafaf;
            background: #f2f2f2;
            border: 1px solid #d5d5d5;
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
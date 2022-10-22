import { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { AuthContext } from "./contexts/auth";

import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {

    const {percentage} = useContext(AuthContext);

    return (
        <>
        <Container>
            <Link to={`/habitos`} style={{ textDecoration: 'none' }}>
                <p>Hábitos</p>
            </Link>
            <ProgressBar>
                <Link to={`/hoje`} style={{ textDecoration: 'none' }}>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: '17.976px',
                            backgroundColor: "#52b6ff",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </ProgressBar>
            <Link to={`/historico`} style={{ textDecoration: 'none' }}>
                <p>Histórico</p>
            </Link>
        </Container>
        </>
    );

}

const Container = styled.div`
    @media(max-width: 1334px) {
        position: fixed;
        bottom: 0;
        right: 0;
        min-width: 100%;
        height: 70px;
        padding-left: 36px;
        padding-right: 31px;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    p {
        margin-bottom: 26px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #52b6ff;
    }
`;

const ProgressBar = styled.div`
    @media(max-width: 1334px) {
        width: 91px;
        height: 91px;
        margin-bottom: 10px;
    }
`;
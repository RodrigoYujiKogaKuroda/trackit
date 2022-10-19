import { useState } from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';

import LOGO from './../img/logo.png';

export default function MainPage() {

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    return (
        <>
        <Container>
            <img src={LOGO} alt="logo"></img>
            <Login>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="foto"
                    value={photo}
                    onChange={e => setPhoto(e.target.value)}
                    required
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Login>
            <Link to={`/`}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
        </>
    );

}

const Container = styled.div`
    @media(max-width: 1334px) {
        min-width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 68px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        img {
            width: 180px;
            height: 178.38px;
            margin-bottom: 32.62px;
        }

        p {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 13.976px;
            line-height: 17px;
            text-align: center;
            text-decoration-line: underline;
            color: #52b6ff;
        }
    }
`;

const Login = styled.form`
    @media(max-width: 1334px) {
        top: 0;
        left: 0;
        margin-bottom: 25px;
        padding: 0 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        input[type=text] {
            width: 100%;
            height: 45px;
            margin-bottom: 6px;
            padding: 11px;
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

        button {
            width: 100%;
            height: 45px;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #ffffff;
            background-color: #52b6ff;
            border: none;
            border-radius: 4.63636px;
        }
    }
`;
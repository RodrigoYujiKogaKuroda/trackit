import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

import { ThreeDots } from 'react-loader-spinner'

import LOGO from './../img/logo.png';

export default function Login() {

    const navigate = useNavigate();

    const [isDisabled, setIsDisabled] = useState(false);
    
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const user = {
        email: email,
        password: password
    }

    function loginFail() {
        alert("ERRO: Não foi possível conectar o usuário! Por favor, tente novamente!");
        setIsDisabled(false);
    }

    function loginUser(event) {
        event.preventDefault();
        console.log(user);
        setIsDisabled(true);
		const request = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            {
                email: email,
                password: password
            }
        );
        request.then(() => navigate('/'));
        request.catch(loginFail);
    }

    return (
        <>
        <Container>
            <img src={LOGO} alt="logo"></img>
            <LoginForm onSubmit={loginUser}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={isDisabled}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={isDisabled}
                    required
                />
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
                     : "Entrar" }
                </button>
            </LoginForm>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
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

const LoginForm = styled.form`
    @media(max-width: 1334px) {
        top: 0;
        left: 0;
        margin-bottom: 25px;
        padding: 0 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        input {
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

        input:disabled {
            color: #afafaf;
            background: #f2f2f2;
            border: 1px solid #d5d5d5;
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
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;
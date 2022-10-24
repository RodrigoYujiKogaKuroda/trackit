import { useContext } from "react";
import styled from 'styled-components';
import { AuthContext } from "./contexts/auth";

export default function Header() {

    const {user} = useContext(AuthContext);

    return (
        <>
        <Container>
            <p>TrackIt</p>
            <img data-identifier="avatar" src={user.image} alt="userImage" />
        </Container>
        </>
    );

}

const Container = styled.div`
    @media(max-width: 1334px) {
        position: fixed;
        min-width: 100%;
        height: 70px;
        margin: 0;
        background: #126ba5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-family: 'Playball', cursive;
            font-weight: 400;
            font-size: 38.982px;
            margin-left: 18px;
            top: 0;
            left: 0;
            line-height: 49px;
            color: #ffffff;
        }

        img {
            width: 51px;
            height: 51px;
            margin-right: 10px;
            bottom: 0;
            right: 0;
            border-radius: 98.5px;
        }
    }
`;
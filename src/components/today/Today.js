import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import Header from "./../Header";
import Footer from "./../Footer";

export default function Today() {

    return (
        <>
        <Header />
        <Container>

        </Container>
        <Footer />
        </>
    );

}

const Container = styled.div`
    @media(max-width: 1334px) {
        min-width: 100%;
        min-height: 100vh;
        padding: 70px 17px 70px 18px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: #e5e5e5;
    }
`;
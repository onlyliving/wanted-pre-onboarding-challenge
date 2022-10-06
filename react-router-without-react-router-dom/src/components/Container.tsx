// import React from "react";
import styled from 'styled-components';

interface Props {
    children?: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
    return (
        <Main>
            {children}
        </Main>
    )
};

export default Container;

const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212123;
`;
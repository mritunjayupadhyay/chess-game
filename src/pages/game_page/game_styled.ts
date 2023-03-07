import styled from "styled-components";

export const GameStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.darkBackground}
`
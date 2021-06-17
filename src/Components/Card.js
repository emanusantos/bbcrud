import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20em;
    height: 30em;
    border: .3em solid seagreen;
    text-align: center;

    p {
        padding-top: .5em;
    }
    
    img {
        width: 100%;
        height: 90%;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    padding: ${(props) => props.padding};
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
        text-align: center;
    }
`;
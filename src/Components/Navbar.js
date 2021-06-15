import React from 'react';
import styled from 'styled-components';

export function Navbar() {
    const Navbar = styled.nav`
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 2;
    background-color: seagreen;
    padding: 1em;

    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;

        li {
            cursor: pointer;
        }
    }
`;
    return (
        <Navbar>
            <ul>
                <li>Home</li>
                <li>Characters</li>
                <li>Episodes</li>
                <li>Quotes</li>
                <li>My profile</li>
            </ul>
        </Navbar>
    )
}

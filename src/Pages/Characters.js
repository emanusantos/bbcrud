import React, { useEffect, useState } from 'react';
import { Navbar, Card } from '../Components/helper.js';

export default function Characters() {

    const fetchItems = async () => {
        const data = await fetch('https://www.breakingbadapi.com/api/characters?limit=10&offset=10?category=Breaking+Bad');
        const characters = await data.json();
        setCharacter(characters);
        console.log(character);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const [character, setCharacter] = useState([])


    return (
        <>
            <Navbar />
            <h1>Oi</h1>
            <h1>Oi</h1>
            <ul>
                {character.map(item => (
                <li>
                    <Card>
                        <img src={`${item.img}`} alt="" />
                        <p>{item.name}</p>
                    </Card>
                </li>
                ))}
            </ul>
        </>
    )
}
import React, { useState } from 'react';
import { FaUser, FaUserLock } from 'react-icons/fa';
import { Button, Container, Input, InputArea, LoginForm } from '../Components/helper.js';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <LoginForm action="">
            <h4>Username</h4>
                <InputArea>
                    <FaUser /><Input type="text" onChange={event => {setUsername(event.target.value)}} />
                </InputArea>
            <h4>Password</h4>
                <InputArea>
                    <FaUserLock /><Input type="password" onChange={event => {setPassword(event.target.value)}} />
                </InputArea>
                <Button>Sign In</Button>
            </LoginForm>
        </Container>
    )
}

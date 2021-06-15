import React from 'react';
import { FaUser, FaUserLock } from 'react-icons/fa';
import { Button, Container, Input, InputArea, LoginForm } from '../Components/helper.js';

export default function Login() {
    return (
        <Container>
            <LoginForm action="">
            <h4>Username</h4>
                <InputArea>
                    <FaUser /><Input type="text" name="" id="" />
                </InputArea>
            <h4>Password</h4>
                <InputArea>
                    <FaUserLock /><Input type="text" />
                </InputArea>
                <Button>Submit!</Button>
            </LoginForm>
        </Container>
    )
}

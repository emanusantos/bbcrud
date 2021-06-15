import React, { useState } from 'react';
import { Button, Container, Input, InputArea, Form } from '../Components/helper.js';

export default function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    return (
        <Container padding={'6em'}>
            <Form padding ={'4em'} action="">
            <h4>Name</h4>
                <InputArea>
                    <Input type="text" onChange={event => {setName(event.target.value)}} />
                </InputArea>
            <h4>E-mail</h4>
                <InputArea>
                    <Input type="email" onChange={event => {setEmail(event.target.value)}} />
                </InputArea>
            <h4>Username</h4>
                <InputArea>
                    <Input type="text" onChange={event => {setUsernameReg(event.target.value)}} />
                </InputArea>
            <h4>Password</h4>
                <InputArea>
                    <Input type="password" onChange={event => {setPasswordReg(event.target.value)}} />
                </InputArea>
                <Button>Register</Button>
            </Form>
        </Container>
    )
}

import React, { useState } from 'react';
import { Button, Container, Input, InputArea, Form } from '../Components/helper.js';
import Axios from 'axios';

export default function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const addUser = async () => {
        try {
            await Axios.post('http://localhost:3001/create', {
                name: name,
                email: email,
                username: usernameReg,
                password: passwordReg
            });
            console.log('Success')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container padding={'6em'}>
            <Form padding ={'4em'}>
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
                <Button type="button" onClick={addUser}>Register</Button>
            </Form>
        </Container>
    )
}

import React, { useState } from 'react';
import { Button, Container, Input, InputArea, Form } from '../Components/helper.js';
import Axios from 'axios';

export default function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function addUser(e) {
        e.preventDefault()

        if (name.length < 2) {
            return setError('Your name should');
        }

        try {
            setError('');
            setLoading(true);
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
            <Form onSubmit={addUser} padding ={'4em'}>
            {error}
            <h4>Name</h4>
                <InputArea>
                    <Input type="text" onChange={event => {setName(event.target.value)}} minLength="2" />
                </InputArea>
            <h4>E-mail</h4>
                <InputArea>
                    <Input type="email" onChange={event => {setEmail(event.target.value)}} />
                </InputArea>
            <h4>Username</h4>
                <InputArea>
                    <Input type="text" onChange={event => {setUsernameReg(event.target.value)}} minLength="2" maxLength="12"  />
                </InputArea>
            <h4>Password</h4>
                <InputArea>
                    <Input type="password" onChange={event => {setPasswordReg(event.target.value)}} minLength="6" maxLength="12"  />
                </InputArea>
                <Button type="submit" disabled={loading}>Register</Button>
            </Form>
        </Container>
    )
}

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const Signin = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies();

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            //no default
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
                .then((result) => {
                    return result.json();
                })
                .then(({ status, extra, infos }) => {
                    if (status === "OK") {
                        console.log(infos);
                        setCookie("userToken", infos.userToken);
                        setCookie("user", infos.user);
                        history.push('/'); //redirection vers Home
                    } else {
                        toast.error(
                            <div>
                                Nous avons eu une erreur ! <br />
                                {extra}
                            </div>
                        );
                    }
                })
                .catch((error) => {
                    toast.error("Nous avons eu une erreur !");
                    console.log(error);
                });
        }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="signin.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="adresse@mail.ltd"
                    />    
                </Form.Group>
                <Form.Group controlId="signin.password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    variant="outline-success"
                    type="submit">
                    Connexion
                </Button>
            </Form>
        </Container>
    );
};

export default Signin;
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeleteComment = () => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("id : ", id);
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "id":
                setId(event.target.value);
                break;
            // no default
        }
    }

    return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="commentId">
                <Form.Label>Id du commentaire</Form.Label>
                <Form.Control
                    type="number"
                    name="id"
                    onChange={handleChange}
                    value={id}
                />
            </Form.Group>
                <Button
                    variant="danger"
                    type="submit">
                    Supprimer un commentaire
                </Button>
        </Form>
    </Container>

    );
}

export default DeleteComment;
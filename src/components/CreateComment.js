import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateComment = ({articleId, onCreate}) => {
    const [content, setContent] = useState("");
    
    const [cookies, setCookie] = useCookies();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/api/comments/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                articleId,
                author: cookies.user.id,
                content,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra, result }) => {
                if (status === "OK") {
                    onCreate({
                        id: result.commentId,
                        content,
                        articleId, created_at: new Date(),
                        authorId: cookies.user.id,
                        authorFirstname: cookies.user.firstname,
                        authorLastname: cookies.user.lastname,
                    });

                    setContent("");

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
    };
    
    
    const handleChange = (event) => {

        switch (event.target.name) {
            case "content":
                setContent(event.target.value);
                break;
            // no default
        }
    }
    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="comment.content">
                <Form.Label>
                    Contenu du commentaire
                </Form.Label>
                <Form.Control
                    type="textarea"
                    name="content"
                    onChange={handleChange}
                    value={content}
                />
            </Form.Group>
            <Button
                variant="warning"
                type="submit">
                Créer un commentaire
            </Button>
        </Form>
    );
}

export default CreateComment;
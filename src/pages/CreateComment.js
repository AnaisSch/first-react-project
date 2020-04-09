import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateComment = () => {
    const [articleId, setArticleId] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    

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
                author,
                content,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra }) => {
                if (status === "OK") {
                    setArticleId("");
                    setAuthor("");
                    setContent("");
                    toast.success("Le commentaire a bien été ajouté");
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
            });
    };
    
    const handleChange = (event) => {

        switch (event.target.name) {
            case "articleId":
                setArticleId(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            // no default
        }
    }
    return ( 
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comment.articleId">
                    <Form.Label>
                        Identifiant de l'article
                    </Form.Label>
                <Form.Control
                    type="text"
                    name="articleId"
                    onChange={handleChange}
                    value={articleId}
                />
                </Form.Group>
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
                <Form.Group controlId="comment.author">
                    <Form.Label>
                        Id de l'auteur du commentaire
                    </Form.Label>
                <Form.Control
                    type="number"
                    name="author"
                    onChange={handleChange}
                    value={author}
                />
                </Form.Group>
                <Button
                    variant="warning"
                    type="submit">
                    Créer un commentaire
                </Button>
            </Form>
        </Container>
    );
}

export default CreateComment;
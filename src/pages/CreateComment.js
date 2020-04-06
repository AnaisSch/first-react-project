import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateComment = () => {
    const [articleId, setArticleId] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("article_id", articleId);
        console.log("content", content);
        console.log("author", author);
    }
    const handleChange = (event) => {
        console.log("Target name: ", event.target.name);
        console.log("Target value: ", event.target.value);

        switch (event.target.name) {
            case "article_id":
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
                    name="article_id"
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
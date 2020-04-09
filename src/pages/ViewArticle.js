import React, { useState, useEffect } from 'react';
import { formatDate } from '../utils/date';
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';



const ViewArticle = ({ match }) => {
    const { id } = match.params;
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/article?id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, article }) => {
                if (status === "OK") {
                    setArticle(article);
                } else {
                    toast.error("Il y a un soucis")
                }
            })
            .catch((error) => {
                toast.error("Il y a une erreur")
            })
    }, [id])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/comments?id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setComments(comments);
                } else {
                    toast.error("Y a un soucis... ");
                }
            })
            .catch((error) => {
                console.log("error : ", error)
                toast.error("Soucis, nous avons un soucis");
            })
    }, [id]);

    const renderedComments = comments.map((comment) => {
        const { id, content, authorFirstname, authorLastname, created_at} = comment;
        return (
            <Card key={id}>
                <Card.Body>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Créé le {formatDate(created_at)}
                        &nbsp;par {authorFirstname} {authorLastname.substring(0, 1)}.
                        </small>
                </Card.Footer>
            </Card>
        );
    });
    return (
        <Container>
            <h1>{article.title}</h1>
            <p>
                {article.content}
            </p>
            <p>
                Posté le {formatDate(new Date())}<br />
                par {article.authorFirstname} {article.authorLastname}
            </p>
            <div>
                {renderedComments}
            </div>
        </Container>
    );
};



export default ViewArticle;
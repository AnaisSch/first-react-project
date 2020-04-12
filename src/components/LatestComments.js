import React, { useState, useEffect } from 'react';
import { formatDate } from '../utils/date';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

const LatestComments = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/api/comments?id=' + articleId)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setComments(comments);
                } else {
                    console.log("error : ", status);
                }
            })
            .catch((error) => {
                console.log("error : ", error);
            });
    }, [articleId])

    const renderedComments = comments.map((comments) => {
        const { articleId, content, authorFirstname, authorLastname, created_at } = comments;

        return (
            <Card key={articleId}>
                <Card.Body>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        créé le&nbsp;
                        {formatDate(created_at)}&nbsp;
                        par&nbsp;{authorFirstname}&nbsp;{authorLastname.substring(0, 1)}.
                    </small>
                </Card.Footer>
            </Card>
        );
    });

    return (
        <Container>
            <h5>Derniers commentaires : </h5>
            <CardDeck>
                {renderedComments}
            </CardDeck>
        </Container>
    );
};


export default LatestComments;
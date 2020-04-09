import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import { formatDate } from '../utils/date';

const ViewArticle = ({ match }) => {
    const { id } = match.params;
    console.log(id);
    const [article, setArticle] = useState("");


    useEffect(() => {
        fetch('http://localhost:3001/api/article?id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, article})  => {
                if (status === "OK") {
                    setArticle(article);
                } else {
                    toast.error("Nous avons eu un petit soucis !");
                }
            })
            .catch((error) => {
                toast.error("Nous avons eu un petit soucis !");
                console.log(error);
        })
    }, [ id ])
    return (
        <Container>
            <h1>{article.title}</h1>
            <p>
                {article.content}
            </p>
            <p> 
                Posté le {formatDate(new Date() )} <br />
                par {article.authorFirstname} {article.authorLastname}
            </p>
            <p> 
                Commentaires
            </p>
        </Container>
    );
};

export default ViewArticle;
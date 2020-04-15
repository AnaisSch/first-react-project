import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { formatDate } from '../utils/date';
import Container from "react-bootstrap/Container";
import LatestComments from '../components/LatestComments';

const ViewArticle = ({ match}) => {
    const { articleId } = match.params;

    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/article?id=' + articleId)
            .then((result) => {
                return result.json();
            })
            .then(({ status, article }) => {
                if (status === "OK") {
                    setArticle(article);
                } else {
                    toast.error("Oups... Nous avons eu un problème !");
                }
            })
            .catch((error) => {
                toast.error("Oups... Nous avons eu un problème !");
                console.log(error);
            })
    }, [articleId]);

    return (
        <Container>
            <h1>{article.title}</h1>
            <p>
                {article.content}
            </p>
            <p>
                posté le {formatDate(article.created_at)}<br />
                par {article.authorFirstname} {article.authorLastname}
            </p>
            <div>
                <LatestComments articleId={articleId} /> 
            </div>
        </Container>
    );
};

export default ViewArticle;
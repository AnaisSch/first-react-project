import React, { useState, useEffect } from 'react';
import CreateComment from '../components/CreateComment';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import ViewComment from '../components/ViewComment';
import { useCookies } from 'react-cookie';

const LatestComments = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [cookies, setCookie] = useCookies();
    
    useEffect(() => {
        fetch('http://localhost:3001/api/comments?articleId=' + articleId)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setComments(comments.reverse());
                } else {
                    toast.error("Nous avons eu un probl�me !");
                }
            })
            .catch((error) => {
                toast.error("Nous avons eu un problème !");
                console.log("error : ", error);
            });
    }, [articleId]);

    const handleCreate = (comment) => {
        const newComments = [...comments];

        newComments.push(comment);

        setComments(newComments);
    }

    const handleDelete = (commentId) => {
        const newComments = comments.filter((comment) => {
            return comment.id !== commentId;
        })

        setComments(newComments);
    }


    const renderedComments = comments.map((comment) => {

        return (
            <ViewComment
                key={comment.id}
                comment={comment}
                onDelete={handleDelete}
            />
        );
    });
    const renderCreateCommentLink = () => {
        if (cookies.userToken) {
            return (
                <ListGroup.Item>
                    <CreateComment
                        articleId={articleId}
                        onCreate={handleCreate}
                    />
                </ListGroup.Item>
            )
        }
    }

    return (
        <ListGroup>
            {renderedComments}
            {renderCreateCommentLink()}
        </ListGroup>
    );
};


export default LatestComments;
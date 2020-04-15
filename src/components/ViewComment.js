import React from 'react';
import { toast } from 'react-toastify';
import { formatDate } from '../utils/date';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


const ViewComment = ({ comment, onDelete }) => {
    const { id, content, authorFirstname, authorLastname, created_at } = comment;

    const handleClick = () => {
        fetch('http://localhost:3001/api/comments/delete', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra }) => {
                if (status === "OK") {
                    onDelete(id);
                    
                    toast.success("Le commentaire a bien été supprimé");
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

    return (
        <ListGroup.Item>
            <p>
                <Button
                    variant="outline-danger"
                    onClick={handleClick}
                >
                    <FaTrash />
                </Button>
                &nbsp;
                {content}
            </p>
            <small className="text-muted">
                par {authorFirstname} {authorLastname}&nbsp;
                le {formatDate(created_at)}
            </small>
        </ListGroup.Item>
    );

};

export default ViewComment;

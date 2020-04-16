import React from 'react';
import { toast } from 'react-toastify';
import { formatDate } from '../utils/date';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';


const ViewComment = ({ comment, onDelete }) => {
    const { id, content, authorId, authorFirstname, authorLastname, created_at } = comment;

    const [cookies, setCookie] = useCookies();

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
    const renderTrashButton = () => {
        const user = cookies.user || {};
        if (user.id === authorId) {
            return (
                <Button
                    variant="outline-danger"
                    onClick={handleClick}
                >
                    <FaTrash />
                </Button>
            )
        }
    };
    return (
        <ListGroup.Item>
            <p>
                {renderTrashButton()}
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

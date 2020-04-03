import React    from 'react';
import Nav      from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link as={Link} to="/">
                    Accueil
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/articles/create">
                    Créer un article
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/articles/delete">
                    Supprimer un article
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;
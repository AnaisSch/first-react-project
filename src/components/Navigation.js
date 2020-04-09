import React    from 'react';
import Nav      from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
                    Cr�er un article
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/articles/delete">
                    Supprimer un article
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comments/create">
                    Créer un commentaire
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comments/delete">
                    Supprimer un commentaire
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;
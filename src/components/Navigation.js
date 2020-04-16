import React from 'react';
import { useCookies } from 'react-cookie';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Navigation = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleLogout = () => {
        removeCookie("userToken");
        removeCookie("user");
    }

    const renderButton = () => {
        if (cookies.userToken) {
            return (
                <Nav.Item>
                    <Button onClick={handleLogout} variant="outline-danger">Se déconnecter</Button>
                </Nav.Item>
            )
        } else {
            return (
                <Nav.Item >
                    <Button as={NavLink} to="/signin" variant="outline-success">Se connecter</Button>
                </Nav.Item>
            )
        }
    }

    const renderCreateArticleLink = () => {
        if (cookies.userToken) {
            return (
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/articles/create">
                        Créer un article
                </Nav.Link>
                </Nav.Item>
            )
        }
    }
    return (
        <Nav className="justify-content-end" variant="pills">
            <Nav.Item>
                <Nav.Link as={NavLink} exact={true} to="/">
                    Accueil
                </Nav.Link>
            </Nav.Item>
            {renderCreateArticleLink()}
            <Nav.Item>
                <Nav.Link as={NavLink} to="/articles/delete">
                    Supprimer un article
                </Nav.Link>
            </Nav.Item>
            {renderButton()}
        </Nav>
    );
}

export default Navigation;
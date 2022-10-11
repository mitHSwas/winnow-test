import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>Winnow Test</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Item>
                            <Link to='/'>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/statistics'>Statistics</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/blogs'>Blogs</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/about'>About us</Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to='/home'>Winnow Test</Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Item >
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/home'>Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/statistics'>Statistics</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/blogs'>Blogs</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to='/about'>About us</NavLink>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
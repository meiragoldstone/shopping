import { Outlet } from "react-router-dom"
import "./layout.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export function Layout() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">My Shopping Lists</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/createList">Create</Nav.Link>
                        <Nav.Link href="/getList">Get List</Nav.Link>
                    </Nav>
                        
                </Container>
            </Navbar>
            <Outlet> </Outlet>
        </>
    )
}
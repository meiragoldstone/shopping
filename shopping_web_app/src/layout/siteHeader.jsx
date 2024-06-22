import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export function SiteHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Shopping Lists</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/createList">Create List</Nav.Link>
            <Nav.Link href="/getList">Retrieve List</Nav.Link>
          </Nav>
          
      </Container>
    </Navbar>
  );
}
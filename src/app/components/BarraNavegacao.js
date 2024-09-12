'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/filmes">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* dropdown */}
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/filmes">Filmes Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/top">Melhores Avaliados</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/cartaz">Em Cartaz</NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/lancamento">Lançamentos</NavDropdown.Item>
                        </NavDropdown>

                        {/* link */}
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

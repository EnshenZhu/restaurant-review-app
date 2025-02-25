import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantList from './components/RestaurantList';
import MenuList from './components/MenuList';
import GoogleMap from './components/GoogleMap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Restaurant Review</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/map">Map</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<RestaurantList />} />
                    <Route path="/menu" element={<MenuList />} />
                    <Route path="/map" element={<GoogleMap location={{ lat: 43.6532, lng: -79.3832 }} />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
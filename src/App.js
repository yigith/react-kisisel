import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Anasayfa from './sayfalar/Anasayfa';
import Hakkinda from './sayfalar/Hakkinda';
import Iletisim from './sayfalar/Iletisim';

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Kişisel Websitem</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
              <Nav.Link as={Link} to="/hakkinda">Hakkında</Nav.Link>
              <Nav.Link as={Link} to="/iletisim">İletişim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="pt-3">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkinda" element={<Hakkinda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

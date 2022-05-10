// rsc

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

//하나의 컴포넌트를 생성(재사용)
//styled-componets = js파일과 css파일이 합쳐져서 관리가 편하다
// 태그처럼 사용
const StyledHeaderDiv = styledComponents.div`
  border: 1px soild black;
  height: 300px;
  background-color:${(props) => props.backgroundColor}
`;

//styledcomponents에 Link 객체가 없어서 상속해서 사용해야한다.
const StyledHeadLink = styledComponents(Link)`
  color:red;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderDiv backgroundColor="blue">
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                홈
              </Link>
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

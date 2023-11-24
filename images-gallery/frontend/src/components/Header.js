import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navBarStyle = {
  backgroundColor: 'lightgrey',
};
const Header = ({ title }) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '100rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;

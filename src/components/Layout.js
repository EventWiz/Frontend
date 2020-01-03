import React from 'react';
import Header from '../components/Header';
import { Container } from '../styles/Container';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;

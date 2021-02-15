import React from 'react';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import { Container } from './styles';

const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <Grid />
      <Footer />
    </Container>
  )
}

export default HomeScreen;
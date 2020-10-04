import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Titulo, SubTitulo, Botao } from './styles';

const Login: React.FC = () => {

  return (
      <Container>
          <Titulo>Be The Hero</Titulo>
          <SubTitulo>Um novo jeito de ser Herói!</SubTitulo>

          <Botao>
            <AntDesign name="home" size={24} color="black" />
          </Botao>
      </Container>
  );
}

export default Login;

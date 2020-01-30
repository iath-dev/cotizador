import React from 'react';
import Header from './components/header';
import styled from '@emotion/styled';
import Form from './components/form';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title="Cotizador" />
      <FormContainer>
        <Form />
      </FormContainer>
    </Container>
    );
}

export default App;

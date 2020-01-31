import React from 'react';
import Header from './components/header';
import Form from './components/form';
import Summary from './components/summary';
import { Container, FormContainer } from './styled';
import Result from './components/result';
import Spinner from './components/spinner';

function App() {
  const [summary, setSummary] = React.useState({});
  const [load, setLoad] = React.useState(false);

  const { data, result } = summary;

  return (
    <Container>
      <Header title="Cotizador" />
      <FormContainer>
        <Form setSummary={setSummary} setLoad={setLoad} />
        { load ? <Spinner /> : null }
        <Summary data={data} />
        <Result result={result} />
      </FormContainer>
    </Container>
    );
}

export default App;

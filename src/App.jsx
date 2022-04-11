import './App.css';
import { useState, useRef } from 'react';
import { Pesquisa } from './Containers/Pesquisa';
import Erro from './Containers/Erro';
import Carregando from './Containers/Carregando';
import Resultados from './Containers/Resultados';

function App() {
  const [nomeTela, setNomeTela] = useState('PESQUISA');
  const [resultado, setResultado] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const ticket = useRef(1);

  function goTo(nomeTela) {
    setNomeTela(nomeTela);
  }
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {nomeTela === 'PESQUISA' ? (
            <Pesquisa
              goTo={goTo}
              setResultado={setResultado}
              setErrorMessage={setErrorMessage}
              ticket={ticket}
            />
          ) : null}
          {nomeTela === 'RESULTADOS' ? (
            <Resultados result={resultado} goTo={goTo} />
          ) : null}
          {nomeTela === 'ERRO' ? (
            <Erro errorMessage={errorMessage} goTo={goTo} />
          ) : null}
          {nomeTela === 'CARREGANDO' ? (
            <Carregando goTo={goTo} ticket={ticket} />
          ) : null}
        </header>
      </div>
    </div>
  );
}

export default App;

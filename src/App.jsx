import './App.css';
import { useState } from 'react';
import { Pesquisa } from './Containers/Pesquisa';
import Erro from './Containers/Erro';
import Carregando from './Containers/Carregando';
import Resultados from './Containers/Resultados';

function App() {
  const [nomeTela, setNomeTela] = useState('PESQUISA');

  function goTo(nomeTela) {
    console.log(`Indo para tela ${nomeTela}`);
    setNomeTela(nomeTela);
  }
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {nomeTela == 'PESQUISA' ? <Pesquisa goTo={goTo} /> : null}
          {nomeTela == 'RESULTADOS' ? (
            <Resultados
              result={{
                RUA: 'Expedicionário Pedro João Silva',
                CIDADE: 'Timbó',
                ESTADO: 'SC'
              }}
              goTo={goTo}
            />
          ) : null}
          {nomeTela == 'ERRO' ? (
            <Erro errorMessage="Erro ao procurar CEP" goTo={goTo} />
          ) : null}
          {nomeTela == 'CARREGANDO' ? <Carregando goTo={goTo} /> : null}
        </header>
      </div>
    </div>
  );
}

export default App;

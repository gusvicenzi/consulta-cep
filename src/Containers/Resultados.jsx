import CEPDados from '../Components/CEPDados';

export default function Resultados(props) {
  const goTo = props.goTo;
  const result = props.result;

  return (
    <>
      <p>
        Resultados para o CEP{' '}
        {result.CEP.substring(0, 5) +
          '-' +
          result.CEP.substring(5, result.CEP.length)}
      </p>
      <CEPDados cepDados={result} />
      <button onClick={() => goTo('PESQUISA')}>Nova consulta</button>
    </>
  );
}

export default function Carregando(props) {
  const goTo = props.goTo;
  return (
    <>
      <p>Carregando resultados...</p>
      <input />
      <button onClick={() => goTo('PESQUISA')}>CANCELAR</button>
    </>
  );
}

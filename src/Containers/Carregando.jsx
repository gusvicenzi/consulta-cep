export default function Carregando(props) {
  const goTo = props.goTo;
  const ticket = props.ticket;

  function handleCancel() {
    ticket.current++;
    goTo('PESQUISA');
  }
  return (
    <>
      <p>Carregando resultados...</p>
      <input />
      <button onClick={handleCancel}>Cancelar</button>
    </>
  );
}

export default function CEPDados(props) {
  const cepDados = props.cepDados;
  const keys = Object.keys(cepDados);
  const elements = keys.map(key => (
    <span key={key}>
      <b>{key}: </b>
      {cepDados[key]}
    </span>
  ));
  return <>{elements.slice(1, elements.length)}</>;
}

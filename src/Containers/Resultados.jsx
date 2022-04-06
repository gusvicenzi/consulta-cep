export default function Resultados(props) {
  const goTo = props.goTo;
  const result = props.result;
  const keys = Object.keys(result);
  const elements = keys.map(key => (
    <span key={key}><b>{key}: </b>{result[key]}</span>
  ))
  return (
    <>
          <p>Resultados para o CEP 89120-000</p>
          {elements}
          <button onClick={()=>goTo("PESQUISA")}>NOVA CONSULTA</button>
    </>
  );
}

/*
<span><b>RUA:</b> {props.Rua}</span>
<span><b>CIDADE:</b> {props.Cidade}</span>
*/
import { useState } from "react";

function numbersOnly(str) {
  let final = str.replace(/[^\d]/g, '');    // substitui carac não numericos por nada
  if (final.length > 5){
    final = final.substring(0,5) + "-" + final.substring(5, final.length);
  }
  return final;
}

export function Pesquisa(props) {
  const goTo = props.goTo;
  const [cepNumber, setCepNumber] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    setCepNumber(numbersOnly(value));
  }
  function clear(){
    setCepNumber("");
  }
  return (
    <>
      <p>Qual CEP você quer pesquisar?</p>
      <p>Estado atual: {cepNumber}</p>
      <input onChange={handleChange} value={numbersOnly(cepNumber)}/>
      <button onClick={clear}>Limpar State</button>
      <button onClick={() => goTo('RESULTADOS')}>Consultar</button>
    </>
  );
}

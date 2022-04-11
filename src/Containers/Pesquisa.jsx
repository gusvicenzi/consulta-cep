import { useState, useEffect } from "react";
import consultarCep from "cep-promise";
import CEPDados from "../Components/CEPDados"

function numbersOnly(str) {
  let final = str.replace(/[^\d]/g, '');    // substitui carac não numericos por nada
  if (final.length > 5){
    final = final.substring(0,5) + "-" + final.substring(5, final.length);
  }
  return final;
}

function translate(cepDados) {
  return {
    "CEP": cepDados.cep,
    "ESTADO": cepDados.state,
    "CIDADE": cepDados.city,
    "BAIRRO": cepDados.neighborhood,
    "LOGRADOURO": cepDados.street
  }
}

export function Pesquisa(props) {
  const goTo = props.goTo;
  const ticket = props.ticket;
  const setResultado = props.setResultado;
  const setErrorMessage = props.setErrorMessage;
  const [cepNumber, setCepNumber] = useState("");
  const [cepFavorito, setCepFavorito] = useState("");
  const [cepDados, setCepDados] = useState({});

  useEffect(() => {
    const storedCep = localStorage.getItem("cepFavorito") || "";
    setCepFavorito(storedCep);
  }, []);

  useEffect(() => {
    if (!cepFavorito) {
      return;
    }
    localStorage.setItem("cepFavorito", cepFavorito);
    consultarCep(cepFavorito)
      .then(resultado => setCepDados(resultado))
      .catch(err => setCepDados({"ERRO": err.message}))
  }, [cepFavorito]);

  function handleChange(evt) {
    const value = evt.target.value;
    setCepNumber(numbersOnly(value));
  }

  function handleError(err) {
    setErrorMessage(err.message);
    goTo("ERRO");
  }
  async function handleSearch() {
    ticket.current++;
    const currentTicket= ticket.current;
    goTo("CARREGANDO")
    const dadosCep = await consultarCep(cepNumber.replace(/[^\d]/g, '')).catch(err => currentTicket === ticket.current && handleError(err));
    if (currentTicket === ticket.current) {
      const resultado = translate(dadosCep);
      setResultado(resultado);
      goTo("RESULTADOS");
    }
  }
  function handleFavorite() {
    setCepFavorito(cepNumber);
  }

  return (
    <>
      <p>Qual CEP você quer pesquisar?</p>
      <input onChange={handleChange} value={numbersOnly(cepNumber)}/>
      <button onClick={() => handleSearch()}>Consultar</button>
      <button onClick={() => handleFavorite()}>Favoritar</button>
      <br/>
      <p>Favorito: {cepFavorito}</p>
      <CEPDados cepDados={translate(cepDados)} />
    </>
  );
}

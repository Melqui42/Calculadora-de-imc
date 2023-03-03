import React from "react";

import "./Style.scss";

export default function Home() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  function CalculoIMC() {
    let Altura = altura / 100;
    let IMC = Math.floor(peso / Altura ** 2);

    if (peso === "" || altura === "") {
      window.alert("Insira os valores!!!");
    } else {
      if (IMC <= 18.5) {
        return setResultado(`Você está magro!!! IMC: ${IMC}`);
      } else if (IMC <= 24.9) {
        return setResultado(`Você está normal!!! IMC: ${IMC}`);
      } else if (IMC <= 29.9) {
        return setResultado(`Você está com sobrepeso!!! IMC: ${IMC}`);
      } else if (IMC <= 39.9) {
        return setResultado(`Você está com obesidde!!! IMC: ${IMC}`);
      } else if (IMC > 39.9) {
        return setResultado(`Você está com obesidde mórbita!!! IMC: ${IMC}`);
      }
    }
  }

  return (
    <div className="App">
      <div className="Container">
        <h1>
          Calculadora de IMC (<span>React JS</span>)
        </h1>
        <div className="Content">
          <div className="Title">
            <label htmlFor="" className="InputValue">
              Peso:
              <input
                type="number"
                name=""
                id=""
                placeholder="Insira um valor..."
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </label>
            <label htmlFor="" className="InputValue">
              Altura:
              <input
                type="number"
                name=""
                id=""
                placeholder="Insira um valor..."
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </label>
          </div>

          <button onClick={CalculoIMC}>Clique</button>

          <p>{resultado}</p>
        </div>
      </div>
    </div>
  );
}

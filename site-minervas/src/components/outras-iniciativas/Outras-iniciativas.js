import React from "react";
import BotoesIniciativas from "./Grid-botoes";
import "./Outras-iniciativas.scss";

function OutrasIniciativas() {
  return (
    <>
      <div className="titulo-outras-iniciativas">Outras iniciativas</div>
      <div className="sessao-outras-iniciativas">
        <BotoesIniciativas />
      </div>
    </>
  );
}

export default OutrasIniciativas;

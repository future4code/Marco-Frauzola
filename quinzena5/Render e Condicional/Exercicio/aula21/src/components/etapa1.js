import React from "react";

class Etapa1 extends React.Component {
    render{
    return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1 - Qual seu nome?</p>
                    <input></input>
                <p>2 - Qual sua idade?</p>
                    <input></input>
                <p>3 - Qual seu email?</p>
                    <input></input>
                <p>4 - Qual sua escolaridade?</p>
                    <select>
                        <option>Ensino Medio Incompleto</option>
                        <option>Ensino Medio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>            
        </div>
    )
  }
}
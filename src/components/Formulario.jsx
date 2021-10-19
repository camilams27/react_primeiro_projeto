import React from 'react';
import './Formulario.css'

function Formulario() {
  function login(){ alert("Boas-vindas!!"); }
  function esqueceuSenha(){ alert("Você esqueceu a senha!");}

  return (
      <div className="principal">
          <form className="formulario">
              <div className="nome">
                <input type="text" name="nome" placeholder="Nome" />
              </div>
              <div className="senha">
                <input type="password" name="senha" placeholder="Senha" />
              </div>
                <button className="botao" onClick={()=>login()}> LOGIN </button>
                <p className="esqueceu">
                    Esqueceu a senha? <a href="#" onClick={()=>esqueceuSenha()}>Clique aqui</a>
                </p>
          </form>
      </div>
  );
}

export default Formulario;
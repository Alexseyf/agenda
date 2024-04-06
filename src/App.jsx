import { useState } from "react";
import "./App.css";

function App() {
  const agenda = () => {
    alert("Acessa o diário dos alunos");
  };

  const mensagem = () => {
    alert("Acessa as mensagens");
  };

  const calendario = () => {
    alert("Carrega o Calendário");
  };

  const atividades = () => {
    alert("Acessa as atividades desenvolvidas em sala de aula");
  }

  const info = () => {
    alert("Acessa as informações sobre a escola");
  }

  return (
    <>
      <main>
        <div className="btn">
          <div className="btn12">
            <div className="btn12__btn1" onClick={mensagem}>
              <span class="material-symbols-outlined">chat</span>
            </div>
            <div className="btn12__btn2" onClick={calendario}>
              <span class="material-symbols-outlined">calendar_month</span>
            </div>
          </div>
          <div className="btn__btn5" onClick={agenda}>
            <span class="material-symbols-outlined">library_books</span>
          </div>
          <div className="btn34">
            <div className="btn34__btn3" onClick={atividades}>
              <span class="material-symbols-outlined">school</span>
            </div>
            <div className="btn34__btn4" onClick={info}>
              <span class="material-symbols-outlined">help_center</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

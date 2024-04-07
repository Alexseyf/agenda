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
              <img src="basic_message_multiple.svg" alt="" />
            </div>
            <div className="btn12__btn2" onClick={calendario}>
              <img src="basic_calendar.svg" alt="" />
            </div>
          </div>
          <div className="btn__btn5" onClick={agenda}>
            <img src="basic_notebook.svg" alt="" />
          </div>
          <div className="btn34">
            <div className="btn34__btn3" onClick={atividades}>
              <img src="basic_pencil_ruler_pen .svg" alt="" />
            </div>
            <div className="btn34__btn4" onClick={info}>
              <img src="basic_info.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

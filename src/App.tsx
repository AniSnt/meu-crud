import { useState } from "react";

function App() {
  // Aqui guardamos a lista de tarefas
  const [tarefas, setTarefas] = useState<string[]>([]);

  // Aqui guardamos o texto que a pessoa digitou
  const [novaTarefa, setNovaTarefa] = useState("");

  // CREATE = Criar / Adicionar
  function adicionarTarefa() {
    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa primeiro");
      return;
    }

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }

  // READ = Ler / Visualizar
  // A visualização acontece no map ali embaixo

  // DELETE = Excluir
  function excluirTarefa(posicao: number) {
    const novaLista = tarefas.filter((_, index) => index !== posicao);
    setTarefas(novaLista);
  }

  // UPDATE = Atualizar / Editar
  function editarTarefa(posicao: number) {
   console.log("Editar tarefa", posicao);
    const novoTexto = "Josy" //("Digite o novo nome da tarefa:");

    if (!novoTexto || novoTexto.trim() === "") {
      console.log("Texto vazio, não foi possível editar a tarefa");
      return;
    }

    const listaAtualizada = tarefas.map((tarefa, index) => {
      if (index === posicao) {
        return novoTexto;
      }

      return tarefa;
    });

    setTarefas(listaAtualizada);
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Minha ToDo List</h1>

      <p>
        CRUD significa: criar, visualizar, editar e excluir alguma coisa.
        Aqui vamos fazer isso com tarefas.
      </p>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <h2>Minhas tarefas</h2>

      {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}

      {tarefas.map((tarefa, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <span>{tarefa}</span>

          <button onClick={() => editarTarefa(index)}>
            Editar
          </button>

          <button onClick={() => excluirTarefa(index)}>
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
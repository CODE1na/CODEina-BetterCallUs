import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [chamados, setChamados] = useState<Array<{ id: number; prioridade: string; area: string; tempoderesposta: number}>>([]);
  const [prioridade, setPrioridade] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/chamados')
      .then((response) => {
        setChamados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreate = () => {
    axios.post('http://localhost:3001/chamados', { prioridade, area })
      .then(() => {
        setPrioridade('');
        setArea('');
        updateChamados();
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3001/chamados/${id}`)
      .then(() => {
        updateChamados();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateChamados = () => {
    axios.get('http://localhost:3001/chamados')
      .then((response) => {
        setChamados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>SLA</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tempo de Resposta</th>
            <th>Prioridade</th>
            <th>Área</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>Horas: {chamado.tempoderesposta}</td>
              <td>{chamado.prioridade}</td>
              <td>{chamado.area}</td>
              <td>
                <button onClick={() => handleDelete(chamado.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Adicionar</h2>
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
      >
        <option value="">Prioridade</option>
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </select>
      
      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="">Área</option>
        <option value="Problema de Conexão">Problema de Conexão</option>
        <option value="Falha de Software">Falha de Software</option>
        <option value="Problema de Segurança">Problema de Segurança</option>
        <option value="Vírus e Malware">Vírus e Malware</option>
        <option value="Falha de Hardware">Falha de Hardware</option>
        <option value="Dúvidas de Programação">Dúvidas de Programação</option>
        <option value="Problemas de Impressão">Problemas de Impressão</option>
        <option value="Outro">Outro</option>
      </select>
      <button onClick={handleCreate} disabled={area === "" || prioridade === ""}>Adicionar</button>
    </div>
  );
}

export default App;
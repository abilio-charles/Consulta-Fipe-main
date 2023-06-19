import React from 'react';
import './App.css';
import VeiculosComponent from './components/VeiculosComponent';

function App() {
  return (
    <div className="App">
      <h1>Consulta FIPE</h1>
      <VeiculosComponent tipoVeiculo="caminhoes" />
      <VeiculosComponent tipoVeiculo="carros" />
      <VeiculosComponent tipoVeiculo="motos" />
    </div>
  );
}

export default App;

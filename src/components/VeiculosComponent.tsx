// components/VeiculosComponent.tsx
import React from 'react';

interface VeiculosComponentProps {
  tipoVeiculo: string;
}

function VeiculosComponent(props: VeiculosComponentProps) {
  const { tipoVeiculo } = props;

  // Resto da lógica do componente

  return (
    <div>
      {/* Conteúdo do componente */}
    </div>
  );
}

export default VeiculosComponent;

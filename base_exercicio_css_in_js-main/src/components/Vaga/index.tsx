import React from 'react';
import styled from 'styled-components';
import styled from './Vaga.Vaga.module.css';


const StyledVaga = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`;


const StyledVagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;


const StyledDetalhesVaga = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledDetalheItem = styled.li`
  /* Adicione suas regras de estilo aqui, se necessário */
`;


const StyledVagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`;

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <StyledVaga>
    <StyledVagaTitulo>{props.titulo}</StyledVagaTitulo>
    <StyledDetalhesVaga>
      <StyledDetalheItem>Localizacao: {props.localizacao}</StyledDetalheItem>
      <StyledDetalheItem>Senioridade: {props.nivel}</StyledDetalheItem>
      <StyledDetalheItem>Tipo de contratacao: {props.modalidade}</StyledDetalheItem>
      <StyledDetalheItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </StyledDetalheItem>
      <StyledDetalheItem>Requisitos: {props.requisitos.join(', ')}</StyledDetalheItem>
    </StyledDetalhesVaga>
    <StyledVagaLink href="#">Ver detalhes e candidatar-se</StyledVagaLink>
  </StyledVaga>
);

export default Vaga;

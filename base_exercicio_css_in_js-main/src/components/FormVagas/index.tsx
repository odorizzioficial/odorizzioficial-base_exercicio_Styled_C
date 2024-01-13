import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
// import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const StyledForm = styled.form`
  /* Adicione suas regras de estilo aqui */
  margin: 20px;
  padding: 20px;
  background-color: #fff;
`;


const StyledInput = styled.input`
  /* Adicione suas regras de estilo aqui */
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;


const StyledButton = styled.button`
  /* Adicione suas regras de estilo aqui */
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`;

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <StyledForm className={styles.form} onSubmit={aoEnviarForm}>
      <StyledInput
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <StyledButton className={styles.btnPesquisar} type="submit">
        Pesquisar
      </StyledButton>
    </StyledForm>
  );
};

export default FormVagas;

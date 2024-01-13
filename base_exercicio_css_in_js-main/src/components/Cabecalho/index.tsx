import React from 'react';
import styled from 'styled-components';
// import styles from './Cabecalho.module.css';


export const StyledHeader = styled.header`
background-color: var(--cor-secundaria);
color: var(--cor-principal);
text-align: center;
padding: 24px 0;
`;

const Cabecalho = () => (
  <StyledHeader className={styles.cabecalho}>
    <h1>EBAC Jobs</h1>
  </StyledHeader>
);

export default Cabecalho;

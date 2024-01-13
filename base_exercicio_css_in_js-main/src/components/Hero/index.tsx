import React from 'react';
import styled from 'styled-components';
// import styles from './Hero.module.css';

const StyledHeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  position: relative;
  color: #eee;
`;

const StyledHeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
`;

StyledHeroForm.defaultProps = { className: styles.form };
StyledContainer.defaultProps = { className: 'container' };
StyledHeroTitle.defaultProps = { className: styles.heroTitle };

const Hero = () => (
  <StyledHeroForm>
    <StyledContainer>
      <StyledHeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </StyledHeroTitle>
    </StyledContainer>
  </StyledHeroForm>
);

export default Hero;

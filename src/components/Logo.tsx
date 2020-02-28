import React from 'react';
import styled from 'styled-components';
import logoSrc from '../images/logo.png';

interface SizeProp {
  size: 'lg' | 'md' | 'sm';
}
const Logo: React.FC<SizeProp> = ({ size }) => (
  <LogoContainer size={size}>
    <LogoImage src={logoSrc} alt="logo" size={size} />
  </LogoContainer>
);

export default Logo;

export const LogoContainer = styled.div<SizeProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 auto;

  border-radius: 60% 15%;
  box-sizing: content-box;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          height: 80px;
          width: 80px;
          padding: 0 0.15rem;
          `;
      case 'md':
        return `
        height: 160px;
        width: 160px; 
        padding: 0.3rem 0.4rem;
        `;
      default:
        return `
          height: 200px;
          width: 200px; 
          padding: 0.4rem 0.5rem;
          `;
    }
  }}
`;

export const LogoImage = styled.img<SizeProp>`
  margin: 0;
  padding: 0;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `height: 60px;`;
      case 'md':
        return `height: 120px;`;
      default:
        return `height: 160px;`;
    }
  }}
`;

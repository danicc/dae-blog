import React from 'react';
import { WindowLocation } from 'reach__router';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../config/Theme';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import SectionTitle from './SectionTitle';
import backgroundImage from '../images/bg.jpg';

interface Props {
  children: React.ReactNode;
  location: WindowLocation;
  title: string;
  banner?: string;
}

const Layout: React.FC<Props> = ({ children, location, title, banner = backgroundImage }) => {
  const url = location.pathname;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header currentUrl={url} banner={banner}>
          <SectionTitle uppercase={true}>{title}</SectionTitle>
        </Header>
        <Content>{children}</Content>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div``;

const Content = styled.div`
  position: relative;
  z-index: 999;
`;

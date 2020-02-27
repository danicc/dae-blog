import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { WindowLocation } from 'reach__router';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../config/Theme';
import Header from './Header';
import GlobalStyle from './GlobalStyle';

interface Props {
  children: React.ReactNode;
  location: WindowLocation;
}
const Layout: React.FC<Props> = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          languages {
            langs
            defaultLang
          }
        }
      }
    }
  `);
  const url = location.pathname;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header currentUrl={url} />
        <Link to={`/`}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div`
  background: lightblue;
`;

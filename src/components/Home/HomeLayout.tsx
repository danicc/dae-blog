import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../config/Theme';
import GlobalStyle from '../GlobalStyle';
import Wrapper from '../Wrapper';

interface Props {
  children: React.ReactNode;
}
const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper fullWidth={true}>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default HomeLayout;

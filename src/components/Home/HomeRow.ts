import styled from 'styled-components';
import { media } from '../../utils/media';

import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import bacgkround from '../../images/bg.jpg';

interface Props {
  background?: boolean;
}

const HomeRow = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ background, theme }) =>
    background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, theme.colors.primary), 0.7)}, 
      ${rgba(lighten(0.1, theme.colors.grey.dark), 0.9)}), url(${bacgkround}) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${({ background, theme }) => (background ? theme.colors.white : null)};
  h1 {
    color: ${({ background, theme }) => (background ? theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

export default HomeRow;

import styled from 'styled-components';
import { media } from '../utils/media';

interface Props {
  fullWidth: boolean;
}

const WrapperContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '100rem')};
  padding: ${({ fullWidth }) => (fullWidth ? '0' : '0 6rem')};
  @media ${media.tablet} {
    padding: ${({ fullWidth }) => (fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.phone} {
    padding: ${({ fullWidth }) => (fullWidth ? '0' : '0 1rem')};
  }
`;

export default WrapperContainer;

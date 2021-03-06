import styled from 'styled-components';
import { media } from '../utils/media';

const SectionTitle: any = styled.div`
  font-size: ${props => props.theme.fontSize.big};
  text-transform: ${(props: any) => (props.uppercase ? 'uppercase' : 'normal')};
  text-align: center;
  color: ${props => props.theme.colors.white};
  position: relative;
  padding: 2rem 0 0;
  margin-bottom: 2rem;
  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${props => props.theme.colors.white};
  }
  @media ${media.phone} {
    padding: 0;
    margin-bottom: 2.2rem;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export default SectionTitle;

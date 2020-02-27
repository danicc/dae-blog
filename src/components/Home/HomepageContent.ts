import styled from 'styled-components';

interface Props {
  center?: boolean;
}

const HomepageContent = styled.div<Props>`
  max-width: 30rem;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export default HomepageContent;

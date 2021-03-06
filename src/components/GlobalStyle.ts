import { createGlobalStyle } from 'styled-components';

import theme from '../config/Theme';
import { media } from '../utils/media';
import robotoRegular from '../fonts/roboto-regular.ttf';

export default createGlobalStyle`
@font-face {
  font-family: "roboto-regular";
  src: url(${robotoRegular});
}
* {
  font-family: roboto-regular
}
::selection {
  color: ${theme.colors.bg};
  background: ${theme.colors.primary};
}
body {
  margin: 0;
  background: ${theme.colors.bg};
  color: ${theme.colors.grey.default};
  @media ${media.phone} {
    font-size: 14px;
  }
}
a {
  color: ${theme.colors.grey.dark};
  text-decoration: none;
  transition: all ${theme.transitions.normal};
}
a:hover {
  color: ${theme.colors.primary};
}
h1, h2, h3, h4 {
  color: ${theme.colors.grey.dark};
}
blockquote {
  font-style: italic;
  position: relative;
}

blockquote:before {
  content: "";
  position: absolute;
  background: ${theme.colors.primary};
  height: 100%;
  width: 6px;
  margin-left: -1.6rem;
}
label {
  margin-bottom: .5rem;
  color: ${theme.colors.grey.dark};
}
input, textarea {
  border-radius: .5rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  padding: .25rem 1rem;
  &:focus {
    outline: none;
  }
}
.textRight {
  text-align:right;
}
`;

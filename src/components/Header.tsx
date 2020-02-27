import React from 'react';
import { Link } from 'gatsby';

import LanguageSelector from './LanguageSelector';

interface Props {
  currentUrl: string;
}

const Header: React.FC<Props> = ({ currentUrl }) => {
  return (
    <nav>
      <Link to="/">
        <img src="" alt="logo" />
        <span>Daniel Esquinazi</span>
      </Link>
      <ul>
        <Link to="/">Blog</Link>
        <Link to="/about">About</Link>
      </ul>
      <LanguageSelector currentUrl={currentUrl} />
    </nav>
  );
};

export default Header;

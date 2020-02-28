import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken, lighten } from 'polished';
import rgba from 'polished/lib/color/rgba';
import { getCurrentLangKey } from 'ptz-i18n';

import backgroundImage from '../images/bg.jpg';
import { media } from '../utils/media';
import config from '../config/SiteConfig';
import { Logo, LanguageSelector } from './';

interface Props {
  currentUrl: string;
  banner?: string;
}

const Header: React.FC<Props> = ({ currentUrl, children, banner = backgroundImage }) => {
  const { langs, defaultLang } = config;
  const langKey = getCurrentLangKey(langs, defaultLang, currentUrl);
  const langUrl = langKey === defaultLang ? '' : '/es';

  function isSelected(path: string): boolean {
    return currentUrl.includes(`${langUrl}/${path}`);
  }
  return (
    <HeaderWrapper banner={banner}>
      <NavContainer>
        <HomeLink to={`${langUrl}/`}>
          <Logo size="sm" />
          <span>Daniel A. Esquinazi</span>
        </HomeLink>
        <Menu>
          <MenuItem to={`${langUrl}/blog`} selected={isSelected('blog')}>
            Blog
          </MenuItem>
          <MenuItem to={`${langUrl}/about`} selected={isSelected('about')}>
            About
          </MenuItem>
        </Menu>
        <LanguageSelector currentUrl={currentUrl} />
      </NavContainer>
      {children}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper: any = styled.header`
  position: relative;
  background: linear-gradient(
      -185deg,
      ${props => rgba(darken(0.1, props.theme.colors.primary), 0.6)},
      ${props => rgba(lighten(0.1, props.theme.colors.grey.dark), 0.8)}
    ),
    url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 0 2rem 5rem;
  text-align: center;

  @media ${media.tablet} {
    padding: 0 2rem 6rem;
  }
  @media ${media.phone} {
    padding: 0 0.5rem 2rem;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 10vh;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  padding: 0.5rem;
  box-sizing: content-box;
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 1rem;
  flex: 1;
`;

const MenuItem = styled(Link)<{ selected: boolean }>`
  padding: 0.5rem;
  border-bottom: ${({ selected, theme }) => (selected ? `2px solid ${theme.colors.primary}` : '')};
`;

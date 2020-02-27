import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { getLangs, getUrlForLang, getCurrentLangKey, LangMenuData } from 'ptz-i18n';

interface Props {
  currentUrl: string;
}
const LanguageSelector: React.FC<Props> = ({ currentUrl }) => {
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

  const { langs, defaultLang } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLang, currentUrl);
  const homeLink = `/${langKey !== 'en' ? langKey : ''}`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, currentUrl)).map((item: LangMenuData) => ({
    ...item,
    link: item.link.replace(`/${defaultLang}/`, '/'),
  }));
  const LangComponents = langsMenu.map(({ selected, langKey: key, link = '' }: LangMenuData) => {
    return (
      <LanguageComponent key={key} to={link} selected={selected}>
        {key}
      </LanguageComponent>
    );
  });

  return <Container>{LangComponents}</Container>;
};

export default LanguageSelector;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  box-sizing: border-box;
`;
const LanguageComponent = styled(Link)<{ selected: boolean }>`
  flex: 1;
  background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
  color: ${({ selected }) => (selected ? 'black' : 'white')};
  padding: 0.5rem;
  border-radius: 5px;
`;

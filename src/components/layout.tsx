import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { getLangs, getUrlForLang, getCurrentLangKey, LangMenuData } from 'ptz-i18n';
import { WindowLocation } from 'reach__router';

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
  const { langs, defaultLang } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLang, url);
  const homeLink = `/${langKey !== 'en' ? langKey : ''}`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item: LangMenuData) => ({
    ...item,
    link: item.link.replace(`/${defaultLang}/`, '/'),
  }));
  const LangComponents = langsMenu.map(({ langKey: key, link = '' }: LangMenuData) => {
    return (
      <Link key={key} to={link}>
        {key}
      </Link>
    );
  });
  return (
    <div>
      <div>{LangComponents}</div>
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      {children}
    </div>
  );
};

export default Layout;

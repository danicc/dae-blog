import React from 'react';
import { graphql } from 'gatsby';
import { WindowLocation } from '@reach/router';

import Data from '../models/Data';
import AllMarkdownRemark from '../models/AllMarkdownRemark';
import { Layout, Wrapper, Content, Article, Pagination, SectionTitle } from '../components';
import { getCurrentLangKey } from 'ptz-i18n';
import config from '../config/SiteConfig';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
  location: WindowLocation;
}

const Blog: React.FC<Props> = props => {
  const { currentPage, totalPages } = props.pageContext;

  const { data, location } = props;
  const { edges, totalCount }: AllMarkdownRemark = data.allMarkdownRemark;
  const { langs, defaultLang } = config;
  const langKey = getCurrentLangKey(langs, defaultLang, location.pathname);
  const langUrl = langKey === defaultLang ? '' : 'es';

  return (
    <Layout location={location} title={`Latest stories (${totalCount})`}>
      <Wrapper>
        <Content>
          {edges.map(({ node }) => (
            <Article
              id={node.frontmatter.id}
              lang={node.frontmatter.lang}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              timeToRead={node.timeToRead}
              category={node.frontmatter.category}
              key={node.id}
            />
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} url={`${langUrl}/blog`} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Blog;

export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!, $lang: String!) {
    allMarkdownRemark(filter: { frontmatter: { lang: { eq: $lang } } }, limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          timeToRead
          excerpt(truncate: false, pruneLength: 250)
          frontmatter {
            id
            lang
            title
            date(formatString: "DD.MM.YYYY")
            category
            lang
          }
        }
      }
    }
  }
`;

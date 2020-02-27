import React from 'react';
import { graphql, Link } from 'gatsby';
import { WindowLocation } from '@reach/router';

import Data from '../models/Data';
import AllMarkdownRemark from '../models/AllMarkdownRemark';
import Layout from '../components/layout';

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
  return (
    <Layout location={location}>
      {`totalCount ${totalCount}`}
      {`currentPage ${currentPage}`}
      {`totalPages ${totalPages}`}
      {edges.map(({ node }) => {
        let slug = `/blog/${node.frontmatter.id}`;
        if (node.frontmatter.lang !== 'en') {
          slug = `/${node.frontmatter.lang}/blog/${node.frontmatter.id}`;
        }
        return (
          <div key={node.id}>
            <Link to={slug}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        );
      })}
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
          frontmatter {
            id
            title
            date(formatString: "DD.MM.YYYY")
            category
            lang
          }
          excerpt
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import Data from '../models/Data';
import AllMarkdownRemark from '../models/AllMarkdownRemark';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

const Blog: React.FC<Props> = props => {
  const { currentPage, totalPages } = props.pageContext;

  const { data } = props;
  const { edges, totalCount }: AllMarkdownRemark = data.allMarkdownRemark;
  return (
    <div>
      {`totalCount ${totalCount}`}
      {`currentPage ${currentPage}`}
      {`totalPages ${totalPages}`}
      {edges.map(({ node }) => (
        <h3>{node.frontmatter.title}</h3>
      ))}
    </div>
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
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          excerpt
        }
      }
    }
  }
`;

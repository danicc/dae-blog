import React from 'react';
import { graphql, Link } from 'gatsby';
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
      {edges.map(({ node }) => {
        let slug = `/blog/${node.frontmatter.id}`;
        if (node.frontmatter.lang !== 'en') {
          slug = `/blog/${node.frontmatter.lang}/${node.frontmatter.id}`;
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

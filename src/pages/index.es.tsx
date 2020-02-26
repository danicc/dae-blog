import React from 'react';
import { graphql, Link } from 'gatsby';

import AllMarkdownRemark from '../models/AllMarkdownRemark';
import Post from '../models/Post';

interface Props {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
}

const IndexPage: React.FC<Props> = props => {
  const posts: { node: Post }[] = props.data.allMarkdownRemark.edges;
  console.log('props.data.allMarkdownRemark');
  return (
    <div>
      <h1> Daniel Esquinzi</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {posts.map(({ node }) => (
        <h3 key={node.id}>{node.frontmatter.title}</h3>
      ))}
    </div>
  );
};

export const getAllPostQuery = graphql`
  query {
    allMarkdownRemark(limit: 10000) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            date
            title
            category
            tags
            banner
          }
        }
      }
    }
  }
`;

export default IndexPage;

import React from 'react';
import { graphql } from 'gatsby';

const Post: React.FC = props => {
  return <div>POST</div>;
};

export default Post;

export const query = graphql`
  query($id: String!, $lang: String!) {
    markdownRemark(frontmatter: { id: { eq: $id }, lang: { eq: $lang } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import { WindowLocation } from '@reach/router';

import Layout from '../components/Layout';
import PostType from '../models/Post';

interface Props {
  location: WindowLocation;
  data: {
    markdownRemark: PostType;
  };
}
const Post: React.FC<Props> = ({ location, data }) => {
  return <Layout location={location}>{data.markdownRemark.frontmatter.title}</Layout>;
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

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { WindowLocation } from '@reach/router';

import { Layout, Wrapper, Content, PrevNext } from '../components';
import PostType from '../models/Post';
import Subline from '../components/Subline';

interface Props {
  location: WindowLocation;
  data: {
    markdownRemark: PostType;
  };
  pageContext: {
    prev: null | PostType;
    next: null | PostType;
  };
}
const Post: React.FC<Props> = ({ location, data, pageContext }) => {
  const post = data.markdownRemark;
  const { prev, next } = pageContext;
  const inDevelopment = process.env.NODE_ENV === 'development';
  return (
    <Layout
      location={location}
      title={post.frontmatter.title}
      banner={inDevelopment ? post.frontmatter.banner : `/dae-blog/${post.frontmatter.banner}`}
    >
      {post ? (
        <Wrapper>
          <Content>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
            {post.frontmatter.tags ? (
              <Subline>
                Tags: &#160;
                {post.frontmatter.tags.map((tag, i) => (
                  // <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                  <p key={i}>
                    <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                  </p>
                  // </Link>
                ))}
              </Subline>
            ) : null}
            <PrevNext prev={prev} next={next} />
          </Content>
        </Wrapper>
      ) : null}
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($id: String!, $lang: String!) {
    markdownRemark(frontmatter: { id: { eq: $id }, lang: { eq: $lang } }) {
      html
      frontmatter {
        title
        banner
        tags
      }
    }
  }
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

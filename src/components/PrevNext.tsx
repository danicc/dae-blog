import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Post from '../models/Post';
import config from '../config/SiteConfig';

interface Props {
  next: null | Post;
  prev: null | Post;
}

const PrevNext: React.FC<Props> = ({ prev, next }) => {
  const langUrl =
    (next && next.frontmatter.lang === config.defaultLang) || (prev && prev.frontmatter.lang === config.defaultLang) ? '' : 'es';
  return (
    <Wrapper>
      {prev && (
        <Prev>
          <span>Previous</span>
          <Link to={`${langUrl}/blog/post/${prev.frontmatter.id}`}>{prev.frontmatter.title}</Link>
        </Prev>
      )}
      {next && (
        <Next>
          <span>Next</span>
          <Link to={`${langUrl}/blog/post/${next.frontmatter.id}`}>{next.frontmatter.title}</Link>
        </Next>
      )}
    </Wrapper>
  );
};

export default PrevNext;

const Wrapper = styled.div`
  display: flex;
  margin: 6rem auto 0 auto;
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-items: center;
`;

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

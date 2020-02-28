import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Subline from './Subline';

interface Props {
  id: string;
  lang: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  timeToRead: number;
}

const Article: React.FC<Props> = ({ id, lang, title, date, excerpt, timeToRead, category }) => {
  const firstChar = title.charAt(0);
  const blogPostLink = lang === 'en' ? `/blog/post/${id}` : `${lang}/blog/post/${id}`;
  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={blogPostLink}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In
        <span> {category}</span>
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

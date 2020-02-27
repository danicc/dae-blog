import React from 'react';
import { Link, graphql } from 'gatsby';
import { WindowLocation } from '@reach/router';

import { HomeLayout, Homepage, HomeRow, HomepageContent, LogoContainer, Logo, LanguageContainer } from '../components/Home';
import { Article, Button, LanguageSelector } from '../components/';
import logo from '../images/logo.png';

import Data from '../models/Data';

interface Props {
  data: Data;
  location: WindowLocation;
}

const IndexPage: React.FC<Props> = ({ location, data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  const url = location.pathname;
  return (
    <HomeLayout>
      <Homepage>
        <LanguageContainer>
          <LanguageSelector currentUrl={url} />
        </LanguageContainer>
        <HomeRow background={true}>
          <HomepageContent center={true}>
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
            <h1>
              Hi. I am <br />
              Daniel Alberto Esquinazi
            </h1>
            <p>I write about Javascript, React and other frontend technologies</p>
            <Link to="/contact">
              <Button big={true}>
                <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                </svg>
                Contact
              </Button>
            </Link>
            <Link to="/blog">
              <Button big>
                <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                </svg>
                Blog
              </Button>
            </Link>
          </HomepageContent>
        </HomeRow>
        <HomeRow>
          <HomepageContent>
            <h2>About Me</h2>
            <p>
              I am from Argentina, Salta. I consider myself as an enthusiast software developer who loves learning new technologies and
              share what I learnt with my friends.
            </p>
            <hr />
            <h2>Latest Blog</h2>
            {edges.map(post => (
              <Article
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.excerpt}
                category={post.node.frontmatter.category}
                key={post.node.id}
              />
            ))}
            <p className={'textRight'}>
              <Link to={'/blog'}>All articles ({totalCount})</Link>
            </p>
          </HomepageContent>
        </HomeRow>
      </Homepage>
    </HomeLayout>
  );
};

export default IndexPage;

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { lang: { eq: "en" } } }, sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
`;

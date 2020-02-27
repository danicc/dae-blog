import React from 'react';
import { Link } from 'gatsby';
import { WindowLocation } from '@reach/router';

import Layout from '../components/layout';

interface Props {
  location: WindowLocation;
}
const IndexPage: React.FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1> Daniel Esquinzi</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/blog/">Blog</Link>
    </Layout>
  );
};

export default IndexPage;

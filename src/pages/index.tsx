import React from 'react';
import { Link } from 'gatsby';

const IndexPage: React.FC = () => {
  return (
    <div>
      <h1> Daniel Esquinzi</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/blog/">Blog</Link>
    </div>
  );
};

export default IndexPage;

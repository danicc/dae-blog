import React from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';

const IndexPage: React.FC = () => {
  const intl = useIntl();
  return (
    <div>
      <h1>{intl.formatMessage({ id: 'author' })}: Daniel Esquinzi</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  );
};

export default IndexPage;

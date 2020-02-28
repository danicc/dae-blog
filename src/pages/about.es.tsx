import React from 'react';

import { Layout } from '../components';
import { WindowLocation } from '@reach/router';

interface Props {
  location: WindowLocation;
}

const About: React.FC<Props> = ({ location }) => (
  <Layout location={location} title={`Quien soy`}>
    <h1>Quien soy</h1>
  </Layout>
);

export default About;

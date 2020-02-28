import React from 'react';

import { Layout } from '../components';
import { WindowLocation } from '@reach/router';

interface Props {
  location: WindowLocation;
}

const About: React.FC<Props> = ({ location }) => (
  <Layout location={location} title={`About me`}>
    <h1>About me</h1>
  </Layout>
);

export default About;

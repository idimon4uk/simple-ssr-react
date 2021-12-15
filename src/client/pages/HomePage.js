import React from 'react';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome HERE</h3>
      <p>Check out these awesome features</p>
      <Helmet>
        <title>Welcome To My Company</title>
        <meta name="description" content="Test description"></meta>
        <meta itemprop="description" content="Test description"></meta>
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/250px-Flag_of_Bosnia_and_Herzegovina.svg.png"></meta>
        <link rel="canonical" href="https://malikgabroun.com" />
      </Helmet>
    </div>

  );
};

export default {
  component: Home
};

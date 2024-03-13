import React from 'react';
import { RedocStandalone } from 'redoc';
import Layout from '@theme/Layout';

function ApiReference() {
  return (
    <Layout 
      title="API Reference"
      description='API Reference for the Game Score API.'
    >
      <RedocStandalone
        specUrl="/example-developer-doc-site/game-score-api.yaml"
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: '#dd5522' } } },
        }}
      />
    </Layout>
  );
}

export default ApiReference;

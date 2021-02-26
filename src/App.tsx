import React from 'react';
// import styled from 'styled-components';
import { cellsType } from './types';
import Layout from './UI/Layout';
import Field from './UI/Field';

const App: React.FC = () => {
  const cells: Array<cellsType> = [{
    x: 0,
    y: 0,
    value: 2,
    id: 0,
  }];
  return (
    <Layout>
      <Field cells={cells} />
    </Layout>
  );
};

export default App;

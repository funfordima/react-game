import React from 'react';
// import styled from 'styled-components';
import { cellsType } from './types';
import Layout from './UI/Layout';
import Field from './UI/Field';
import Score from './UI/Score';
import Button from './UI/Button';
import ControlPanel from './UI/ControlPanel';

const App: React.FC = () => {
  const cells: Array<cellsType> = [{
    x: 0,
    y: 0,
    value: 2,
    id: 0,
  }];

  return (
    <Layout>
      <ControlPanel>
        <Button>
          New Game
        </Button>
        <Score />
      </ControlPanel>
      <Field cells={cells} />
    </Layout>
  );
};

export default App;

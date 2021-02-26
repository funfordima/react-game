import React, { useState } from 'react';
// import styled from 'styled-components';
// import { cellsType } from './types';
import Layout from './UI/Layout';
import Field from './UI/Field';
import Score from './UI/Score';
import Button from './UI/Button';
import ControlPanel from './UI/ControlPanel';
import initCells from './logic';
import './App.css';

const App: React.FC = () => {
  const [cells, setCells] = useState(initCells());

  return (
    <Layout>
      <ControlPanel>
        <Button onClick={() => setCells(initCells())}>
          New Game
        </Button>
        <Score />
      </ControlPanel>
      <Field cells={cells} />
    </Layout>
  );
};

export default App;

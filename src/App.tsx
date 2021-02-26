import React, { useState, useEffect } from 'react';
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
  const [score, setScore] = useState(0);

  const handleClickBtnNewGame = () => {
    setCells(initCells());
    setScore(0);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(event.code);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <Layout>
      <ControlPanel>
        <Button onClick={handleClickBtnNewGame}>
          New Game
        </Button>
        <Score>
          {score}
        </Score>
      </ControlPanel>
      <Field cells={cells} />
    </Layout>
  );
};

export default App;

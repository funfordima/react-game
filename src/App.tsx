import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { cellsType } from './types';
import Layout from './UI/Layout';
import Field from './UI/Field';
import Score from './UI/Score';
import Button from './UI/Button';
import ControlPanel from './UI/ControlPanel';
import { moveCells, directions, initCells, delAndIncreaseCell, addCell } from './logic';
import './App.css';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const App: React.FC = () => {
  const [cells, setCells] = useState(initCells());
  const [score, setScore] = useState(0);

  const handleClickBtnNewGame = () => {
    setCells(initCells());
    setScore(0);
  };

  interface KeyCodeToDirectionType {
    [key: string]: string,
  }

  const useKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
    KeyS: directions.DOWN,
  } as KeyCodeToDirectionType;

  const handleKeyPress = async ({ code }: KeyboardEvent) => {
    if (['KeyA', 'KeyD', 'KeyW', 'KeyS'].includes(code)) {
      setCells((prevState) => ([...moveCells(prevState, useKeyCodeToDirection[code])]));
      await delay(100);
      setCells((prevState) => ([...delAndIncreaseCell(prevState)]));
      setCells((prevState) => ([...addCell(prevState)]));
    }
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

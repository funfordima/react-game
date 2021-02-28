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

const App: React.FC = () => {
  const [cells, setCells] = useState({
    cells: initCells(),
    score: 0,
  });

  const handleClickBtnNewGame = () => {
    setCells({
      cells: initCells(),
      score: 0,
    });
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
      setCells((prevState) => {
        const cellsWithMoving = [...moveCells(prevState.cells, useKeyCodeToDirection[code])];
        // await delay(100);
        const { newCells, score } = delAndIncreaseCell(cellsWithMoving, prevState.score);
        return {
          cells: [...addCell([...newCells])],
          score,
        };
      })
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
          {cells.score}
        </Score>
      </ControlPanel>
      <Field cells={cells.cells} />
    </Layout>
  );
};

export default App;

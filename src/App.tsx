import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { cellsType } from './types';
import Layout from './UI/Layout';
import Field from './UI/Field';
import ScoreContainer from './UI/Score';
import Button from './UI/Button';
import ControlPanel from './UI/ControlPanel';
import { moveCells, directions, initCells, delAndIncreaseCell, addCell } from './logic';
import Heading from './UI/Heading';
import Title from './UI/Title';
import ScoreWrapper from './UI/Score/ScoreWrapper';
import GameIntro from './UI/GameIntro';
import GameExplanation from './UI/GameExplanation';
import './App.css';

interface KeyCodeToDirectionType {
  [key: string]: string,
}

const App: React.FC = () => {
  const getBestScore = (): number => {
    let bestScore = 0;

    if (localStorage.getItem('bestScore')) {
      bestScore = Number(localStorage.getItem('bestScore'));
    }

    return bestScore;
  };
  const [cells, setCells] = useState({
    cells: initCells(),
    score: 0,
  });
  const [bestScore, setBestScore] = useState(getBestScore());

  const handleClickBtnNewGame = () => {
    setCells({
      cells: initCells(),
      score: 0,
    });
  };

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

  useEffect(() => {
    if (cells.score > bestScore) {
      setBestScore(cells.score);
      localStorage.setItem('bestScore', `${cells.score}`);
    }
  }, [cells.score, bestScore]);

  return (
    <Layout>
      <Heading>
        <Title text='2048' />
        <ScoreWrapper>
          <ScoreContainer text='score'>
            {cells.score}
          </ScoreContainer>
          <ScoreContainer text='best'>
            {bestScore}
          </ScoreContainer>
        </ScoreWrapper>
      </Heading>
      <ControlPanel>
        <GameIntro />
        <Button onClick={handleClickBtnNewGame}>
          New Game
        </Button>
      </ControlPanel>
      <Field cells={cells.cells} />
      <GameExplanation />
    </Layout>
  );
};

export default App;

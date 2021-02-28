import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import { cellsType } from './types';
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

interface MainState {
  cells: cellsType[],
  score: number,
}

const App: React.FC = () => {
  const initBestScore = (): number => {
    let bestScore = 0;

    if (localStorage.getItem('bestScore')) {
      bestScore = Number(localStorage.getItem('bestScore'));
    }

    return bestScore;
  };

  const initMainState = (): MainState => {
    if (localStorage.getItem('mainState')) {
      return JSON.parse(String(localStorage.getItem('mainState')));
    }

    return {
      cells: initCells(),
      score: 0,
    }
  };

  const [mainState, setCells] = useState(initMainState());
  const [bestScore, setBestScore] = useState(initBestScore());

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
        const newState = {
          cells: [...addCell([...newCells])],
          score,
        };
        localStorage.setItem('mainState', JSON.stringify(newState));

        return newState;
      })
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  useEffect(() => {
    if (mainState.score > bestScore) {
      setBestScore(mainState.score);
      localStorage.setItem('bestScore', `${mainState.score}`);
    }
  }, [mainState.score, bestScore]);

  return (
    <Layout>
      <Heading>
        <Title text='2048' />
        <ScoreWrapper>
          <ScoreContainer text='score'>
            {mainState.score}
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
      <Field cells={mainState.cells} />
      <GameExplanation />
    </Layout>
  );
};

export default App;

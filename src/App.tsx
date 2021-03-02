import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
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
import ScoreAdditional from './UI/Score/ScoreAdditional';
// import { delay } from './utils';
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
  const [isShowMess, setIsShowMess] = useState(false);

  const handleClickBtnNewGame = () => {
    localStorage.removeItem('mainState');
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
        const { cells, score } = delAndIncreaseCell(cellsWithMoving, prevState.score);
        const newState = {
          cells: [...addCell([...cells])],
          score,
        };
        localStorage.setItem('mainState', JSON.stringify(newState));

        return newState;
      })

      // setCells(state => ({
      //   ...state,
      //   cells: moveCells(state.cells, useKeyCodeToDirection[code]),
      // }));

      // await delay(150);

      // setCells(prevState => {
      //   const newState = delAndIncreaseCell(prevState.cells, prevState.score);
      //   console.log(newState.score);
      //   // localStorage.setItem();

      //   const nState = {
      //     score: newState.score,
      //     cells: addCell(newState.cells),
      //   };

      //   localStorage.setItem('mainState', JSON.stringify(nState));

      //   return nState;
      // });

      // await delay(150);

      // setCells(state => {
      //   console.log(state);
      //   const newState = {
      //     ...state,
      //     cells: addCell(state.cells),
      //   };
      //   localStorage.setItem('mainState', JSON.stringify(newState));
      //   return newState;
      // });
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

  useEffect(() => {
    setIsShowMess(true);
  }, [mainState.score]);

  // useEffect(() => {
  //   setIsShowMess(false);
  // }, [isShow]);

  return (
    <Layout>
      <Heading>
        <Title text='2048' />
        <ScoreWrapper>
          <ScoreContainer text='score'>
            {mainState.score}
            <Transition
              in={isShowMess}
              timeout={200}
              unmountOnExit
              onEntered={() => setIsShowMess(false)}
            >
              {state => <ScoreAdditional className={`alert ${state}`}>{mainState.score}</ScoreAdditional>}
            </Transition>
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

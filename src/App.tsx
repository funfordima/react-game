import React, { useState, useEffect, useRef } from 'react';
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
import ScoreAdd from './UI/Score/ScoreAdditional';
import { delay } from './utils';
import './App.css';

interface KeyCodeToDirectionType {
  [key: string]: string,
}

interface MainState {
  cells: cellsType[],
  gameState: string,
  moveDirection: string,
}

const gameStates = {
  IDLE: 'IDLE',
  PROCESSING: 'PROCESSING',
}

const App: React.FC = () => {
  const initScore = (type: string): number => {
    let score = 0;

    if (localStorage.getItem(type)) {
      score = Number(localStorage.getItem(type));
    }

    return score;
  };

  const initMainState = (): MainState => {
    if (localStorage.getItem('mainState')) {
      return JSON.parse(String(localStorage.getItem('mainState')));
    }

    return {
      cells: initCells(),
      gameState: gameStates.IDLE,
      moveDirection: '',
    }
  };

  const [mainState, setCells] = useState(initMainState());
  const [bestScore, setBestScore] = useState(initScore('bestScore'));
  const [score, setScore] = useState(initScore('mainScore'));
  const [isShowMess, setIsShowMess] = useState(false);
  const nodeRef = useRef(null);

  const handleClickBtnNewGame = () => {
    localStorage.removeItem('mainState');
    setScore(0);
    setCells({
      cells: initCells(),
      gameState: gameStates.IDLE,
      moveDirection: '',
    });
  };

  const useKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
    KeyS: directions.DOWN,
  } as KeyCodeToDirectionType;

  const processGame = async () => {
    setCells(state => ({
      ...state,
      cells: [...moveCells(state.cells, state.moveDirection)],
    }));

    await delay(150);

    setCells(state => {
      const { cells } = delAndIncreaseCell(state.cells, setScore);
      return ({
        ...state,
        cells,
      })
    });

    setCells(state => ({
      ...state,
      cells: [...addCell([...state.cells])],
    }));

    setCells(state => {
      const newState = {
        ...state,
        gameState: gameStates.IDLE,
        moveDirection: '',
      };
      localStorage.setItem('mainState', JSON.stringify(newState));
      localStorage.setItem('mainScore', JSON.stringify(score));

      return newState;
    });
  };

  const handleKeyPress = async ({ code }: KeyboardEvent) => {
    if (['KeyA', 'KeyD', 'KeyW', 'KeyS'].includes(code)) {
      // setCells((prevState) => {
      //   const cellsWithMoving = [...moveCells(prevState.cells, useKeyCodeToDirection[code])];
      //   // await delay(100);
      //   const { cells, score } = delAndIncreaseCell(cellsWithMoving, prevState.score);
      //   const newState = {
      //     cells: [...addCell([...cells])],
      //     score,
      //   };
      //   localStorage.setItem('mainState', JSON.stringify(newState));

      //   return newState;
      // })

      setCells(state => {
        if (state.gameState === gameStates.IDLE) {
          return {
            ...state,
            gameState: gameStates.PROCESSING,
            moveDirection: (useKeyCodeToDirection as KeyCodeToDirectionType)[code],
          }
        }
        return state
      });
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem('bestScore', `${score}`);
    }
  }, [score, bestScore]);

  useEffect(() => {
    setIsShowMess(true);
  }, [score]);

  // useEffect(() => {
  //   setIsShowMess(false);
  // }, [isShow]);

  useEffect(() => {
    if (mainState.gameState === gameStates.PROCESSING) {
      processGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainState.gameState]);

  return (
    <Layout>
      <Heading>
        <Title text='2048' />
        <ScoreWrapper>
          <ScoreContainer text='score'>
            {score}
            <Transition
              nodeRef={nodeRef}
              in={isShowMess}
              timeout={200}
              unmountOnExit
              onEntered={() => setIsShowMess(false)}
            >
              {state => <ScoreAdd ref={nodeRef} className={`alert ${state}`}>{score}</ScoreAdd>}
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

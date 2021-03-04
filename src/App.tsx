import React, { useState, useEffect, useRef, createContext } from 'react';
import useSound from 'use-sound';
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
import OpenMenuBtn, { GameMenu } from './UI/GameMenu';
import History from './UI/History';
import EndGameWidget from './UI/EndGameWidget';
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
  END: 'END',
}

interface MusicContextT {
  handlerToggleVolumeMusic: () => void,
  setMusicVolume: React.Dispatch<React.SetStateAction<number>>,
  setAudioVolume: React.Dispatch<React.SetStateAction<number>>,
  musicVolume: number,
  audioVolume: number,
  handleClickHistory: () => void,
  // setPlaybackRate:  React.Dispatch<React.SetStateAction<number>>,
}

export const MusicContext = createContext({} as MusicContextT);

const App: React.FC = () => {
  const initScore = (type: string, value = 0): number => {
    let score = value;

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
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [musicVolume, setMusicVolume] = useState(initScore('musicVolume', 20) as number);
  const [audioVolume, setAudioVolume] = useState(initScore('audioVolume', 20) as number);
  const [isOpenHistory, setOpenHistory] = useState(false);
  const [isEnd, setEnd] = useState(false);
  // const [playbackRate, setPlaybackRate] = useState(0.75);
  const [musicPlay, setMusicPlay] = useState(false);
  const nodeRef = useRef(null);
  const directionRef = useRef(new Set());
  // const audioHideRef = useRef(new Audio('/hide.mp3'));
  const audioMoveRef = useRef(new Audio('/move.mp3'));
  const soundUrl = '/music.mp3';
  const [play, { stop, sound }] = useSound(
    soundUrl,
    {
      // playbackRate,
      volume: musicVolume / 100,
    },
  );

  audioMoveRef.current.volume = audioVolume / 100;

  const handlerToggleVolumeMusic = (): void => {
    setMusicPlay((isMusic) => !isMusic);

    if (musicPlay) {
      stop();
    } else {
      /* eslint no-underscore-dangle: 0 */
      sound._loop = true;
      play();
    }
  };

  const handleClickHistory = () => {
    setOpenHistory(true);
  };

  const musicController = {
    handlerToggleVolumeMusic,
    setMusicVolume,
    setAudioVolume,
    musicVolume,
    audioVolume,
    handleClickHistory,
    // setPlaybackRate
  };

  const handleClickBtnNewGame = () => {
    localStorage.removeItem('mainState');
    setScore(0);
    setCells({
      cells: initCells(),
      gameState: gameStates.IDLE,
      moveDirection: '',
    });
  };

  const handleClickBtnOpen = (): void => {
    setOpenMenu((state) => !state);
  };

  const handleCloseEndGameWidget = (): void => {
    setEnd(false);
    handleClickBtnNewGame();
  };

  const handleCloseHistoryWidget = (): void => {
    setOpenHistory(false);
  };

  const useKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
    KeyS: directions.DOWN,
  } as KeyCodeToDirectionType;

  const processGame = async () => {
    audioMoveRef.current.play();
    setCells(state => {
      const newCells = [...moveCells(state.cells, state.moveDirection)];

      if (state.cells.length === newCells.length && state.cells.length === 16) {
        directionRef.current.add(state.moveDirection);
        const prevFilterCells = state.cells.map(({ value }) => value);
        const newFilterCells = newCells.map(({ value }) => value);
        let isEqual = false;
        prevFilterCells.forEach((el, i) => {
          if (el === newFilterCells[i]) {
            isEqual = true;
          } else {
            isEqual = false;
          }
        });

        if (isEqual && directionRef.current.size === 4) {
          return ({
            ...state,
            gameState: gameStates.END,
            cells: newCells,
          });
        }
      } else {
        directionRef.current.clear();
      }

      return ({
        ...state,
        cells: newCells,
      })
    });

    await delay(150);

    // audioMoveRef.current.pause();
    // audioMoveRef.current.currentTime = 0;

    setCells(state => {
      const { cells } = delAndIncreaseCell(state.cells, setScore);

      return ({
        ...state,
        cells,
      })
    });

    // audioHideRef.current.pause();
    // audioHideRef.current.currentTime = 0;

    setCells(state => {
      const newCells = [...addCell([...state.cells])];

      return ({
        ...state,
        cells: newCells,
      });
    });

    setCells(state => {
      if (state.gameState !== gameStates.END) {
        const newState = {
          ...state,
          gameState: gameStates.IDLE,
          moveDirection: '',
        };
        localStorage.setItem('mainState', JSON.stringify(newState));
        localStorage.setItem('mainScore', JSON.stringify(score));

        return newState;
      }

      return state;
    });
  };

  const handleKeyPress = async ({ code }: KeyboardEvent) => {
    if (['KeyA', 'KeyD', 'KeyW', 'KeyS'].includes(code)) {
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
    const initHistory = [
      { name: 'Ivan', value: 50 },
      { name: 'Pit', value: 500 },
      { name: 'Sara', value: 200 },
      { name: 'Rex', value: 300 },
      { name: 'RRR', value: 400 },
      { name: 'TTT', value: 600 },
      { name: 'YYY', value: 700 },
      { name: 'UUU', value: 800 },
      { name: 'III', value: 900 },
      { name: 'NNN', value: 1000 },
    ];
    localStorage.setItem('records', JSON.stringify(initHistory));

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

  useEffect(() => {
    if (mainState.gameState === gameStates.PROCESSING) {
      processGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainState.gameState]);

  type RecordType = {
    name: string,
    value: number,
  };

  useEffect(() => {
    if (mainState.cells.length === 16 && mainState.gameState === gameStates.END) {
      setEnd(true);
      const records = JSON.parse(localStorage.getItem('records') as string);
      records.push({
        name: 'User',
        value: score,
      });
      records.sort((a: RecordType, b: RecordType) => a.value - b.value);
      localStorage.setItem('records', JSON.stringify(records.slice(0, 10)));
    }
  }, [mainState.cells.length, mainState.gameState, score]);

  const records = JSON.parse(localStorage.getItem('records') as string);

  return (
    <Layout>
      <OpenMenuBtn onClick={handleClickBtnOpen}>Menu</OpenMenuBtn>
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
      <MusicContext.Provider value={musicController}>
        {isOpenMenu && <GameMenu closeMenu={handleClickBtnOpen} />}
      </MusicContext.Provider>
      {isOpenHistory && <History onClose={handleCloseHistoryWidget} records={records} />}
      {isEnd && <EndGameWidget result={score} onClose={handleCloseEndGameWidget} />}
    </Layout>
  );
};

export default App;

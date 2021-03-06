import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { Transition } from 'react-transition-group';
import {
  KeyCodeToDirectionType,
  MainState,
  // MusicContextT,
  // MainThemeContextT,
  RecordType,
} from './types';
import Layout from './UI/Layout';
import Field from './UI/Field';
import ScoreContainer from './UI/Score';
import Button from './UI/Button';
import ControlPanel from './UI/ControlPanel';
import { moveCells, directions, initCells, delAndIncreaseCell, addCell } from './logic';
import Heading from './UI/Heading';
import Title from './UI/Title';
// import { MainThemeContext } from './appContext';
import { MixCtx } from './context/appContext';
import ScoreWrapper from './UI/Score/ScoreWrapper';
import GameIntro from './UI/GameIntro';
import GameExplanation from './UI/GameExplanation';
import ScoreAdd from './UI/Score/ScoreAdditional';
import GameMenu from './UI/GameMenu';
import OpenMenuBtn from './UI/GameMenu/OpenMenuBtn';
import History from './UI/History';
import EndGameWidget from './UI/EndGameWidget';
import Footer from './UI/Footer';
import { delay, initMainTheme, initScore } from './utils';
import './App.css';

const gameStates = {
  INIT: 'INIT',
  PROCESSING: 'PROCESSING',
  END: 'END',
};
const soundUrl = '/music.mp3';

// export const MusicContext = createContext({} as MusicContextT);
// export const MainThemeContext = createContext({} as MainThemeContextT);

const App: React.FC = () => {
  const initMainState = (): MainState => {
    if (localStorage.getItem('mainState')) {
      return JSON.parse(String(localStorage.getItem('mainState')));
    }

    return {
      cells: initCells(),
      gameState: gameStates.INIT,
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
  const [mainTheme, setMainTheme] = useState(initMainTheme('mainTheme'));
  const [cellsTheme, setCellsTheme] = useState(initMainTheme('cellsTheme'));
  const [cellTheme, setCellTheme] = useState(initMainTheme('cellTheme'));
  const [isEnd, setEnd] = useState(false);
  const [isPlay, setPlay] = useState(false);
  // const [playbackRate, setPlaybackRate] = useState(0.75);
  const [musicPlay, setMusicPlay] = useState(false);
  const nodeRef = useRef(null);
  const directionRef = useRef(new Set());
  // const audioHideRef = useRef(new Audio('/hide.mp3'));
  const audioMoveRef = useRef(new Audio('/move.mp3'));
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

  const toggleMainTheme = (): void => {
    setMainTheme((theme) => !theme);
  };

  const toggleCellsTheme = (): void => {
    setCellsTheme((theme) => !theme);
  };

  const toggleCellTheme = (): void => {
    setCellTheme((theme) => !theme);
  };

  const handleClickBtnNewGame = () => {
    localStorage.removeItem('mainState');
    setScore(0);
    setCells({
      cells: initCells(),
      gameState: gameStates.INIT,
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

  const handleClickBtnPlay = (): void => {
    setPlay((v) => !v);
  };

  // const musicController = {
  //   handlerToggleVolumeMusic,
  //   setMusicVolume,
  //   setAudioVolume,
  //   musicVolume,
  //   audioVolume,
  //   handleClickHistory,
  //   // setPlaybackRate
  // };

  // const mainThemeCtx = {
  //   value: mainTheme,
  //   toggleMainTheme,
  //   toggleCellsTheme,
  //   toggleCellTheme,
  // };

  const mix = {
    handlerToggleVolumeMusic,
    setMusicVolume,
    setAudioVolume,
    musicVolume,
    audioVolume,
    handleClickHistory,
    value: mainTheme,
    toggleMainTheme,
    toggleCellsTheme,
    toggleCellTheme,
  };

  const useKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
    KeyS: directions.DOWN,
    ArrowLeft: directions.LEFT,
    ArrowRight: directions.RIGHT,
    ArrowUp: directions.UP,
    ArrowDown: directions.DOWN,
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
          gameState: gameStates.INIT,
          moveDirection: '',
        };
        localStorage.setItem('mainState', JSON.stringify(newState));

        return newState;
      }

      return state;
    });
  };

  const handleKeyPress = async ({ code }: KeyboardEvent) => {
    if (['KeyA', 'KeyD', 'KeyW', 'KeyS', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      setCells(state => {
        if (state.gameState === gameStates.INIT) {
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
    localStorage.setItem('mainScore', JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    if (mainState.gameState === gameStates.PROCESSING) {
      processGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainState.gameState]);

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

  useEffect(() => localStorage.setItem('mainTheme', JSON.stringify(mainTheme)), [mainTheme]);
  useEffect(() => localStorage.setItem('cellsTheme', JSON.stringify(cellsTheme)), [cellsTheme]);
  useEffect(() => localStorage.setItem('cellTheme', JSON.stringify(cellTheme)), [cellTheme]);

  useEffect(() => {
    // handleClickBtnNewGame();
    const move = () => {
      const direct = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

      setCells(state => {
        if (state.gameState === gameStates.INIT) {
          return {
            ...state,
            gameState: gameStates.PROCESSING,
            moveDirection: direct[Math.floor(Math.random() * 4)],
          }
        }

        return state
      });
    };

    let id: number;

    if (isPlay) {
      id = window.setInterval(() => move(), 2000);
    }

    return () => window.clearInterval(id);
  }, [isPlay]);

  return (
    <>
      <MixCtx.Provider value={mix}>
        <Layout val={mainTheme}>
          <Button onClick={handleClickBtnPlay}>
            Autoplay
          </Button>
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
          <Field cells={mainState.cells} cellsTheme={cellsTheme} cellTheme={cellTheme} />
          <GameExplanation />
          {/* <MusicContext.Provider value={musicController}> */}
          {isOpenMenu && <GameMenu closeMenu={handleClickBtnOpen} />}
          {/* </MusicContext.Provider> */}
          {isOpenHistory && <History onClose={handleCloseHistoryWidget} records={records} />}
          {isEnd && <EndGameWidget result={score} onClose={handleCloseEndGameWidget} />}
        </Layout>
        <Footer val={mainTheme} />
      </MixCtx.Provider>
    </>
  );
};

export default App;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnCloseSvg } from './btn-close.svg';
import OnOffButton from '../OnOffButton';
import MusicSlider from '../MusicSlider';
import { MusicContext, MainThemeContext } from '../../App';
import ThemeSwitcher from '../ThemeSwitcher';

const Overlay = styled.div`
  display: block;
  opacity: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #091D1B;
  opacity: 0.9;
  z-index: 12;
  transition: all 200ms ease; 
`;

const BookingWidgetWrapper = styled.div`
  width: 301px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: #010810;
  opacity: 1;
  border: 5px solid #4C422D;
  border-radius: 10px;
  box-shadow: inset 0px 0px 1px 4px #f9cb0e;
  z-index: 13;
  transition: all 200ms ease; 

  @media only screen and (min-width: 0) and (max-width: 510px) {
    width: 301px;
  }
`;

const BookingWidget = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  font-family: system-ui;
  color: #D1B445;
`;

const WidgetHeader = styled.div`
  padding: 24px 50px 21px;
  height: 96px;
  width: 100%;
  text-align: center;
`;

const WidgetHeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 24px;
  line-height: 32px;
`;

const WidgetBtnClose = styled.div`
  padding: 10px;
  display: flex;
  left: -36px;
  align-items: center;
  font-size: 10px;
  position: absolute;
  z-index: 1;
  cursor: pointer;

  & svg {
    fill: #D1B445;
  }

  & svg:hover {
    fill: #ff1446;
  }
`;

const WidgetTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ServiceContainer = styled.div`
  position: relative;
  padding: 16px 16px 40px;
  // border-bottom: 5px solid #bbada0;
`;

const Span = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  padding: 5px 50px;
  position: relative;
  border-radius: 20px;
  border: 3px solid #4C422D;
  box-shadow: inset 0px 0px 1px 2px #f9cb0e;
  color: #fff;
  transition: all 200ms ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 7px;
    left: 10px;
    border: 10px solid #f9cb0e;
    border-radius: 50%;
  }
    
  &:hover {
    transform: scale(1.1);
    background-color: #0F0D0E;
  } 
`;

interface GameMenuProps {
  closeMenu: () => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ closeMenu }) => {
  const { setMusicVolume, setAudioVolume, musicVolume, audioVolume, handleClickHistory } = useContext(MusicContext);
  const { toggleMainTheme, toggleCellsTheme, toggleCellTheme } = useContext(MainThemeContext);

  const handleMusicVolume = (value: number): void => {
    setMusicVolume(Number(value));
    localStorage.setItem('musicVolume', `${value}`);
  };

  const handleAudioVolume = (value: number): void => {
    setAudioVolume(Number(value));
    localStorage.setItem('audioVolume', `${value}`);
  };

  return (
    <Overlay>
      <BookingWidgetWrapper>
        <BookingWidget>
          <WidgetHeader>
            <WidgetHeaderTitleContainer>
              <WidgetBtnClose onClick={closeMenu}>
                <BtnCloseSvg />
              </WidgetBtnClose>
              <WidgetTitle>
                Menu
                </WidgetTitle>
            </WidgetHeaderTitleContainer>
          </WidgetHeader>
          <ServiceContainer>
            <Span>Music</Span>
            <MusicSlider id='music' text='music' callback={handleMusicVolume} value={musicVolume} />
          </ServiceContainer>
          <ServiceContainer>
            <Span>Sound</Span>
            <MusicSlider id='audio' text='sound' callback={handleAudioVolume} value={audioVolume} />
          </ServiceContainer>
          <ServiceContainer className='flex'>
            <Span>Main Theme</Span>
            <ThemeSwitcher id='switch-theme' callback={toggleMainTheme} />
          </ServiceContainer>
          <ServiceContainer className='flex'>
            <Span>Field Theme</Span>
            <ThemeSwitcher id='switch-cells' callback={toggleCellsTheme} />
          </ServiceContainer>
          <ServiceContainer className='flex'>
            <Span>Cell Theme</Span>
            <ThemeSwitcher id='switch-cell' callback={toggleCellTheme} />
          </ServiceContainer>
          <ServiceContainer>
            <OnOffButton />
          </ServiceContainer>
          <ServiceContainer>
            <Span onClick={handleClickHistory}>Battle History</Span>
          </ServiceContainer>
        </BookingWidget>
      </BookingWidgetWrapper>
    </Overlay>
  );
};

export default GameMenu;

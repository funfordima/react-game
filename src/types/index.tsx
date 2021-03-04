export type cellsType = {
  x: number,
  y: number,
  value: number,
  id: string,
  state: string,
  by: cellsType | null,
}

export interface KeyCodeToDirectionType {
  [key: string]: string,
}

export interface MainState {
  cells: cellsType[],
  gameState: string,
  moveDirection: string,
}

export interface MusicContextT {
  handlerToggleVolumeMusic: () => void,
  setMusicVolume: React.Dispatch<React.SetStateAction<number>>,
  setAudioVolume: React.Dispatch<React.SetStateAction<number>>,
  musicVolume: number,
  audioVolume: number,
  handleClickHistory: () => void,
  // setPlaybackRate:  React.Dispatch<React.SetStateAction<number>>,
}

export interface MainThemeContextT {
  value: boolean,
  toggleMainTheme: () => void,
  toggleCellsTheme: () => void,
  toggleCellTheme: () => void,
}

export type RecordType = {
  name: string,
  value: number,
};

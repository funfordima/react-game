import { createContext } from 'react';
import { MusicContextT, MainThemeContextT, Mix } from '../types';

export const MusicContext = createContext({} as MusicContextT);
export const MainThemeContext = createContext({} as MainThemeContextT);
export const MixCtx = createContext({} as Mix);

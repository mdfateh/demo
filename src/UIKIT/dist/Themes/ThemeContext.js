import React from 'react';
import LightTheme from './LightTheme';
export const ThemeContext = React.createContext(LightTheme);
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

import {createContext, useContext} from 'react';
import {themeContext} from 'types/theme';

export const ThemeContext = createContext<themeContext>({
  theme: 'light',
  switchToDarkMode: () => {},
  switchToLightMode: () => {},
});

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;

import React, {FC} from 'react';
import {ThemeContext} from './Context';
import {themeContext} from 'types/theme';
import {useState} from 'react';

const Provider: FC = ({children}) => {
  const [theme, setTheme] = useState<themeContext['theme']>('light');
  const switchToDarkMode = () => setTheme('dark');
  const switchToLightMode = () => setTheme('light');

  return (
    <ThemeContext.Provider value={{theme, switchToDarkMode, switchToLightMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;

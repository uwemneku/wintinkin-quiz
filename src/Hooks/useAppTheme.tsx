import {useAppThemeContext} from '../Context';
import {LIGHT_THEME, DARK_THEME} from '../constants';

const useAppTheme = () => {
  const {theme} = useAppThemeContext();
  switch (theme) {
    case 'dark':
      return DARK_THEME;
    case 'light':
      return LIGHT_THEME;
  }
};

export default useAppTheme;

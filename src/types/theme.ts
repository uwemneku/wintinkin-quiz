export interface Theme {
  primary: string;
}

export type themeContext = {
  theme: 'light' | 'dark';
  switchToLightMode: () => void;
  switchToDarkMode: () => void;
};

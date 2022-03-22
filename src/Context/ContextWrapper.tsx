import React, {FC} from 'react';
import {AppThemeProvider} from './Theme';

const ContextWrapper: FC = ({children}) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

export default ContextWrapper;

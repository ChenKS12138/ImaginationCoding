import {DefaultTheme} from 'react-native-paper';

import {baseRed} from './color'

export default  theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#3498db',
    primary:baseRed,
    accent:baseRed
    // accent: '#f1c40f',
  }
};
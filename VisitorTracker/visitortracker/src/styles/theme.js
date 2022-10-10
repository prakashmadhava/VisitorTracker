import { createTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import {colors} from './constants'

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500]
      },
      secondary: {
        main: green[500]
      }
    },
    appBar:{
      position: 'releative',
      minHeight: 110,
      color: colors.Patriach,
      backgroundColour: colors.LightPatriarch
    }
  });

  export default theme;
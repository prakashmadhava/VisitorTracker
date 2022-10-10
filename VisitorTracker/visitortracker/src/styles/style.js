import {colors} from './constants';
import theme from './theme'

const useStyles = () => ({
    appBar:{
        position: 'releative',
        minHeight: 110,
        color: colors.Patriach,
        backgroundColour: theme.palette.background.paper
    }
})

export default useStyles;
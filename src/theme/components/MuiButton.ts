import { Components } from '@mui/material/styles';
import palette from '../palette';

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 20,
      padding: '8px 16px',
    },
    contained: {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: palette.primary.main,
      border: '1px solid transparent',
      transition: 'all 0.3s ease',
      color: palette.common.white,
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        backgroundColor: palette.text.primary,
        border: '1px solid ' + palette.common.black,
        color: palette.common.white,
      },
      '&:active': {
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
      },
    },
  },
};

export default MuiButton;
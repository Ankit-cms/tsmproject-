import { Components } from '@mui/material/styles';

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      padding: '8px 16px',
    },
    contained: {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
      },
    },
  },
};

export default MuiButton;
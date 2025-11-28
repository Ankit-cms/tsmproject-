import { Components } from '@mui/material/styles';

const MuiCard: Components['MuiCard'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      boxShadow: 'none',
    },
  },
  // variants: [
  //   {
  //     props: { variant: 'outlined' },
  //     style: {
  //       backgroundColor: 'var(--palette-common-cardBg)',
  //       border: '1px solid var(--palette-divider)',
  //       borderRadius: 12,
  //       transition: 'all 0.3s ease-in-out',
  //       '&:hover': {
  //         borderColor: 'var(--palette-primary-main)',
  //         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  //         transform: 'translateY(-2px)',
  //       },
  //     },
  //   },
  // ],
};

export default MuiCard;
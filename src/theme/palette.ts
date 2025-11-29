const palette = {
  primary: {
    main: '#8B9C9C',     // soft greenish-grey (your main)
    light: '#E9ECEC',    // lighter variant / hover
    dark: '#476556ff',     // for active / emphasis
    contrastText: '#121212', // near-black for readability
  },
  secondary: {
    main: '#CED0D6',     // soft light gray (accent)
    light: '#E3E4EB',    // subtle hover/outline
    dark: '#A5A8B0',     // for text/icons on gray
    contrastText: '#1A1A1A',
  },
  background: {
    default: '#F8F7FF',  // full page background (your color)
    paper: '#FFFFFF',    // surfaces like cards, sections
  },
  text: {
    primary: '#222222',  // not pure black
    secondary: '#555555',
  },
  common: {
    black: '#121212',    // soft black
    white: '#FAFAFA',    // soft white
    whiteSmoke: '#F8F7FF', // aligning with background
    grayLight: '#E9ECEC',  // your alternate
    cardBg: '#EBE8FE',   // your card color
  },
};
export default palette;
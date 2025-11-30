import { Components } from "@mui/material/styles";

const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      boxShadow: "none", 
    },
  },
  variants: [
    // {
    //   props: { variant: "outlined" },
    //   style: {
    //     boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
    //     border: "1px solid rgba(0, 0, 0, 0.1)",
    //   },
    // },
    {
      props: { variant: "elevation" },
      style: {
        boxShadow: "0 1px 3px gainsboro",
        border: "none",  
      },
    },
  ],
};

export default MuiCard;

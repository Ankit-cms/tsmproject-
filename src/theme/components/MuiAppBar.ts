import { Components } from "@mui/material/styles";

const MuiAppBar: Components["MuiAppBar"] = {
  styleOverrides: {
    root: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    },
  },
};

export default MuiAppBar;

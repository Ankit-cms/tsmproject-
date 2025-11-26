import { Components } from "@mui/material/styles";
import palette from "../palette";

const MuiAppBar: Components["MuiAppBar"] = {
  styleOverrides: {
    root: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
      backgroundColor: palette.common.whiteSmoke, 
    },
  },
};

export default MuiAppBar;

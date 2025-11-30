import { Components } from "@mui/material/styles";

const MuiList: Components["MuiList"] = {
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};

const MuiListItemButton: Components["MuiListItemButton"] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      transition: "all 0.3s ease-in-out",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
        "& .MuiListItemText-primary": {
          textDecoration: "underline",
          textDecorationColor: "var(--palette-common-black)",
          textUnderlineOffset: "4px",
        },
      },
      "&.Mui-focusVisible": {
        backgroundColor: "transparent",
      },
      "&:active": {
        backgroundColor: "transparent",
      },
      "&.Mui-selected": {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
};

export { MuiListItemButton };
export default MuiList;

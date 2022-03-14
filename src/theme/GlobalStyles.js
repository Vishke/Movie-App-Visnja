import { GlobalStyles } from "@mui/material";
import theme from "./theme";

export const InputGlobalStyles = (
  <GlobalStyles
    styles={{
      body: {
        background: theme.palette.background,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.main,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
    }}
  />
);

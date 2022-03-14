import { MovieFilter } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import theme from "../theme/theme";

const Navigation = () => {
  return (
    <AppBar
      sx={{
        width: "100%",
        height: "4rem",
        bgcolor: theme.palette.topBar,
        position: "fixed",
      }}
    >
      <Toolbar>
        <MovieFilter />
        <Typography variant="h4">Movie App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

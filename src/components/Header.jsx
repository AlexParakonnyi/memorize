import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ handlerOpenMenu }) {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            maxWidth: theme.breakpoints.values.lg,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handlerOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Memorize
          </Typography>
          <Button color="inherit" sx={{ mr: 2 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

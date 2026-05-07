import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavItem from "../../router/NavItem";
import ROUTS from "../../router/Routs";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          My Logo
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavItem to={ROUTS.HOME} label="Home" />
            <NavItem to={ROUTS.TASKS} label="Tasks" />
            <NavItem to={ROUTS.ABOUT} label="About" />
            <NavItem to={ROUTS.CONTACT} label="Contact" />
          </Box>
          <Button variant="outlined" color="inherit" sx={{ ml: 2 }}>
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
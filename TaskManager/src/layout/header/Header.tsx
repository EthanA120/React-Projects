import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NavItem from "../../router/NavItem";
import ROUTS from "../../router/Routs";
import { useThemeContext } from "../../providers/ProjectThemeProvider";

function Header() {
    const theme = useTheme();
    const { toggleTheme } = useThemeContext();

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
                        {/* Use the 'end' prop for the Home link to ensure it's only active on the exact path */}
                        <NavItem to={ROUTS.HOME} label="Home" end />
                        <NavItem to={ROUTS.TASKS} label="Tasks" />
                        <NavItem to={ROUTS.ABOUT} label="About" />
                        <NavItem to={ROUTS.CONTACT} label="Contact" />
                    </Box>

                    <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
                        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ ml: 2 }}
                        component={Link}
                        to="/login"
                    >
                        Log In
                    </Button>
                    
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ ml: 2 }}
                        component={Link}
                        to="/register"
                    >
                        Register
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
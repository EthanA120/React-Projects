import { Box, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import { useState } from "react";

function Footer() {
    const [value, setValue] = useState(0);
    return (
        <Box sx={{ pb: 7 }}>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="latest" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="close to" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="archive" icon={<FolderIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
export default Footer;
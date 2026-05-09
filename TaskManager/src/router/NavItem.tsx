import { NavLink } from "react-router-dom";
import { Box } from "@mui/material"; // Import Box for styling

interface NavItemProps {
  to: string;
  label: string;
  end?: boolean; // Ensures the link is active only on exact path match
}

function NavItem({ to, label, end }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end} // Prevents parent routes from staying active when children are selected
      style={{ textDecoration: "none" }} // Basic styling for the link
    >
      {({ isActive }) => (
        <Box
          sx={{
            display: "inline-flex", // Align content
            alignItems: "center",
            gap: "8px",
            fontFamily: "cursive", // Inherit font from Material UI theme
            fontSize: "1rem",
            fontWeight: "500",
            padding: "8px 16px",
            borderRadius: "4px", // Slightly smaller border-radius
            transition: "background-color 0.3s ease, color 0.3s ease",
            backgroundColor: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent", // Active background
            color: "white", // All links are white in the AppBar
            "&:hover": {
              backgroundColor: isActive ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)", // Hover effect
            },
          }}
        >
          {label}
        </Box>
      )}
    </NavLink>
  );
}
export default NavItem;
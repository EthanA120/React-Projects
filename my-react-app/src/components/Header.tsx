import { Button } from "@mui/material";

function Header() {
  return (
    <>
      <div
      style={{
        display: "felx",
        justifyContent: "space-between",
        margin: "10px"
        }}>
        <Button variant="contained">Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </div>
    </>
  );
}

export default Header;
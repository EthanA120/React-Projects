import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
function ProgressBar() {
  const [percent, setPercent] = useState(0);
  const handleAdd = () => {
    if (percent < 100) {
      setPercent((prev) => prev + 10);
    }
  };
  const handleMinus = () => {
    if (percent > 0) {
      setPercent((prev) => prev - 10);
    }
  };
  return (
    <>
      <Box sx={{ height: "100px", backgroundColor: "black" }}>
        <Box
          sx={{
            height: "100px",
            backgroundColor: "yellow",
            width: percent + "%",
          }}
        ></Box>
      </Box>
      <Button onClick={handleAdd}>+</Button>
      <Button onClick={handleMinus}>-</Button>
      <Typography>The progess is :{percent}%</Typography>
    </>
  );
}
export default ProgressBar;
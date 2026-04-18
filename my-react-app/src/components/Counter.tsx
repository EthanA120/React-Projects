import { Button, Typography } from "@mui/material";
import { useState } from "react";

function Counter() {
	const [ myCounter, setMyCounter ] = useState<number>(0);

	function increment() {
		setMyCounter((prev) => prev + 1);
	}

	function decrement() {
		setMyCounter((prev) => prev - 1);
	}

	return (
		<>
			<div style={{display: "flex", alignItems: "center"}}>
				<Button variant="contained" onClick={decrement}> - </Button>
				<Typography align="center"> {myCounter} </Typography>
				<Button variant="contained" onClick={increment}> + </Button>
			</div>
		</>
	);
}

export default Counter;
